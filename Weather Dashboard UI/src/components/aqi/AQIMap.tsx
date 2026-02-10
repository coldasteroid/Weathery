import { Plus, Minus, Settings, Menu, Layers } from 'lucide-react';

const locations = [
  { name: 'San Francisco', aqi: 68, level: 'Moderate', color: 'bg-yellow-500', x: '25%', y: '40%' },
  { name: 'Oakland', aqi: 52, level: 'Good', color: 'bg-green-500', x: '35%', y: '45%' },
  { name: 'San Jose', aqi: 45, level: 'Good', color: 'bg-green-500', x: '30%', y: '60%' },
  { name: 'Berkeley', aqi: 58, level: 'Moderate', color: 'bg-yellow-500', x: '28%', y: '35%' },
  { name: 'Palo Alto', aqi: 42, level: 'Good', color: 'bg-green-500', x: '25%', y: '55%' },
];

export function AQIMap() {
  return (
    <div className="bg-[#252525] rounded-3xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg">Regional Air Quality Map</h2>
        <select className="bg-[#3a3a3a] text-sm px-3 py-1 rounded-lg border-none text-gray-400">
          <option>Bay Area</option>
          <option>California</option>
          <option>United States</option>
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
            <circle cx="200" cy="150" r="80" fill="none" stroke="#3a5a6a" strokeWidth="1" />
            <circle cx="400" cy="200" r="60" fill="none" stroke="#3a5a6a" strokeWidth="1" />
          </svg>
        </div>

        {/* AQI overlay zones */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64">
          <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-yellow-400/10 to-transparent rounded-full blur-2xl"></div>
        </div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48">
          <div className="absolute inset-0 bg-gradient-radial from-green-400/20 via-green-400/10 to-transparent rounded-full blur-2xl"></div>
        </div>

        {/* Location markers */}
        {locations.map((location, index) => (
          <div 
            key={index}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: location.x, top: location.y }}
          >
            <div className="relative">
              {/* Marker dot */}
              <div className={`w-4 h-4 ${location.color} rounded-full shadow-lg group-hover:scale-125 transition-transform`}></div>
              
              {/* Info popup on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-[#2a3a4a] backdrop-blur-sm px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                  <div className="text-sm font-medium">{location.name}</div>
                  <div className="text-xs text-gray-400">AQI: {location.aqi}</div>
                  <div className={`text-xs ${location.color.replace('bg-', 'text-')}`}>{location.level}</div>
                </div>
              </div>

              {/* Pulsing ring */}
              <div className={`absolute inset-0 ${location.color} rounded-full animate-ping opacity-20`}></div>
            </div>
          </div>
        ))}

        {/* Location comparison cards */}
        <div className="absolute bottom-6 left-6 flex gap-3">
          <button className="bg-[#2a3a4a] hover:bg-[#3a4a5a] px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            San Francisco - 68
          </button>
          <button className="bg-[#2a3a4a] hover:bg-[#3a4a5a] px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            Oakland - 52
          </button>
          <button className="bg-[#2a3a4a] hover:bg-[#3a4a5a] px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            San Jose - 45
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

        {/* AQI Legend */}
        <div className="absolute top-6 left-6">
          <div className="text-xs text-gray-400 mb-2">AQI Level</div>
          <div className="flex gap-2 items-center bg-[#2a3a4a]/80 backdrop-blur-sm px-3 py-2 rounded-lg">
            <div className="flex gap-1">
              <div className="w-8 h-3 bg-green-500 rounded flex items-center justify-center text-[10px]">0</div>
              <div className="w-8 h-3 bg-yellow-500 rounded flex items-center justify-center text-[10px]">50</div>
              <div className="w-8 h-3 bg-orange-500 rounded flex items-center justify-center text-[10px]">100</div>
              <div className="w-8 h-3 bg-red-500 rounded flex items-center justify-center text-[10px]">150</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
