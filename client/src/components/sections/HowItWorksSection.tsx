import { Cloud, Zap, Database, Navigation, MapPin, AlertCircle } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      phase: 'Pipeline A',
      title: 'Heavy Rain Detected',
      description: 'Rainfall crosses 64.5 mm/hr IMD threshold',
      icon: Cloud,
      color: 'from-cyan-500 to-cyan-600',
      details: ['Agent 1: Weather Severity', 'Agent 2: Flood Zone Mapper', 'Agent 3: Traffic Mapper'],
    },
    {
      phase: 'Central Hub',
      title: 'Risk Scores Computed',
      description: 'All 10 city nodes evaluated in parallel',
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
      details: ['Weather Score (0-5)', 'Flood Score (0-5)', 'Traffic Score (0-5)'],
    },
    {
      phase: 'Database',
      title: 'Data Persisted',
      description: 'Timestamped risk scores written to central database',
      icon: Database,
      color: 'from-teal-500 to-teal-600',
      details: ['Timestamp', 'Location', 'Risk Scores'],
    },
    {
      phase: 'Pipeline B',
      title: 'User Query',
      description: 'User enters start and end location',
      icon: MapPin,
      color: 'from-cyan-500 to-cyan-600',
      details: ['Route Interceptor', 'BFS Algorithm', '3 Candidate Routes'],
    },
    {
      phase: 'Prediction',
      title: 'Risk Forecast',
      description: 'Chuck predicts 60-minute risk for each waypoint',
      icon: AlertCircle,
      color: 'from-orange-500 to-orange-600',
      details: ['Risk Score per Node', 'Time-weighted Average', 'Route Ranking'],
    },
    {
      phase: 'Output',
      title: 'Safe Route',
      description: 'Safest route with risk scores and Google Maps link',
      icon: Navigation,
      color: 'from-green-500 to-green-600',
      details: ['Recommended Path', 'Risk Visualization', 'Navigation Link'],
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">
          End-to-End Workflow
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From real-time weather detection to intelligent route prediction—here's how FloodSense keeps you safe
        </p>
      </div>

      {/* Workflow Timeline */}
      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Workflow Node */}
              <div className="floating-card bg-white rounded-2xl p-6 md:p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Icon */}
                  <div className="md:col-span-2 flex justify-center md:justify-start">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full">
                        {step.phase}
                      </span>
                      <span className="text-xs font-semibold text-gray-500">Step {index + 1}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md font-mono"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decision Point */}
                  <div className="md:col-span-3 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-4 border border-cyan-200">
                    <p className="text-xs font-semibold text-cyan-700 mb-2">Decision Point</p>
                    <p className="text-sm text-gray-700 font-mono">
                      {index === 0 && 'Rainfall ≥ 64.5 mm/hr?'}
                      {index === 1 && 'Compute all agents in parallel'}
                      {index === 2 && 'Write timestamped row'}
                      {index === 3 && 'Find 3 best routes'}
                      {index === 4 && 'Predict risk_60min'}
                      {index === 5 && 'Rank by avg risk'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="workflow-arrow">
                  <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="floating-card bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 border border-cyan-300">
          <h4 className="font-bold text-cyan-900 mb-2">Real-Time Processing</h4>
          <p className="text-sm text-cyan-800">Agents run in parallel for instant risk assessment</p>
        </div>
        <div className="floating-card bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-300">
          <h4 className="font-bold text-orange-900 mb-2">60-Minute Forecast</h4>
          <p className="text-sm text-orange-800">Predict traffic collapse before it happens</p>
        </div>
        <div className="floating-card bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-300">
          <h4 className="font-bold text-green-900 mb-2">Intelligent Routing</h4>
          <p className="text-sm text-green-800">Time-weighted risk ranking for optimal paths</p>
        </div>
      </div>
    </div>
  );
}
