import { Github, Linkedin, Mail } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Project Lead',
      role: 'AI & System Architecture',
      bio: 'Designed the multi-agent system and risk prediction models',
      icon: '🧠',
    },
    {
      name: 'ML Engineer',
      role: 'Model Development',
      bio: 'Built and trained the three specialized agents (Weather, Flood, Traffic)',
      icon: '🤖',
    },
    {
      name: 'Backend Engineer',
      role: 'Pipeline & Database',
      bio: 'Implemented real-time processing pipelines and central database',
      icon: '⚙️',
    },
    {
      name: 'Frontend Engineer',
      role: 'User Interface',
      bio: 'Created the route visualization and user experience',
      icon: '🎨',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">
          The Team Behind FloodSense
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A dedicated team of AI researchers, engineers, and designers working to make cities safer during monsoon season
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="floating-card animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{member.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-sm font-semibold text-cyan-600">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
              <div className="flex gap-3">
                <button className="p-2 hover:bg-cyan-100 rounded-lg transition-colors">
                  <Github size={18} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-cyan-100 rounded-lg transition-colors">
                  <Linkedin size={18} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-cyan-100 rounded-lg transition-colors">
                  <Mail size={18} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
        <div className="floating-card bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 border-2 border-cyan-300 text-center">
          <p className="text-3xl font-bold text-cyan-700 mb-2">3</p>
          <p className="text-sm font-semibold text-cyan-900">AI Agents</p>
          <p className="text-xs text-cyan-700 mt-2">Working in parallel</p>
        </div>
        <div className="floating-card bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-300 text-center">
          <p className="text-3xl font-bold text-orange-700 mb-2">10</p>
          <p className="text-sm font-semibold text-orange-900">City Nodes</p>
          <p className="text-xs text-orange-700 mt-2">Monitored in real-time</p>
        </div>
        <div className="floating-card bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border-2 border-teal-300 text-center">
          <p className="text-3xl font-bold text-teal-700 mb-2">60</p>
          <p className="text-sm font-semibold text-teal-900">Minute Forecast</p>
          <p className="text-xs text-teal-700 mt-2">Predictive horizon</p>
        </div>
        <div className="floating-card bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-300 text-center">
          <p className="text-3xl font-bold text-green-700 mb-2">0.2s</p>
          <p className="text-sm font-semibold text-green-900">Response Time</p>
          <p className="text-xs text-green-700 mt-2">Route recommendations</p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="floating-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border-2 border-purple-300">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">Our Mission</h3>
          <p className="text-lg text-purple-800 leading-relaxed mb-6">
            We believe that intelligent prediction can prevent traffic chaos and save lives. By combining real-time weather data, geographic analysis, and traffic patterns, FloodSense empowers commuters to make informed decisions before disaster strikes.
          </p>
          <p className="text-lg text-purple-800 leading-relaxed">
            Our vision is to expand FloodSense to cities across India and beyond, creating a network of AI-powered systems that protect millions from monsoon-related traffic disasters.
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-teal-700 mb-4">Get Involved</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Interested in FloodSense? Whether you're a researcher, developer, city planner, or concerned citizen, we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-xl transition-all">
            Contact Us
          </button>
          <button className="bg-white hover:bg-gray-50 text-teal-600 font-bold py-3 px-6 rounded-xl border-2 border-teal-600 transition-all">
            View on GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
