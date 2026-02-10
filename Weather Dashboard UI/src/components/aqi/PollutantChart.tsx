import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { time: '00:00', aqi: 45 },
  { time: '03:00', aqi: 48 },
  { time: '06:00', aqi: 52 },
  { time: '09:00', aqi: 58 },
  { time: '12:00', aqi: 68 },
  { time: '15:00', aqi: 72 },
  { time: '18:00', aqi: 65 },
  { time: '21:00', aqi: 58 },
  { time: '24:00', aqi: 50 },
];

export function PollutantChart() {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="aqiGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#eab308" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#eab308" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a3a4a" />
          <XAxis 
            dataKey="time" 
            stroke="#6b7280" 
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6b7280" 
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1a2332', 
              border: '1px solid #2a3a4a',
              borderRadius: '8px'
            }}
          />
          <Area
            type="monotone"
            dataKey="aqi"
            stroke="#eab308"
            strokeWidth={2}
            fill="url(#aqiGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
