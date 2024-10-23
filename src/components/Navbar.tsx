import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">FitHosh</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How it Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">How it Works</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Pricing</a>
            <button className="w-full text-left px-3 py-2 text-blue-600 hover:bg-gray-50">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}