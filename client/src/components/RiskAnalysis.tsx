interface RiskAnalysisProps {
  data: any;
}

export default function RiskAnalysis({ data }: RiskAnalysisProps) {
  const getRiskColor = (score: number) => {
    if (score >= 4) return 'bg-red-100 text-red-800 border-red-300';
    if (score >= 3) return 'bg-orange-100 text-orange-800 border-orange-300';
    if (score >= 2) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    if (score >= 1) return 'bg-green-100 text-green-800 border-green-300';
    return 'bg-blue-100 text-blue-800 border-blue-300';
  };

  const getRiskLabel = (score: number) => {
    if (score >= 4) return 'CRITICAL';
    if (score >= 3) return 'HIGH';
    if (score >= 2) return 'MODERATE';
    if (score >= 1) return 'LOW';
    return 'CLEAR';
  };

  // Handle both mock data and real backend data
  let waypoints: any[] = [];

  // Check if data has risk_60min (real backend format)
  if (data.risk_60min) {
    waypoints = Object.entries(data.risk_60min).map(([location, risk]: any) => ({
      location,
      risk: typeof risk === 'object' ? risk.risk_60min : risk,
    }));
  } 
  // Fallback to mock data format
  else if (data.waypoints) {
    waypoints = data.waypoints;
  }

  return (
    <div className="bg-white rounded-lg border border-cyan-200 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Risk Scores Along Route (60-min forecast)</h3>
      <div className="space-y-3">
        {waypoints.length > 0 ? (
          waypoints.map((wp, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div>
                <p className="font-semibold text-gray-800">{wp.location}</p>
                <p className="text-sm text-gray-600">Waypoint {idx + 1}</p>
              </div>
              <div className={`px-4 py-2 rounded-lg font-bold border ${getRiskColor(wp.risk)}`}>
                {wp.risk.toFixed(2)} - {getRiskLabel(wp.risk)}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No waypoint data available</p>
        )}
      </div>
    </div>
  );
}
