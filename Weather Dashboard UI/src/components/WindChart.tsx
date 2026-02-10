import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Line, LineChart } from 'recharts';

const data = [
  { time: '00:00', speed: 3 },
  { time: '01:00', speed: 4 },
  { time: '02:00', speed: 5 },
  { time: '03:00', speed: 6 },
  { time: '04:00', speed: 7 },
  { time: '05:00', speed: 8 },
  { time: '06:00', speed: 6 },
  { time: '07:00', speed: 5 },
  { time: '08:00', speed: 7 },
  { time: '09:00', speed: 9 },
];

export function WindChart() {
  return (
    <div className="h-24 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="windGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="speed"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="url(#windGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}