import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              src="/images/logo.jpg"
              alt="PinPoint Logo"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-gray-900">
              PinPoint
            </button>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('venues')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Venues
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Team
            </button>
            <button
              onClick={()=> scrollToSection('cta')}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Download App
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('venues')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Venues
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                Team 
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full text-center hover:shadow-lg transition-all duration-200">
                Download App
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;