import Papa from 'papaparse';
import { WeatherData, ProcessedWeather } from '../types';

export const parseCSV = async (url: string): Promise<ProcessedWeather[]> => {
    return new Promise((resolve, reject) => {
        Papa.parse(url, {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                const data = results.data as WeatherData[];
                const processed = data
                    .filter(row => row['Formatted Date']) // Filter empty rows
                    .map((row) => ({
                        date: new Date(row['Formatted Date']),
                        temp: row['Temperature (C)'],
                        summary: row['Summary'],
                        humidity: row['Humidity'],
                        windSpeed: row['Wind Speed (km/h)'],
                        pressure: row['Pressure (millibars)'],
                        visibility: row['Visibility (km)'],
                        precipType: row['Precip Type'],
                        dailySummary: row['Daily Summary'],
                        city: 'Finland',
                        feelsLike: row['Apparent Temperature (C)'],
                    }));
                resolve(processed);
            },
            error: (error) => {
                reject(error);
            },
        });
    });
};

export const parseWeatherFile = (file: File): Promise<ProcessedWeather[]> => {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                const data = results.data as WeatherData[];
                const processed = data
                    .filter(row => row['Formatted Date'])
                    .map((row) => ({
                        date: new Date(row['Formatted Date']),
                        temp: row['Temperature (C)'],
                        summary: row['Summary'],
                        humidity: row['Humidity'],
                        windSpeed: row['Wind Speed (km/h)'],
                        pressure: row['Pressure (millibars)'],
                        visibility: row['Visibility (km)'],
                        precipType: row['Precip Type'],
                        dailySummary: row['Daily Summary'],
                        city: 'Finland',
                        feelsLike: row['Apparent Temperature (C)'],
                    }));
                resolve(processed);
            },
            error: (error) => {
                reject(error);
            },
        });
    });
};
