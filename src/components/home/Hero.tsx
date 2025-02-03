import React from 'react';
import { Heart, Gift, SparkleIcon } from 'lucide-react';

export function Hero() {
  const handleOrderClick = () => {
    window.location.href = '#order-form';
  };

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-pink-50 to-amber-50">
      {/* Floating icons animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Heart className="absolute w-8 h-8 text-pink-400/30 animate-float-slow" style={{ top: '10%', left: '10%' }} />
        <Heart className="absolute w-6 h-6 text-pink-400/30 animate-float-slower" style={{ top: '20%', right: '15%' }} />
        <Gift className="absolute w-8 h-8 text-amber-400/30 animate-float" style={{ bottom: '20%', left: '15%' }} />
        <SparkleIcon className="absolute w-6 h-6 text-amber-400/30 animate-float-slow" style={{ bottom: '30%', right: '10%' }} />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center space-y-8">
          {/* Valentine's Day Offer */}
          <div className="animate-fade-in-up">
            <div className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-semibold mb-6 animate-pulse">
              ❤️ Valentine's Day Special Offer - 50% OFF! ❤️
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in-up animation-delay-200">
            <h1 className="text-5xl md:text-6xl font-bold text-pink-900 mb-6">
              Say "I Love You" with a 
              <span className="text-amber-700"> Potato</span>! 🥔
            </h1>
          </div>

          {/* Subheading */}
          <div className="animate-fade-in-up animation-delay-400">
            <p className="text-xl text-pink-800 max-w-2xl mx-auto mb-8">
              Make this Valentine's Day unforgettable with our unique potato messages. 
              Because nothing says "I'm sweet on you" like words carved into a spud! 
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <button
              onClick={handleOrderClick}
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Send Love Now - 50% OFF
            </button>
            <a
              href="#features"
              className="bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105"
            >
              Learn More
            </a>
          </div>

          {/* Special Note */}
          <div className="mt-8 animate-fade-in-up animation-delay-800">
            <p className="text-pink-700 font-medium">
              🚚 Order now for guaranteed Valentine's Day delivery!
            </p>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z" 
                fill="white"/>
        </svg>
      </div>
    </div>
  );
}