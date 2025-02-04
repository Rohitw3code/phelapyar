import React from 'react';
import { Gift, Smile, Calendar, Heart, Star } from 'lucide-react';

export function WhyPotato() {
  const reasons = [
    {
      icon: <Gift className="w-12 h-12 text-amber-600" />,
      title: "Better Than Traditional Gifts",
      description: "Forget boring cards and wilting flowers. Send a message that'll last longer and make a bigger impact!"
    },
    {
      icon: <Smile className="w-12 h-12 text-amber-600" />,
      title: "100% Joy Guaranteed",
      description: "Whether they laugh, gasp, or do both – we guarantee your potato will spark pure joy and unforgettable memories."
    },
    {
      icon: <Calendar className="w-12 h-12 text-amber-600" />,
      title: "Perfect for Every Occasion",
      description: "Birthdays, anniversaries, apologies, or just because – there's never a wrong time to send a potato message."
    },
    {
      icon: <Star className="w-12 h-12 text-amber-600" />,
      title: "Perfectly Timed Delivery",
      description: "Schedule your spud-tacular surprise in advance for maximum impact when it matters most."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Why Choose Potato Messages?
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Because some messages are too special for ordinary delivery methods
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-amber-50 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-amber-100 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-200">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-900">
                  {reason.title}
                </h3>
                <p className="text-amber-700">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}