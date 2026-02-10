import { Wind, Grid3x3, Map, MapPin, Mic, Calendar, Settings } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-[120px] bg-[#252525] rounded-3xl p-6 flex flex-col items-center gap-8">
      {/* Logo */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 bg-[#3a3a3a] rounded-xl flex items-center justify-center">
          <Wind className="w-6 h-6 text-green-400" />
        </div>
        <span className="text-xs text-gray-400">AirQual</span>
      </div>

      {/* Divider */}
      <div className="w-8 h-[1px] bg-gray-700"></div>

      {/* Navigation Icons */}
      <nav className="flex flex-col gap-6">
        <button className="w-12 h-12 rounded-xl bg-[#3a3a3a] hover:bg-[#4a4a4a] transition-colors flex items-center justify-center">
          <Grid3x3 className="w-5 h-5 text-gray-400" />
        </button>
        <button className="w-12 h-12 rounded-xl hover:bg-[#3a3a3a] transition-colors flex items-center justify-center">
          <Map className="w-5 h-5 text-gray-400" />
        </button>
        <button className="w-12 h-12 rounded-xl hover:bg-[#3a3a3a] transition-colors flex items-center justify-center">
          <MapPin className="w-5 h-5 text-gray-400" />
        </button>
        <button className="w-12 h-12 rounded-xl hover:bg-[#3a3a3a] transition-colors flex items-center justify-center">
          <Mic className="w-5 h-5 text-gray-400" />
        </button>
        <button className="w-12 h-12 rounded-xl hover:bg-[#3a3a3a] transition-colors flex items-center justify-center">
          <Calendar className="w-5 h-5 text-gray-400" />
        </button>
        <button className="w-12 h-12 rounded-xl hover:bg-[#3a3a3a] transition-colors flex items-center justify-center">
          <Settings className="w-5 h-5 text-gray-400" />
        </button>
      </nav>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-4">
        <button className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
          <span className="text-xl">🔔</span>
        </button>
        <button className="w-12 h-12 rounded-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  );
}
