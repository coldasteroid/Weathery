import { PollutantCard } from './PollutantCard';
import { PollutantChart } from './PollutantChart';

interface PollutantData {
  name: string;
  value: number;
  unit: string;
  level: string;
  color: string;
  max: number;
}

interface PollutantBreakdownProps {
  pollutants: PollutantData[];
}

export function PollutantBreakdown({ pollutants }: PollutantBreakdownProps) {
  return (
    <div className="bg-[#252525] rounded-3xl p-6">
      <h2 className="text-lg mb-4">Pollutant Breakdown</h2>

      {/* Pollutant Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {pollutants.map((pollutant, index) => (
          <PollutantCard key={index} {...pollutant} />
        ))}
      </div>

      {/* 24-Hour Trend */}
      <div className="bg-[#1a2332] rounded-2xl p-4">
        <h3 className="text-sm text-gray-400 mb-3">24-Hour AQI Trend</h3>
        <PollutantChart />
      </div>
    </div>
  );
}
