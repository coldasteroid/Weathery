import { CloudRain, Cloud, CloudDrizzle, Sun } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { useWeather } from '../context/WeatherContext';

export function Forecast() {
  const { weatherData, currentIndex, setCurrentIndex } = useWeather();
  console.log(weatherData);

  // Get daily forecast (one per day approx, every 24th item)
  // We want the next 7 days from the *current* index time.
  const forecastList = weatherData
    .slice(currentIndex, currentIndex + 7 * 24)
    .filter((_, i) => i % 24 === 0)
    .map((item, localIndex) => {
      const fullIndex = currentIndex + (localIndex * 24);
      return { ...item, originalIndex: fullIndex };
    })
    .slice(0, 7);

  // Tomorrow Data (next 24 hours hourly temp? or just next few hours?)
  // The original component had "Tomorrow" and "Rainy Storm Clouds"
  // Let's just show the hourly trend for the *selected* day or next 24 hours.
  // We'll take next 6 hours from currentIndex.
  const hourlyData = weatherData.slice(currentIndex, currentIndex + 8).map((item, i) => ({
    time: new Date(item.date).getHours(),
    temp: item.temp
  }));

  const handleDayClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (!weatherData.length) return null;

  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg">7 days Forecast</h2>
        <select className="bg-[#3a3a3a] text-sm px-3 py-1 rounded-lg border-none text-gray-400">
          <option>7 day</option>
          <option>14 day</option>
        </select>
      </div>

      {/* Forecast List */}
      <div className="space-y-3 mb-6 flex-1 overflow-y-auto">
        {forecastList.map((item, index) => {
          const date = new Date(item.date);
          const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
          const shortDate = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short' }).format(date);

          return (
            <div
              key={index}
              className={`flex items-center justify-between py-3 px-4 rounded-xl cursor-pointer transition-colors ${item.originalIndex === currentIndex ? 'bg-blue-600' : 'bg-[#1a2332] hover:bg-[#2a3342]'}`}
              onClick={() => handleDayClick(item.originalIndex)}
            >
              <div className="flex items-center gap-3">
                {item.summary.toLowerCase().includes('rain') ? (
                  <CloudRain className="w-8 h-8 text-gray-300" />
                ) : item.summary.toLowerCase().includes('cloud') ? (
                  <Cloud className="w-8 h-8 text-gray-300" />
                ) : (
                  <Sun className="w-8 h-8 text-yellow-400" />
                )}
                <span className="text-white text-sm truncate w-24">{item.summary}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-400 w-16">{shortDate}</span>
                <span className="text-gray-300 w-24">{dayName}</span>
                <span className="text-white w-10">{Math.round(item.temp)}°</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hourly Trend Section */}
      <div className="bg-[#1a2332] rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <CloudDrizzle className="w-10 h-10 text-gray-300" />
          <div>
            <div className="text-2xl">{Math.round(weatherData[currentIndex].temp)}°</div>
            <div className="text-xs text-gray-400">{weatherData[currentIndex].summary}</div>
          </div>
        </div>

        <div className="text-xs text-gray-400 mb-2">Hourly Trend</div>

        {/* Mini chart */}
        <div className="h-24 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hourlyData}>
              <XAxis dataKey="time" hide />
              <Tooltip
                contentStyle={{ backgroundColor: '#252525', border: 'none', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
                labelFormatter={(label) => `${label}:00`}
              />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}