interface UVIndexGaugeProps {
  value: number;
  max?: number;
}

export function UVIndexGauge({ value, max = 10 }: UVIndexGaugeProps) {
  const percentage = (value / max) * 100;
  const rotation = (percentage / 100) * 180 - 90;

  return (
    <div className="relative w-full h-24 flex items-center justify-center">
      {/* Background arc */}
      <svg className="w-32 h-16" viewBox="0 0 128 64">
        <path
          d="M 10 54 A 54 54 0 0 1 118 54"
          fill="none"
          stroke="#2a3a4a"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M 10 54 A 54 54 0 0 1 118 54"
          fill="none"
          stroke="url(#uvGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${(percentage / 100) * 170} 170`}
        />
        <defs>
          <linearGradient id="uvGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
