export interface WeatherData {
    'Formatted Date': string;
    Summary: string;
    'Precip Type': string;
    'Temperature (C)': number;
    'Apparent Temperature (C)': number;
    Humidity: number;
    'Wind Speed (km/h)': number;
    'Wind Bearing (degrees)': number;
    'Visibility (km)': number;
    'Loud Cover': number;
    'Pressure (millibars)': number;
    'Daily Summary': string;
}

export interface ProcessedWeather {
    date: Date;
    temp: number;
    summary: string;
    humidity: number;
    windSpeed: number;
    pressure: number;
    visibility: number;
    precipType: string;
    dailySummary: string;
    city: string; // Hardcoded or derived
    feelsLike: number;
}

export interface AirQualityData {
    date: string;
    time: string;
    co_gt: number;
    pt08_s1_co: number;
    nmhc_gt: number;
    c6h6_gt: number;
    pt08_s2_nmhc: number;
    nox_gt: number;
    pt08_s3_nox: number;
    no2_gt: number;
    pt08_s4_no2: number;
    pt08_s5_o3: number;
    t: number;
    rh: number;
    ah: number;
}


