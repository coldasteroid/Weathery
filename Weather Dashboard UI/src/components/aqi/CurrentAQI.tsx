import { useRef } from 'react';
import { Search, MapPin, Calendar, Wind, Upload } from 'lucide-react';

interface CurrentAQIProps {
  aqi: number;
  status: string;
  city: string;
  date: string;
  mainPollutant: string;
  onUpload?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CurrentAQI({ aqi, status, city, date, mainPollutant, onUpload }: CurrentAQIProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getStatusColor = (s: string) => {
    switch (s.toLowerCase()) {
      case 'good': return { bg: 'bg-green-500', text: 'text-green-400', label: 'bg-green-500/20' };
      case 'moderate': return { bg: 'bg-yellow-500', text: 'text-yellow-400', label: 'bg-yellow-500/20' };
      case 'unhealthy': return { bg: 'bg-orange-500', text: 'text-orange-400', label: 'bg-orange-500/20' };
      default: return { bg: 'bg-red-500', text: 'text-red-400', label: 'bg-red-500/20' };
    }
  };

  const colors = getStatusColor(status);

  return (
    <div className="bg-[#252525] rounded-3xl p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-48 h-48 ${colors.bg}/10 rounded-full blur-3xl`}></div>

      {/* Upload Icon */}
      <div className="flex justify-end mb-4 relative z-10">
        <input
          type="file"
          ref={fileInputRef}
          onChange={onUpload}
          className="hidden"
          style={{ display: 'none' }}
          accept=".csv"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-10 h-10 rounded-full bg-[#3a3a3a] hover:bg-[#4a4a4a] transition-colors flex items-center justify-center"
          title="Upload Air Quality Data"
        >
          <Upload className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* AQI Display */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 ${colors.bg} flex items-center justify-center`}>
            <Wind className="w-10 h-10 text-white" />
          </div>
        </div>

        <div className="text-7xl mb-2">{Math.round(aqi)}</div>

        <div className="flex items-center gap-2 mb-2">
          <div className={`px-3 py-1 ${colors.label} rounded-full`}>
            <span className={`${colors.text} text-sm`}>{status}</span>
          </div>
        </div>

        <div className="text-gray-400 mb-6">Air Quality Index</div>

        {/* Location and Time */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{city}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>

        {/* Main Pollutant */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Main Pollutant</div>
          <div className="text-lg">{mainPollutant}</div>
        </div>
      </div>

      {/* 3-Day Forecast */}
      <div className="mt-4 pt-4 border-t border-gray-700">
        <h3 className="text-sm text-gray-400 mb-3">3-Day Forecast</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Tomorrow</span>
            <div className="flex items-center gap-2">
              <div className="w-12 h-2 bg-green-500 rounded"></div>
              <span className="text-sm text-white">45 - Good</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Wed</span>
            <div className="flex items-center gap-2">
              <div className="w-12 h-2 bg-green-500 rounded"></div>
              <span className="text-sm text-white">48 - Good</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Thu</span>
            <div className="flex items-center gap-2">
              <div className="w-12 h-2 bg-yellow-500 rounded"></div>
              <span className="text-sm text-white">62 - Moderate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
