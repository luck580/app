import React from 'react';
import { ChefHat, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 1970, Gusto has been serving exceptional cuisine for over five decades. 
              Our commitment to quality ingredients and innovative cooking techniques has earned 
              us recognition as one of the city's premier dining destinations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <ChefHat className="h-10 w-10 text-amber-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Expert Chefs</h3>
                <p className="text-sm text-gray-600">Michelin-starred culinary team</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <Clock className="h-10 w-10 text-amber-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Fresh Daily</h3>
                <p className="text-sm text-gray-600">Local ingredients, prepared daily</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <Award className="h-10 w-10 text-amber-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Awards</h3>
                <p className="text-sm text-gray-600">Multiple culinary excellence awards</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Chef preparing food"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;