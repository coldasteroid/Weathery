import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface HistoryPoint {
  day: string;
  co: number;
  nox: number;
  no2: number;
}

interface AQIHistoryProps {
  history: HistoryPoint[];
}

export function AQIHistory({ history }: AQIHistoryProps) {
  return (
    <div className="bg-[#252525] rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg">History Trends</h2>
        <select className="bg-[#3a3a3a] text-sm px-3 py-1 rounded-lg border-none text-gray-400">
          <option>Last 7 days</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={history}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a3a4a" />
            <XAxis
              dataKey="day"
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
            <Legend
              wrapperStyle={{ fontSize: '12px' }}
            />
            <Line
              type="monotone"
              dataKey="co"
              stroke="#eab308"
              strokeWidth={2}
              name="CO"
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="nox"
              stroke="#3b82f6"
              strokeWidth={2}
              name="NOx"
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="no2"
              stroke="#10b981"
              strokeWidth={2}
              name="NO2"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* AQI Scale Reference */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="text-xs text-gray-400 mb-2">AQI Scale</div>
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2">
            <div className="w-12 h-3 bg-green-500 rounded"></div>
            <span className="text-xs text-gray-400">0-50 Good</span>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <div className="w-12 h-3 bg-yellow-500 rounded"></div>
            <span className="text-xs text-gray-400">51-100 Moderate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
