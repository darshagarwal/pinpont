import React from 'react';
import { Download, ArrowRight, Star } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Ready to Never Get Lost
              <span className="block">Indoors Again?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join hundreds of thousands of users who have revolutionized their indoor navigation experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
              Download for iOS
            </button>
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
              Download for Android
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 pt-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-medium">4.8/5</span>
            </div>
            <div className="h-6 w-px bg-blue-400"></div>
            <div className="text-white">
              <span className="font-bold">500K+</span> downloads
            </div>
            <div className="h-6 w-px bg-blue-400"></div>
            <div className="text-white">
              <span className="font-bold">1000+</span> venues
            </div>
          </div>

          <div className="pt-8">
            <p className="text-blue-100 text-sm">
              Free to download • No subscription required • Available worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;