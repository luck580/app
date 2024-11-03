import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
          className="w-full h-full object-cover"
          alt="Restaurant interior"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Experience Fine Dining at Its Best
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Savor exquisite cuisine crafted with passion and precision
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-amber-700 transition-colors flex items-center">
              Reserve Table
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;