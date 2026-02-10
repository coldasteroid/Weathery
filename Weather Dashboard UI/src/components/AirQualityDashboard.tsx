import React, { useEffect, useState } from 'react';
import { AirQualityData } from '../types';
import { parseAirQualityCSV } from '../utils/airQualityParser';
import { CurrentAQI } from './aqi/CurrentAQI';
import { PollutantBreakdown } from './aqi/PollutantBreakdown';


import { AQIMap } from './aqi/AQIMap';

import { parseAirQualityFile } from '../utils/airQualityParser';

export function AirQualityDashboard() {
    const [data, setData] = useState<AirQualityData[]>([]);
    const [loading, setLoading] = useState(true);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            const result = await parseAirQualityFile(file);
            setData(result);
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Failed to parse air quality file");
        }
    };

    useEffect(() => {
        const load = async () => {
            try {
                let result = await parseAirQualityCSV('/public/AirQuality.csv');
                if (result.length === 0) {
                    result = await parseAirQualityCSV('/AirQuality.csv');
                }
                setData(result);
            } catch (e) {
                console.error("Failed to load air quality data", e);
                try {
                    const result = await parseAirQualityCSV('/AirQuality.csv');
                    setData(result);
                } catch (err) { /* silent fail */ }
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    if (loading) return <div className="text-white p-6">Loading Air Quality Data...</div>;
    if (data.length === 0) return <div className="text-white p-6">No Data Available</div>;

    // --- Data Processing ---
    // Use the last available record as "Current"
    const current = data[data.length - 1]; // Or data[0] depending on sort order. Assuming CSV is chronological.

    // Simple AQI heuristic (very simplified)
    // CO is in mg/m^3 usually in this dataset (but labeled CO(GT)). 
    // Let's assume some normalization for the UI demonstration.
    // We'll map CO value to a 0-100 scale roughly for demo.
    const calculateAQI = (co: number) => {
        if (!co) return 50;
        return Math.min(Math.max(co * 10, 20), 180); // Arbitrary scaling for demo
    };

    const aqiValue = calculateAQI(current.co_gt);

    const getStatus = (aqi: number) => {
        if (aqi <= 50) return 'Good';
        if (aqi <= 100) return 'Moderate';
        if (aqi <= 150) return 'Unhealthy';
        return 'Hazardous';
    };

    const status = getStatus(aqiValue);

    // Pollutants for Breakdown
    const pollutants = [
        { name: 'CO', value: current.co_gt || 0, unit: 'mg/m³', level: 'Good', color: 'green', max: 10 },
        { name: 'NOx', value: current.nox_gt || 0, unit: 'ppb', level: 'Moderate', color: 'yellow', max: 500 },
        { name: 'NO₂', value: current.no2_gt || 0, unit: 'ppb', level: 'Good', color: 'green', max: 200 },
        { name: 'C6H6', value: current.c6h6_gt || 0, unit: 'µg/m³', level: 'Good', color: 'green', max: 50 },
    ];

    // History (Last 7 records)
    const history = data.slice(-7).map((d, i) => ({
        day: d.time?.split('.')[0] || `T-${7 - i}`, // Use time or index as label
        co: d.co_gt || 0,
        nox: d.nox_gt || 0,
        no2: d.no2_gt || 0
    }));



    return (
        <div className="space-y-6">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Current AQI */}
                <CurrentAQI
                    aqi={aqiValue}
                    status={status}
                    city="Station 1"
                    date={current.date}
                    mainPollutant="CO"
                    onUpload={handleFileUpload}
                />

                {/* Pollutant Breakdown */}
                <div className="lg:col-span-2">
                    <PollutantBreakdown pollutants={pollutants} />
                </div>
            </div>





            {/* Bottom Section: Map */}
            <div className="w-full">
                <AQIMap />
            </div>
        </div >
    );
}
