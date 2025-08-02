import React from 'react';
import { Navigation, Search, Camera, Route, Calendar, Map } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Navigation,
      title: 'Real-Time Blue Dot Navigation',
      description: 'Experience Google Maps-level precision indoors with live location tracking and smooth navigation.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Search,
      title: 'Smart Store & Seat Search',
      description: 'Type or voice-search any store ("Nike") or specific seat ("G14") for instant directions.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Camera,
      title: 'AR Wayfinding',
      description: 'Point your camera to see directional arrows overlaid on your live view for effortless navigation.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Route,
      title: 'Turn-by-Turn Directions',
      description: 'Get precise walking directions like "Turn left in 50 ft, then right at Starbucks."',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Calendar,
      title: 'Event Integration',
      description: 'Access movie times, mall events, restroom wait times, and real-time venue information.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Map,
      title: 'Venue-Specific Maps',
      description: 'Pre-loaded detailed maps for malls, theaters, airports, and other large indoor spaces.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Powerful Features for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Indoor Navigation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to navigate indoor spaces with confidence and ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;