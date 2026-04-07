import { Brain, Cloud, Navigation } from 'lucide-react';

export default function ModelsSection() {
  const agents = [
    {
      name: 'Agent 1: Weather Watcher',
      icon: Cloud,
      color: 'from-cyan-500 to-cyan-600',
      description: 'Analyzes rainfall intensity, duration, humidity, and historical precipitation',
      inputs: ['Rainfall (mm/hr)', 'Duration (hours)', 'Humidity (%)', 'Previous 24h rain (mm)'],
      output: 'Weather Severity Score (0-5)',
      role: 'Detects when conditions exceed IMD red alert threshold (64.5 mm/hr)',
    },
    {
      name: 'Agent 2: Flood Zone Mapper',
      icon: Brain,
      color: 'from-orange-500 to-orange-600',
      description: 'Evaluates location-specific flood risk based on geography and history',
      inputs: ['Weather Severity', 'Elevation (m)', 'Drainage Quality', 'Flood History'],
      output: 'Flood Risk Score (0-5)',
      role: 'Identifies which city nodes are most vulnerable to flooding',
    },
    {
      name: 'Agent 3: Traffic Mapper',
      icon: Navigation,
      color: 'from-teal-500 to-teal-600',
      description: 'Predicts traffic congestion based on weather and road capacity',
      inputs: ['Weather Severity', 'Peak Congestion', 'Road Capacity', 'Time of Day'],
      output: 'Traffic Risk Score (0-5)',
      role: 'Forecasts where traffic will collapse during heavy rain',
    },
  ];

  const chuck = {
    name: 'Chuck: The Master Predictor',
    description: 'Synthesizes all three agent scores into a unified 60-minute risk forecast',
    inputs: ['Weather Score', 'Flood Score', 'Traffic Score'],
    output: 'Integrated Risk Score (0-5)',
    role: 'Predicts which routes will become dangerous in the next 60 minutes',
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">
          The Three Agents + Master Predictor
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A multi-agent AI system that runs in parallel to compute real-time flood and traffic risk
        </p>
      </div>

      {/* Three Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {agents.map((agent, index) => {
          const Icon = agent.icon;
          return (
            <div
              key={index}
              className="floating-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl p-6 border-2 border-cyan-200 hover:border-cyan-400 transition-all h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${agent.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">{agent.name}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {agent.description}
                </p>

                {/* Role */}
                <div className="bg-cyan-50 rounded-lg p-3 mb-4 border border-cyan-200">
                  <p className="text-xs font-semibold text-cyan-700 mb-1">Role</p>
                  <p className="text-sm text-cyan-900">{agent.role}</p>
                </div>

                {/* Inputs */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Inputs</p>
                  <div className="space-y-1">
                    {agent.inputs.map((input, i) => (
                      <p key={i} className="text-xs text-gray-600 font-mono bg-gray-50 px-2 py-1 rounded">
                        • {input}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Output */}
                <div className="bg-gradient-to-r from-cyan-100 to-teal-100 rounded-lg p-3 border border-cyan-300">
                  <p className="text-xs font-semibold text-teal-700 mb-1">Output</p>
                  <p className="text-sm font-bold text-teal-900">{agent.output}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chuck - Master Predictor */}
      <div className="floating-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Chuck Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-900">{chuck.name}</h3>
              </div>
              <p className="text-gray-700 mb-6">
                {chuck.description}
              </p>
              <p className="text-sm text-gray-600 italic border-l-4 border-purple-400 pl-4 mb-6">
                "{chuck.role}"
              </p>
            </div>

            {/* Right: Inputs and Output */}
            <div className="space-y-4">
              {/* Inputs */}
              <div className="bg-white rounded-xl p-4 border border-purple-200">
                <p className="text-xs font-semibold text-purple-700 mb-3">Receives from Agents</p>
                <div className="space-y-2">
                  {chuck.inputs.map((input, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm font-mono text-gray-700">{input}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output */}
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-4 border-2 border-purple-300">
                <p className="text-xs font-semibold text-purple-700 mb-2">Produces</p>
                <p className="text-lg font-bold text-purple-900">{chuck.output}</p>
                <p className="text-xs text-purple-700 mt-2">Used to rank and recommend the safest route</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How They Work Together */}
      <div className="mt-12 bg-white rounded-2xl p-8 border-2 border-cyan-200">
        <h3 className="text-2xl font-bold text-teal-700 mb-6">How They Work Together</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Parallel Execution
            </h4>
            <p className="text-gray-600 text-sm">
              When rainfall exceeds the threshold, all three agents activate simultaneously and evaluate all 10 city nodes in parallel for maximum speed.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Score Merging
            </h4>
            <p className="text-gray-600 text-sm">
              Individual scores are merged into a single timestamped row in the central database, creating a unified risk profile for each location.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Route Evaluation
            </h4>
            <p className="text-gray-600 text-sm">
              When a user requests a route, Chuck reads the latest database entry for each waypoint and predicts the 60-minute risk.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              Intelligent Ranking
            </h4>
            <p className="text-gray-600 text-sm">
              Routes are ranked by time-weighted average risk, ensuring you take the path that minimizes your exposure to dangerous conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
