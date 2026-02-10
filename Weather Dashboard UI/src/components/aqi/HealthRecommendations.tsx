import { Heart, Users, Baby, Activity, AlertCircle } from 'lucide-react';

const recommendations = [
  {
    icon: Heart,
    title: 'General Public',
    description: 'Air quality is acceptable. Enjoy outdoor activities.',
    color: 'text-green-400',
  },
  {
    icon: Users,
    title: 'Sensitive Groups',
    description: 'Consider reducing prolonged outdoor exertion.',
    color: 'text-yellow-400',
  },
  {
    icon: Baby,
    title: 'Children & Elderly',
    description: 'Limit outdoor time if feeling symptoms.',
    color: 'text-yellow-400',
  },
  {
    icon: Activity,
    title: 'Active People',
    description: 'Reduce intense outdoor activities.',
    color: 'text-yellow-400',
  },
];

export function HealthRecommendations() {
  return (
    <div className="p-6 h-full overflow-y-auto">
      <div className="flex items-center gap-2 mb-6">
        <AlertCircle className="w-5 h-5 text-blue-400" />
        <h2 className="text-lg">Health Recommendations</h2>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="bg-[#1a2332] rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <rec.icon className={`w-6 h-6 ${rec.color} mt-1`} />
              <div className="flex-1">
                <h3 className="text-sm mb-1">{rec.title}</h3>
                <p className="text-xs text-gray-400">{rec.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}
