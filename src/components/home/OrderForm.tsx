import React, { useState } from 'react';
import { Cookie } from 'lucide-react';

export function OrderForm() {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed! Your potato message will be delivered soon! 🥔');
  };

  return (
    <div className="py-16 bg-amber-100">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">
            Order Your Potato Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-amber-900 mb-2">
                Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                rows={4}
                placeholder="Write your message here..."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-900 mb-2">
                Recipient's Name
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Who's receiving this potato?"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-900 mb-2">
                Recipient's Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Where should we send updates?"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 flex items-center justify-center gap-2"
            >
              <Cookie className="w-5 h-5" />
              Send Potato Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}