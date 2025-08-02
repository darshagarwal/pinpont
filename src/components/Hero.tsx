import React from 'react';
import { ArrowRight, Play, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen flex items-center overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4 mr-2" />
                Indoor Navigation Revolution
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-snug break-words whitespace-normal pb-2">
                Never Get Lost{' '}
                <span className="inline text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Indoors Again
                </span>
              </h1>


              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Real-time blue dot navigation for malls, theaters, airports, and more. 
                Find any store, seat, or destination with turn-by-turn directions—just like Google Maps, but indoors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Download Free App
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              {/*<button className="group flex items-center justify-center px-8 py-4 border-2 border-gray-200 rounded-full font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Watch Demo
              </button>*/}
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500K+</div>
                <div className="text-sm text-gray-600">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Venues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.8★</div>
                <div className="text-sm text-gray-600">App Rating</div>
              </div>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Phone Status Bar */}
                <div className="h-6 bg-gray-900 flex items-center justify-center">
                  <div className="w-20 h-1 bg-white rounded-full"></div>
                </div>

                {/* App Interface */}
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Westfield Mall</h3>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      <span className="text-sm text-gray-600">Search stores, restaurants...</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">Nike Store</span>
                      <span className="text-xs text-blue-600">2 min walk</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Starbucks</span>
                      <span className="text-xs text-gray-600">5 min walk</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Food Court</span>
                      <span className="text-xs text-gray-600">3 min walk</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-lg">
                    <div className="text-sm font-medium mb-1">Turn left in 50 ft</div>
                    <div className="text-xs opacity-90">Then right at Starbucks</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce">
              AR
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-sm font-medium shadow-lg">
              Live View
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
