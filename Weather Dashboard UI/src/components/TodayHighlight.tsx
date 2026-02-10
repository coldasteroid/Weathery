import { Wind, Droplets, Eye, Thermometer, Gauge } from 'lucide-react';
import { WindChart } from './WindChart';
import { useWeather } from '../context/WeatherContext';

export function TodayHighlight() {
  const { currentWeather } = useWeather();

  if (!currentWeather) return null;

  return (
    <div className="bg-[#252525] rounded-3xl p-6">
      <h2 className="text-lg mb-4">Today's Highlight</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Wind Status */}
        <div className="bg-[#1a2332] rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400">Wind Status</span>
            <Wind className="w-5 h-5 text-gray-400" />
          </div>
          <div className="mt-3">
            <span className="text-4xl font-medium">{currentWeather.windSpeed}</span>
            <span className="text-sm text-gray-400 ml-1">km/h</span>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            {new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).format(currentWeather.date)}
          </div>
        </div>

        {/* Humidity */}
        <div className="bg-[#1a2332] rounded-2xl p-4">
          <span className="text-sm text-gray-400 block mb-2">Humidity</span>
          <div className="flex items-end gap-2 mt-4">
            <span className="text-4xl font-medium">{Math.round(currentWeather.humidity * 100)}</span>
            <span className="text-xl text-gray-400 mb-1">%</span>
          </div>
          <Droplets className="w-5 h-5 text-blue-400 mt-2" />
        </div>

        {/* Visibility */}
        <div className="bg-[#1a2332] rounded-2xl p-4">
          <span className="text-sm text-gray-400 block mb-2">Visibility</span>
          <div className="flex items-end gap-2 mt-4">
            <span className="text-4xl font-medium">{(currentWeather.visibility).toFixed(2)}</span>
            <span className="text-xl text-gray-400 mb-1">km</span>
          </div>
          <Eye className="w-5 h-5 text-blue-400 mt-2" />
        </div>

        {/* Feels Like */}
        <div className="bg-[#1a2332] rounded-2xl p-4">
          <span className="text-sm text-gray-400 block mb-2">Feels Like</span>
          <div className="flex items-end gap-2 mt-4">
            <span className="text-4xl font-medium">{Math.round(currentWeather.feelsLike)}</span>
            <span className="text-xl text-gray-400 mb-1">°</span>
          </div>
          <Thermometer className="w-5 h-5 text-orange-400 mt-2" />
        </div>

        {/* Pressure */}
        <div className="bg-[#1a2332] rounded-2xl p-4">
          <span className="text-sm text-gray-400 block mb-2">Pressure</span>
          <div className="flex items-end gap-2 mt-4">
            <span className="text-4xl font-medium">{currentWeather.pressure}</span>
            <span className="text-xl text-gray-400 mb-1">mb</span>
          </div>
          <Gauge className="w-5 h-5 text-purple-400 mt-2" />
        </div>

        {/* Precip Type (Additional Info) */}
        <div className="bg-[#1a2332] rounded-2xl p-4">
          <span className="text-sm text-gray-400 block mb-2">Precipitation</span>
          <div className="mt-4">
            <span className="text-2xl font-medium capitalize">{currentWeather.precipType || 'None'}</span>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            {currentWeather.dailySummary}
          </div>
        </div>
      </div>
    </div>
  );
}
