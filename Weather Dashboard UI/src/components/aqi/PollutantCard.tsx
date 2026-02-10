interface PollutantCardProps {
  name: string;
  value: number;
  unit: string;
  level: string;
  color: string;
  max: number;
}

export function PollutantCard({ name, value, unit, level, color, max }: PollutantCardProps) {
  const percentage = (value / max) * 100;
  
  const colorClasses = {
    green: 'bg-green-500/20 text-green-400',
    yellow: 'bg-yellow-500/20 text-yellow-400',
    orange: 'bg-orange-500/20 text-orange-400',
    red: 'bg-red-500/20 text-red-400',
  };

  const barColors = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
  };

  return (
    <div className="bg-[#1a2332] rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-400">{name}</span>
        <div className={`px-2 py-0.5 rounded-full text-xs ${colorClasses[color as keyof typeof colorClasses]}`}>
          {level}
        </div>
      </div>
      
      <div className="mb-2">
        <span className="text-3xl">{value}</span>
        <span className="text-sm text-gray-400 ml-1">{unit}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${barColors[color as keyof typeof barColors]}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
    </div>
  );
}
