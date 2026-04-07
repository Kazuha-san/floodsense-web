import { AlertTriangle, TrendingDown } from 'lucide-react';

interface AlertMessageProps {
  data: any;
}

export default function AlertMessage({ data }: AlertMessageProps) {
  // Mock alert data - replace with actual data from your notebook
  const alert = {
    level: 'HIGH',
    originalRisk: 4.2,
    recommendedRisk: 1.8,
    riskReduction: 2.4,
    message: 'Heavy rain incoming. Predicted HIGH congestion risk on standard route in the next 60 minutes. FloodSense reroutes you via safer corridors. This avoids flood-prone areas before they collapse.',
  };

  return (
    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-2 border-orange-300 p-6 shadow-sm">
      <div className="flex gap-4">
        <AlertTriangle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-orange-900 mb-2">FloodSense Alert</h3>
          <p className="text-orange-800 mb-4">{alert.message}</p>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="text-xs text-gray-600 mb-1">Original Route Risk</p>
              <p className="text-xl font-bold text-red-600">{alert.originalRisk.toFixed(1)}/5</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="text-xs text-gray-600 mb-1">Recommended Route Risk</p>
              <p className="text-xl font-bold text-green-600">{alert.recommendedRisk.toFixed(1)}/5</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <div className="flex items-center gap-1">
                <TrendingDown size={16} className="text-green-600" />
                <p className="text-xs text-gray-600">Risk Reduction</p>
              </div>
              <p className="text-xl font-bold text-green-600">{alert.riskReduction.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
