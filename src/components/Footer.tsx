import React from 'react';
import { Navigation, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <img
                src="/images/logo.jpg"
                alt="PinPoint Logo"
                className="w-8 h-8 rounded-lg object-cover"
                />
              </div>
              <span className="text-2xl font-bold">PinPoint</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Revolutionary indoor navigation that brings GPS-level precision to malls, theaters, airports, and more.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <span className="text-sm font-bold">f</span>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <span className="text-sm font-bold">t</span>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <span className="text-sm font-bold">in</span>
              </button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Features</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">How It Works</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Venues</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Pricing</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">API</a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">About Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Careers</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Press</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Partners</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">hello@pinpoint.app</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 PinPoint. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;