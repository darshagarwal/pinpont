import React from 'react';
import { Building2, Smartphone, Users, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Building2,
      title: 'Venue Partnerships',
      description: 'Malls, theaters, and airports install affordable Bluetooth beacons ($5-$30 each) or leverage existing Wi-Fi infrastructure for precise indoor positioning.',
      step: '01'
    },
    {
      icon: Smartphone,
      title: 'Free User App',
      description: 'Download the PinPoint app for free from the App Store or Google Play. No subscription fees or hidden costs.',
      step: '02'
    },
    {
      icon: Users,
      title: 'Select & Search',
      description: 'Choose your venue from our growing network, then search for any store, restaurant, seat, or facility you need to find.',
      step: '03'
    },
    {
      icon: Zap,
      title: 'Follow Guided Path',
      description: 'Receive turn-by-turn directions with real-time updates and AR overlays to reach your destination quickly and easily.',
      step: '04'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            How PinPoint
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Actually Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple technology, powerful results. Here's how we make indoor navigation seamless.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">Technology Stack</h4>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">Bluetooth Low Energy Beacons</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-cyan-50 rounded-lg">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm font-medium">Wi-Fi Triangulation</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-medium">AR Navigation Engine</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Real-time Positioning</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-lg">
                  <div className="text-sm font-medium mb-1">Accuracy: ±1-3 meters</div>
                  <div className="text-xs opacity-90">Better than GPS indoors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;