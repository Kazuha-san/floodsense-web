import { useState } from 'react';
import { MapPin, Loader2 } from 'lucide-react';

interface LocationFormProps {
  onSubmit: (from: string, to: string) => void;
  loading: boolean;
}

export default function LocationForm({ onSubmit, loading }: LocationFormProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (from.trim() && to.trim()) {
      onSubmit(from, to);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-cyan-200 p-8 shadow-sm">
      <div className="space-y-4">
        {/* From Location */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <MapPin className="inline mr-2 text-teal-600" size={16} />
            From Location
          </label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="e.g., MP Nagar"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            disabled={loading}
          />
        </div>

        {/* To Location */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <MapPin className="inline mr-2 text-teal-600" size={16} />
            To Location
          </label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="e.g., Airport"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            disabled={loading}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !from.trim() || !to.trim()}
          className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Analyzing...
            </>
          ) : (
            'Find Safe Route'
          )}
        </button>
      </div>
    </form>
  );
}
