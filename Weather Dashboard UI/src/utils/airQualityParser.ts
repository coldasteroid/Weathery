import Papa from 'papaparse';
import { AirQualityData } from '../types';

export const parseAirQualityCSV = async (url: string): Promise<AirQualityData[]> => {
    return new Promise((resolve, reject) => {
        Papa.parse(url, {
            download: true,
            header: true,
            delimiter: ";", // The file uses semicolon delimiters
            dynamicTyping: true,
            complete: (results) => {
                const data = results.data as any[];

                const processed = data
                    .filter(row => row['Date'] && row['Time']) // Filter empty rows
                    .map((row) => {
                        // Helper to clean values (handle -200 as null/undefined, and comma as decimal)
                        const cleanVal = (val: any) => {
                            if (val === -200 || val === '-200') return null;
                            if (typeof val === 'string') {
                                return parseFloat(val.replace(',', '.'));
                            }
                            return val;
                        };

                        return {
                            date: row['Date'],
                            time: row['Time'],
                            co_gt: cleanVal(row['CO(GT)']),
                            pt08_s1_co: cleanVal(row['PT08.S1(CO)']),
                            nmhc_gt: cleanVal(row['NMHC(GT)']),
                            c6h6_gt: cleanVal(row['C6H6(GT)']),
                            pt08_s2_nmhc: cleanVal(row['PT08.S2(NMHC)']),
                            nox_gt: cleanVal(row['NOx(GT)']),
                            pt08_s3_nox: cleanVal(row['PT08.S3(NOx)']),
                            no2_gt: cleanVal(row['NO2(GT)']),
                            pt08_s4_no2: cleanVal(row['PT08.S4(NO2)']),
                            pt08_s5_o3: cleanVal(row['PT08.S5(O3)']),
                            t: cleanVal(row['T']),
                            rh: cleanVal(row['RH']),
                            ah: cleanVal(row['AH']),
                        } as AirQualityData;
                    });
                resolve(processed);
            },
            error: (error) => {
                reject(error);
            },
        });
    });
};

export const parseAirQualityFile = (file: File): Promise<AirQualityData[]> => {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            delimiter: ";",
            dynamicTyping: true,
            complete: (results) => {
                const data = results.data as any[];
                const processed = data
                    .filter(row => row['Date'] && row['Time'])
                    .map((row) => {
                        const cleanVal = (val: any) => {
                            if (val === -200 || val === '-200') return null;
                            if (typeof val === 'string') {
                                return parseFloat(val.replace(',', '.'));
                            }
                            return val;
                        };

                        return {
                            date: row['Date'],
                            time: row['Time'],
                            co_gt: cleanVal(row['CO(GT)']),
                            pt08_s1_co: cleanVal(row['PT08.S1(CO)']),
                            nmhc_gt: cleanVal(row['NMHC(GT)']),
                            c6h6_gt: cleanVal(row['C6H6(GT)']),
                            pt08_s2_nmhc: cleanVal(row['PT08.S2(NMHC)']),
                            nox_gt: cleanVal(row['NOx(GT)']),
                            pt08_s3_nox: cleanVal(row['PT08.S3(NOx)']),
                            no2_gt: cleanVal(row['NO2(GT)']),
                            pt08_s4_no2: cleanVal(row['PT08.S4(NO2)']),
                            pt08_s5_o3: cleanVal(row['PT08.S5(O3)']),
                            t: cleanVal(row['T']),
                            rh: cleanVal(row['RH']),
                            ah: cleanVal(row['AH']),
                        } as AirQualityData;
                    });
                resolve(processed);
            },
            error: (error) => {
                reject(error);
            },
        });
    });
};
