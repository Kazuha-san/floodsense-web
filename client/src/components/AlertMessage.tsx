import { AlertTriangle, TrendingDown } from 'lucide-react';

interface AlertMessageProps {
  data: any;
}

export default function AlertMessage({ data }: AlertMessageProps) {
  if (!data || !data.alert) {
    return null;
  }

  const {
    alert,
    shortest_route_risk,
    recommended_route_risk,
  } = data;

  const riskReduction = (shortest_route_risk || 0) - (recommended_route_risk || 0);

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
              <p className="text-xl font-bold text-red-600">{shortest_route_risk?.toFixed(2) || 'N/A'}/5</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="text-xs text-gray-600 mb-1">Recommended Route Risk</p>
              <p className="text-xl font-bold text-green-600">{recommended_route_risk?.toFixed(2) || 'N/A'}/5</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <div className="flex items-center gap-1">
                <TrendingDown size={16} className="text-green-600" />
                <p className="text-xs text-gray-600">Risk Reduction</p>
              </div>
              <p className="text-xl font-bold text-green-600">{riskReduction.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
