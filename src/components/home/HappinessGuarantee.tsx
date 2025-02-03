import React from 'react';
import { Heart, Gift, Smile, Shield, Star, Clock, ThumbsUp, Sparkles } from 'lucide-react';

export function HappinessGuarantee() {
  const guarantees = [
    {
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      title: "100% Happiness Guarantee",
      description: "If your recipient doesn't smile, we'll send another potato message free!"
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: "24-Hour Delivery",
      description: "Swift delivery to spread joy faster across India"
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-amber-600" />,
      title: "Premium Quality",
      description: "Hand-picked potatoes, expertly carved with your message"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: "Unique Experience",
      description: "Create memories that last longer than flowers or cards"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            The PotatoMessage Promise
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Transforming ordinary potatoes into extraordinary moments of joy and surprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-amber-900">
                  {item.title}
                </h3>
                <p className="text-amber-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-amber-100 text-amber-800 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-amber-600" />
            <span className="font-semibold">Over 10,000 Happy Customers Across India</span>
          </div>
        </div>
      </div>
    </div>
  );
}