import React, { useState } from 'react';
import { IndianRupee, Truck, Package, Clock, Send } from 'lucide-react';

export function CustomOffer() {
  const [message, setMessage] = useState('');
  
  const scrollToOrder = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the message submission
    scrollToOrder();
  };

  return (
    <div className="py-16 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <div className="relative max-w-sm mx-auto">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Premium Potato for Message"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Price Tag */}
            <div className="absolute -top-4 -right-4 bg-amber-500 text-white p-3 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-xs font-semibold">Only</div>
                <div className="flex items-center justify-center text-xl font-bold">
                  <IndianRupee className="w-4 h-4" />
                  200
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-amber-900">
                Premium Potato Messages
              </h2>
              <p className="text-lg text-amber-700">
                Send a unique message carved on our premium hand-picked potatoes
              </p>
            </div>

            {/* Message Input */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-2">
                  Your Custom Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your special message here..."
                  className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  rows={3}
                  maxLength={100}
                />
                <p className="text-xs text-amber-600 mt-1">
                  {100 - message.length} characters remaining
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm">
                  <Truck className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-amber-800">Cash on Delivery</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm">
                  <Package className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-amber-800">Premium Quality</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-amber-800">24hr Delivery</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm">
                  <IndianRupee className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-amber-800">Best Price</span>
                </div>
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Order Now - ₹200 Only
              </button>
              <p className="text-xs text-amber-700 italic text-center">
                *Limited time offer. Cash on delivery available across India.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}