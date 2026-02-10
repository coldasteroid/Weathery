import { useRef } from 'react';
import { Cloud, MapPin, Calendar, Upload, CloudRain, Sun } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';
import { parseWeatherFile } from '../utils/weatherData';

export function CurrentWeather() {
  const { currentWeather, loading, setWeatherData } = useWeather();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const data = await parseWeatherFile(file);
      setWeatherData(data);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to parse weather file");
    }
  };

  if (loading) {
    return <div className="bg-[#252525] rounded-3xl p-6 h-[400px] flex items-center justify-center">Loading...</div>;
  }

  if (!currentWeather) {
    return <div className="bg-[#252525] rounded-3xl p-6 h-[400px] flex items-center justify-center">No Data</div>;
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(currentWeather.date);

  return (
    <div className="bg-[#252525] rounded-3xl p-6 relative overflow-hidden h-full flex flex-col justify-between">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 mb-6 mt-8">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            {/* Weather Icon Container */}
            <div className="relative">
              <div className="w-20 h-20">
                {currentWeather.summary.toLowerCase().includes('rain') ? (
                  <CloudRain className="w-20 h-20 text-gray-300" />
                ) : currentWeather.summary.toLowerCase().includes('cloud') ? (
                  <Cloud className="w-20 h-20 text-gray-300" />
                ) : (
                  <Sun className="w-20 h-20 text-yellow-400" />
                )}
              </div>
            </div>
          </div>

          {/* Upload Button */}
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              style={{ display: 'none' }}
              accept=".csv"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-10 h-10 rounded-full bg-[#3a3a3a] hover:bg-[#4a4a4a] transition-colors flex items-center justify-center"
              title="Upload Weather Data"
            >
              <Upload className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="text-7xl mb-2">{Math.round(currentWeather.temp)}°c</div>

        <div className="flex items-center gap-2 text-gray-400 mb-6">
          {currentWeather.summary.toLowerCase().includes('rain') ? <CloudRain className="w-5 h-5" /> : <Cloud className="w-5 h-5" />}
          <span>{currentWeather.summary}</span>
        </div>

        {/* Time */}
        <div className="space-y-2">

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>


        </div>
      </div>
    </div>
  );
}
