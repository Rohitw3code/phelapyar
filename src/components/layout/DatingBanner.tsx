import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';

export function DatingBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed z-50 animate-bounce-slow md:animate-none md:static md:block">
      {/* Mobile Version - Bottom Right */}
      <div className="md:hidden bottom-4 right-4 fixed">
        <div className="relative bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-2xl shadow-lg max-w-xs">
          <button 
            onClick={handleClose}
            className="absolute -top-2 -right-2 p-1 bg-white text-rose-500 rounded-full shadow-md hover:bg-rose-50 transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Heart className="w-8 h-8 text-white animate-pulse" />
              <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
            </div>
            <div>
              <h3 className="font-bold text-sm">Find Your Potato Partner! 🥔</h3>
              <p className="text-xs text-rose-100 mt-1">
                Visit date.phelapyar.com for your perfect match
              </p>
            </div>
          </div>
          
          <a
            href="https://date.phelapyar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center bg-white text-rose-500 text-sm font-semibold py-2 px-4 rounded-lg hover:bg-rose-50 transition-colors duration-200"
          >
            Find Love Now
          </a>
        </div>
      </div>

      {/* Desktop Version - Top Banner */}
      <div className="hidden md:block bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Heart className="w-5 h-5 text-white animate-pulse" />
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
              </div>
              <p className="text-sm font-medium">
                Find Your Potato Partner! 🥔 Visit <span className="font-bold">date.phelapyar.com</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://date.phelapyar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold bg-white text-rose-500 px-4 py-1 rounded-full hover:bg-rose-50 transition-colors duration-200"
              >
                Find Love Now
              </a>
              <button 
                onClick={handleClose}
                className="p-1 hover:bg-rose-400/20 rounded-full transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}