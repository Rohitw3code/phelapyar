import React from 'react';
import { MessageCircle, Gift, Send } from 'lucide-react';

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="text-center p-6 rounded-lg bg-amber-50 hover:bg-amber-100 transition duration-200">
      <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
      <p className="text-amber-700">{description}</p>
    </div>
  );
}

export function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<MessageCircle className="w-8 h-8 text-amber-600" />}
            title="Custom Messages"
            description="Your message carefully carved onto a premium potato"
          />
          <FeatureCard 
            icon={<Gift className="w-8 h-8 text-amber-600" />}
            title="Perfect Gift"
            description="Unique, memorable, and guaranteed to make them smile"
          />
          <FeatureCard 
            icon={<Send className="w-8 h-8 text-amber-600" />}
            title="Swift Delivery"
            description="Fast and secure delivery right to their doorstep"
          />
        </div>
      </div>
    </div>
  );
}