import { Sunrise, Sunset } from 'lucide-react';

export function SunriseSunset() {
  return (
    <div className="relative h-24">
      {/* Arc path */}
      <svg className="w-full h-20" viewBox="0 0 200 80">
        {/* Dotted arc */}
        <path
          d="M 20 70 Q 100 10, 180 70"
          fill="none"
          stroke="#4a5a3a"
          strokeWidth="2"
          strokeDasharray="3 3"
        />
        {/* Sun indicator */}
        <circle cx="130" cy="35" r="6" fill="#fbbf24" />
      </svg>

      {/* Time labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs">
        <div className="flex flex-col items-start gap-1">
          <Sunrise className="w-4 h-4 text-yellow-400" />
          <span className="text-gray-400">Sunrise</span>
          <span className="text-white">5:50 AM</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <Sunset className="w-4 h-4 text-orange-400" />
          <span className="text-gray-400">Sunset</span>
          <span className="text-white">6:30 PM</span>
        </div>
      </div>
    </div>
  );
}
