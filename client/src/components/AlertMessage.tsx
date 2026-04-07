import { AlertTriangle, TrendingDown } from 'lucide-react';

interface AlertMessageProps {
  data: any;
}

export default function AlertMessage({ data }: AlertMessageProps) {
  // Handle both real backend format and mock data
  let alert = {
    level: 'HIGH',
    originalRisk: 4.2,
    recommendedRisk: 1.8,
    riskReduction: 2.4,
    message: 'Heavy rain incoming. Predicted HIGH congestion risk on standard route in the next 60 minutes.',
  };

  // Check if data has real backend format
  if (data.alert) {
    alert = {
      level: data.alert.level || 'HIGH',
      originalRisk: data.shortest_route_risk || 4.2,
      recommendedRisk: data.recommended_route_risk || 1.8,
      riskReduction: (data.shortest_route_risk || 4.2) - (data.recommended_route_risk || 1.8),
      message: data.alert.message || data.prediction_summary || 'Heavy rain incoming.',
    };
  }

  return (
    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-2 border-orange-300 p-6 shadow-sm">
      <div className="flex gap-4">
        <AlertTriangle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-orange-900 mb-2">FloodSense Alert</h3>
          <p className="text-orange-800 mb-4">{alert.message}</p>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="text-xs text-gray-600 mb-1">Shortest Route Risk</p>
              <p className="text-xl font-bold text-red-600">{alert.originalRisk.toFixed(2)}/5</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="text-xs text-gray-600 mb-1">Recommended Route Risk</p>
              <p className="text-xl font-bold text-green-600">{alert.recommendedRisk.toFixed(2)}/5</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <div className="flex items-center gap-1">
                <TrendingDown size={16} className="text-green-600" />
                <p className="text-xs text-gray-600">Risk Reduction</p>
              </div>
              <p className="text-xl font-bold text-green-600">{alert.riskReduction.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
