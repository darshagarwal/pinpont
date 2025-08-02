import React from 'react';
import { ShoppingBag, Film, Plane, Coffee, Car, Guitar as Hospital } from 'lucide-react';

const Venues = () => {
  const venues = [
    {
      icon: ShoppingBag,
      title: 'Shopping Malls',
      description: 'Navigate massive retail spaces, find specific stores, locate restrooms, and discover dining options.',
      features: ['Store directory', 'Sales & events', 'Parking spots', 'Food courts'],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Film,
      title: 'Movie Theaters',
      description: 'Find your specific seat, concession stands, restrooms, and emergency exits with ease.',
      features: ['Seat finder', 'Concession menus', 'Showtimes', 'Accessibility routes'],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Plane,
      title: 'Airports',
      description: 'Navigate terminals, find gates, baggage claims, security checkpoints, and amenities.',
      features: ['Gate locations', 'Security wait times', 'Lounges', 'Ground transport'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Coffee,
      title: 'Convention Centers',
      description: 'Navigate large event spaces, find specific booths, meeting rooms, and facilities.',
      features: ['Booth locations', 'Session schedules', 'Networking areas', 'Food services'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Car,
      title: 'Parking Garages',
      description: 'Remember where you parked, find the quickest route to your car, and locate elevators.',
      features: ['Car location', 'Elevator access', 'Payment stations', 'Exit routes'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Hospital,
      title: 'Healthcare Facilities',
      description: 'Navigate complex medical facilities to find departments, rooms, and essential services.',
      features: ['Department finder', 'Appointment rooms', 'Pharmacies', 'Emergency routes'],
      gradient: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section id="venues" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Works in Every
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Major Venue Type
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From shopping malls to airports, PinPoint adapts to any indoor environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${venue.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <venue.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {venue.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {venue.description}
              </p>

              <div className="space-y-2">
                {venue.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Partner with PinPoint
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Are you a venue owner? Join our growing network and provide your visitors with cutting-edge indoor navigation.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venues;