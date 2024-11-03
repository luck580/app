import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Gusto</h3>
            <p className="text-gray-400 text-sm">
              Experience fine dining at its best with our carefully crafted menu 
              and exceptional service.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-gray-400 hover:text-white text-sm">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white text-sm">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>123 Gourmet Street</li>
              <li>Culinary District, City 12345</li>
              <li>(555) 123-4567</li>
              <li>reservations@gusto.com</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Gusto Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;