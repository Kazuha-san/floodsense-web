interface WaveDividerProps {
  flip?: boolean;
}

export default function WaveDivider({ flip = false }: WaveDividerProps) {
  return (
    <div className={`section-divider ${flip ? 'transform scale-y-[-1]' : ''}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e0f7ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 Q300,0 600,40 T1200,40 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          className="animate-wave"
        />
        <path
          d="M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="#ffffff"
          opacity="0.5"
          className="animate-wave"
          style={{ animationDelay: '0.2s' }}
        />
      </svg>
    </div>
  );
}
