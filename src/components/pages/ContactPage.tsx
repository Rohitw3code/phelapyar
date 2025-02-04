import React, { useState } from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        {/* Header Section */}
        <div className="bg-gradient-to-b from-amber-100 to-amber-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-amber-900 mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-amber-700 max-w-2xl mx-auto">
                Have questions about our potato messages? We're here to help! Get in touch with our friendly team.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-amber-900 mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 rounded-lg">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-900">Email Us</h3>
                      <p className="text-amber-700">contact@phelapyar.com</p>
                      <p className="text-sm text-amber-600">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 rounded-lg">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-900">Call Us</h3>
                      <p className="text-amber-700">+91 1234567890</p>
                      <p className="text-sm text-amber-600">Mon-Sat, 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 rounded-lg">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-900">Office Address</h3>
                      <p className="text-amber-700">123 Potato Street, Bangalore</p>
                      <p className="text-sm text-amber-600">Karnataka, India - 560001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 rounded-lg">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-900">Business Hours</h3>
                      <p className="text-amber-700">Monday - Saturday</p>
                      <p className="text-sm text-amber-600">9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <a href="/faq" className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>Frequently Asked Questions</span>
                  </a>
                  <a href="/tracking" className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors">
                    <MapPin className="w-5 h-5" />
                    <span>Track Your Order</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>

              {/* Success Message */}
              {showSuccess && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-2 animate-fade-in-up">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}