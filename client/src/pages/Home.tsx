import { useState } from 'react';
import LocationForm from '@/components/LocationForm';
import MapDisplay from '@/components/MapDisplay';
import RiskAnalysis from '@/components/RiskAnalysis';
import AlertMessage from '@/components/AlertMessage';

export default function Home() {
  const [step, setStep] = useState<'input' | 'original' | 'analysis' | 'recommended'>('input');
  const [formData, setFormData] = useState({ from: '', to: '' });
  const [routeData, setRouteData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (from: string, to: string) => {
    setFormData({ from, to });
    setLoading(true);
    
    // TODO: Call your notebook backend here
    // const response = await fetch('/api/analyze-route', { 
    //   method: 'POST', 
    //   body: JSON.stringify({ from, to }) 
    // });
    // const data = await response.json();
    // setRouteData(data);
    
    setLoading(false);
    setStep('original');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-cyan-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">FS</span>
            </div>
            <h1 className="text-2xl font-bold text-teal-700">FloodSense</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Step 1: Location Input */}
        {step === 'input' && (
          <div className="space-y-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Smart Flood Rerouting</h2>
              <p className="text-gray-600">Enter your start and end location to get a safe route during heavy rain</p>
            </div>
            <LocationForm onSubmit={handleSubmit} loading={loading} />
          </div>
        )}

        {/* Step 2: Original Route Map */}
        {step === 'original' && formData.from && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Original Route</h2>
              <button
                onClick={() => setStep('input')}
                className="text-sm text-teal-600 hover:text-teal-700 font-medium"
              >
                ← Change Route
              </button>
            </div>
            <MapDisplay 
              from={formData.from} 
              to={formData.to}
              routeType="original"
            />
            <button
              onClick={() => setStep('analysis')}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Analyze Risk
            </button>
          </div>
        )}

        {/* Step 3: Risk Analysis */}
        {step === 'analysis' && routeData && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Risk Analysis</h2>
            <RiskAnalysis data={routeData} />
            <AlertMessage data={routeData} />
            <button
              onClick={() => setStep('recommended')}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              View Recommended Route
            </button>
          </div>
        )}

        {/* Step 4: Recommended Route Map */}
        {step === 'recommended' && routeData && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Recommended Safe Route</h2>
            <MapDisplay 
              from={formData.from} 
              to={formData.to}
              routeType="recommended"
              routeData={routeData}
            />
            <button
              onClick={() => setStep('input')}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Plan Another Route
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
