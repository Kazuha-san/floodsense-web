import { useState } from 'react';
import { MapPin, AlertTriangle, CheckCircle, Clock, TrendingDown } from 'lucide-react';

export default function DemoSection() {
  const [selectedRoute, setSelectedRoute] = useState('recommended');

  const demoData = {
    scenario: {
      time: '7:30 PM',
      rainfall: '72 mm/hr',
      alertLevel: 'RED',
      start: 'MP Nagar',
      end: 'Airport',
    },
    routes: [
      {
        id: 'recommended',
        name: 'FloodSense Recommended',
        path: 'MP Nagar → VIP Road → BHEL → Airport',
        distance: '18.5 km',
        time: '32 min',
        avgRisk: 1.8,
        riskLevel: 'LOW',
        riskColor: 'from-green-500 to-green-600',
        waypoints: [
          { name: 'MP Nagar', risk: 2.93, label: 'START' },
          { name: 'VIP Road', risk: 2.15, label: 'Safe' },
          { name: 'BHEL', risk: 2.41, label: 'Safe' },
          { name: 'Airport', risk: 1.65, label: 'END' },
        ],
      },
      {
        id: 'shortest',
        name: 'Shortest Route (Risky)',
        path: 'MP Nagar → New Market → Kolar → Airport',
        distance: '16.2 km',
        time: '28 min',
        avgRisk: 4.2,
        riskLevel: 'CRITICAL',
        riskColor: 'from-red-500 to-red-600',
        waypoints: [
          { name: 'MP Nagar', risk: 2.93, label: 'START' },
          { name: 'New Market', risk: 3.40, label: 'HIGH' },
          { name: 'Kolar', risk: 3.82, label: 'CRITICAL' },
          { name: 'Airport', risk: 1.65, label: 'END' },
        ],
      },
    ],
  };

  const getRiskBadge = (risk: number) => {
    if (risk >= 4) return { label: 'CRITICAL', color: 'bg-red-100 text-red-700 border-red-300' };
    if (risk >= 3) return { label: 'HIGH', color: 'bg-orange-100 text-orange-700 border-orange-300' };
    if (risk >= 2) return { label: 'MODERATE', color: 'bg-yellow-100 text-yellow-700 border-yellow-300' };
    if (risk >= 1) return { label: 'LOW', color: 'bg-green-100 text-green-700 border-green-300' };
    return { label: 'CLEAR', color: 'bg-cyan-100 text-cyan-700 border-cyan-300' };
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">
          Live Demo
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See FloodSense in action during a heavy monsoon event
        </p>
      </div>

      {/* Scenario Header */}
      <div className="floating-card bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-6 md:p-8 border-2 border-cyan-300 mb-8 animate-fade-in-up">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-xs font-semibold text-cyan-700 mb-1">Time</p>
            <p className="text-lg font-mono font-bold text-gray-800">{demoData.scenario.time}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-cyan-700 mb-1">Rainfall</p>
            <p className="text-lg font-mono font-bold text-red-600">{demoData.scenario.rainfall}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-cyan-700 mb-1">Alert Level</p>
            <p className="text-lg font-mono font-bold text-red-700">{demoData.scenario.alertLevel}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-cyan-700 mb-1">Route</p>
            <p className="text-lg font-mono font-bold text-gray-800">
              {demoData.scenario.start} → {demoData.scenario.end}
            </p>
          </div>
        </div>
      </div>

      {/* Route Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {demoData.routes.map((route) => (
          <div
            key={route.id}
            onClick={() => setSelectedRoute(route.id)}
            className={`floating-card cursor-pointer transition-all transform ${
              selectedRoute === route.id ? 'ring-2 ring-cyan-500 scale-105' : ''
            } animate-fade-in-up`}
            style={{ animationDelay: route.id === 'recommended' ? '0.1s' : '0.2s' }}
          >
            <div className={`bg-gradient-to-br ${route.riskColor} rounded-2xl p-6 md:p-8 border-2 border-opacity-30 ${
              route.id === 'recommended' ? 'border-green-500' : 'border-red-500'
            }`}>
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{route.name}</h3>
                  {route.id === 'recommended' && (
                    <span className="bg-white text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                      ✓ RECOMMENDED
                    </span>
                  )}
                </div>
                <p className="text-white text-opacity-90 text-sm">{route.path}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6 bg-white bg-opacity-20 rounded-lg p-4">
                <div>
                  <p className="text-xs text-white text-opacity-80 mb-1">Distance</p>
                  <p className="font-bold text-white">{route.distance}</p>
                </div>
                <div>
                  <p className="text-xs text-white text-opacity-80 mb-1">Time</p>
                  <p className="font-bold text-white">{route.time}</p>
                </div>
                <div>
                  <p className="text-xs text-white text-opacity-80 mb-1">Avg Risk</p>
                  <p className="font-bold text-white">{route.avgRisk.toFixed(1)}/5.0</p>
                </div>
              </div>

              {/* Risk Level Badge */}
              <div className="mb-6">
                <span className={`inline-block px-4 py-2 rounded-full font-bold text-sm ${
                  route.id === 'recommended'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {route.riskLevel}
                </span>
              </div>

              {/* Waypoints */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-white text-opacity-80 mb-3">Risk per Waypoint</p>
                {route.waypoints.map((wp, i) => {
                  const badge = getRiskBadge(wp.risk);
                  return (
                    <div key={i} className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-white" />
                        <span className="text-sm font-medium text-white">{wp.name}</span>
                        {wp.label && (
                          <span className="text-xs text-white text-opacity-70 font-mono">({wp.label})</span>
                        )}
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded border ${badge.color}`}>
                        {wp.risk.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Comparison */}
      <div className="floating-card bg-white rounded-2xl p-6 md:p-8 border-2 border-cyan-200 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h3 className="text-2xl font-bold text-teal-700 mb-6">Why FloodSense Recommends the Safer Route</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Risk Breakdown */}
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-red-900">Shortest Route Problem</h4>
                  <p className="text-sm text-red-800 mt-1">
                    Passes through Kolar (risk 3.82/5) and New Market (risk 3.40/5)—both flood-prone areas that will experience severe congestion in 60 minutes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-start gap-3 mb-2">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-green-900">Recommended Route Advantage</h4>
                  <p className="text-sm text-green-800 mt-1">
                    Routes through VIP Road (risk 2.15/5) and BHEL (risk 2.41/5)—safer areas with better drainage and lower flood history.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Key Metrics */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg p-4 border border-cyan-300">
              <div className="flex items-center gap-3 mb-2">
                <TrendingDown className="text-cyan-600" size={20} />
                <h4 className="font-bold text-cyan-900">Risk Reduction</h4>
              </div>
              <p className="text-3xl font-bold text-cyan-700 mb-1">
                {(demoData.routes[1].avgRisk - demoData.routes[0].avgRisk).toFixed(1)}
              </p>
              <p className="text-sm text-cyan-800">
                Lower average risk score (1.8 vs 4.2)
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-300">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-orange-600" size={20} />
                <h4 className="font-bold text-orange-900">Time Trade-off</h4>
              </div>
              <p className="text-3xl font-bold text-orange-700 mb-1">+4 min</p>
              <p className="text-sm text-orange-800">
                32 min vs 28 min—worth the safety gain
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg">
          Try FloodSense Now
        </button>
        <p className="text-gray-600 text-sm mt-4">
          Available for Bhopal during monsoon season • Real-time predictions • Google Maps integration
        </p>
      </div>
    </div>
  );
}
