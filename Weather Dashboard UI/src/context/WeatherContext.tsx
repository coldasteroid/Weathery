import React, { createContext, useContext, useEffect, useState } from 'react';
import { ProcessedWeather } from '../types';
import { parseCSV } from '../utils/weatherData';

interface WeatherContextType {
    weatherData: ProcessedWeather[];
    currentWeather: ProcessedWeather | null;
    loading: boolean;
    error: string | null;
    setCurrentIndex: (index: number) => void;
    currentIndex: number;
    setWeatherData: (data: ProcessedWeather[]) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({ children }: { children: React.ReactNode }) {
    const [weatherData, setWeatherData] = useState<ProcessedWeather[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await parseCSV('/weatherHistory.csv');
                setWeatherData(data);
                if (data.length > 0) {
                    setCurrentIndex(0);
                }
                setLoading(false);
            } catch (err) {
                console.error("Error loading CSV", err);
                setError('Failed to load weather data');
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const value = {
        weatherData,
        currentWeather: weatherData[currentIndex] || null,
        loading,
        error,
        setCurrentIndex,
        currentIndex,
        setWeatherData,
    };

    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    );
}

export function useWeather() {
    const context = useContext(WeatherContext);
    if (context === undefined) {
        throw new Error('useWeather must be used within a WeatherProvider');
    }
    return context;
}
