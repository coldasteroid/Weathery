import { Cloud, Plus, Minus, Settings, Menu, Layers } from 'lucide-react';

export function WeatherMap() {
  return (
    <div className="bg-[#252525] rounded-3xl p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg">Weather condition map</h2>
        <select className="bg-[#3a3a3a] text-sm px-3 py-1 rounded-lg border-none text-gray-400">
          <option>24 hr</option>
          <option>48 hr</option>
        </select>
      </div>

      {/* Map Container */}
      <div className="relative h-[400px] bg-gradient-to-br from-[#1a2a3a] via-[#2a3a4a] to-[#1a2a3a] rounded-2xl overflow-hidden">
        {/* Decorative map background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <path
              d="M 100 200 Q 200 100, 300 200 T 500 200 T 700 200"
              fill="none"
              stroke="#3a5a6a"
              strokeWidth="1"
            />
            <path
              d="M 150 250 Q 250 150, 350 250 T 550 250"
              fill="none"
              stroke="#3a5a6a"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Weather overlay effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          <div className="absolute inset-0 bg-gradient-radial from-blue-400/30 via-cyan-400/20 to-transparent rounded-full blur-2xl"></div>
        </div>

        {/* Location markers */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <Cloud className="w-8 h-8 text-white" />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#2a3a4a] px-2 py-1 rounded-lg text-xs whitespace-nowrap">
              23°
            </div>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">
              California
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 translate-x-8">
          <div className="relative">
            <div className="bg-blue-400/50 backdrop-blur-sm px-3 py-2 rounded-lg">
              <div className="text-sm">21°</div>
              <div className="text-xs text-gray-300">to 19°</div>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400">90%</div>
          </div>
        </div>

        <div className="absolute bottom-1/3 left-1/3">
          <div className="relative">
            <Cloud className="w-6 h-6 text-white/70" />
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">30°</div>
          </div>
        </div>

        {/* Bottom location buttons */}
        <div className="absolute bottom-6 left-6 flex gap-3">
          <button className="bg-[#2a3a4a] hover:bg-[#3a4a5a] px-4 py-2 rounded-lg text-sm transition-colors">
            California, US
          </button>
          <button className="bg-[#2a3a4a] hover:bg-[#3a4a5a] px-4 py-2 rounded-lg text-sm transition-colors">
            Tokyo, US
          </button>
          <button className="bg-[#2a3a4a] hover:bg-[#3a4a5a] px-4 py-2 rounded-lg text-sm transition-colors">
            Florida, US
          </button>
        </div>

        {/* Map controls */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <button className="w-10 h-10 bg-[#2a3a4a] hover:bg-[#3a4a5a] rounded-lg flex items-center justify-center transition-colors">
            <Plus className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-[#2a3a4a] hover:bg-[#3a4a5a] rounded-lg flex items-center justify-center transition-colors">
            <Minus className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute right-6 bottom-6 flex flex-col gap-2">
          <button className="w-10 h-10 bg-[#2a3a4a] hover:bg-[#3a4a5a] rounded-lg flex items-center justify-center transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-[#2a3a4a] hover:bg-[#3a4a5a] rounded-lg flex items-center justify-center transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-[#2a3a4a] hover:bg-[#3a4a5a] rounded-lg flex items-center justify-center transition-colors">
            <Layers className="w-5 h-5" />
          </button>
        </div>

        {/* Precipitation legend */}
        <div className="absolute top-6 left-6">
          <div className="text-xs text-gray-400 mb-2">Precipitation</div>
          <div className="flex gap-2 items-center">
            <span className="text-xs">Extreme</span>
            <div className="flex gap-1">
              <div className="w-8 h-2 bg-red-500 rounded"></div>
              <div className="w-8 h-2 bg-orange-500 rounded"></div>
              <div className="w-8 h-2 bg-blue-500 rounded"></div>
              <div className="w-8 h-2 bg-cyan-300 rounded"></div>
            </div>
            <span className="text-xs">Light</span>
          </div>
        </div>
      </div>
    </div>
  );
}
