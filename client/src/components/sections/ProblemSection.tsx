import { Cloud, AlertTriangle, MapPin } from 'lucide-react';

export default function ProblemSection() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="animate-slide-in-left">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
            When Heavy Rain Strikes, Every Second Counts
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            During monsoon season, cities face a critical challenge: unpredictable flooding transforms familiar routes into dangerous bottlenecks. Traditional navigation systems show you the shortest path—but not the safest one.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Cloud className="text-cyan-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Unpredictable Weather</h3>
                <p className="text-gray-600 text-sm">Rainfall intensity can exceed IMD red alert thresholds in minutes</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Cascading Failures</h3>
                <p className="text-gray-600 text-sm">Flood-prone areas create traffic gridlock that spreads across the city</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Reactive Navigation</h3>
                <p className="text-gray-600 text-sm">Current systems reroute you after congestion forms, not before</p>
              </div>
            </div>
          </div>

          <p className="text-base text-gray-700 italic border-l-4 border-teal-500 pl-4">
            "What if your navigation system could predict where traffic will collapse 60 minutes from now—and route you around it before it happens?"
          </p>
        </div>

        {/* Right: Visual */}
        <div className="animate-slide-in-right">
          <div className="relative">
            {/* Animated background shapes */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-teal-100 rounded-3xl opacity-30 animate-float"></div>
            
            <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-cyan-100">
              <div className="space-y-6">
                {/* Scenario card */}
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-6 border border-cyan-200">
                  <h3 className="font-semibold text-teal-700 mb-3">Current Scenario</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-mono text-gray-800">7:30 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Rainfall:</span>
                      <span className="font-mono text-red-600 font-semibold">72 mm/hr</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Alert Level:</span>
                      <span className="font-mono text-red-600 font-semibold">RED</span>
                    </p>
                  </div>
                </div>

                {/* Problem illustration */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                    <p className="text-xs font-semibold text-red-700 mb-2">Shortest Route</p>
                    <div className="h-16 bg-gradient-to-b from-red-200 to-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🚗</span>
                    </div>
                    <p className="text-xs text-red-600 mt-2 font-mono">Risk: 4.2/5</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-xs font-semibold text-green-700 mb-2">Safe Route</p>
                    <div className="h-16 bg-gradient-to-b from-green-200 to-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <p className="text-xs text-green-600 mt-2 font-mono">Risk: 1.8/5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
