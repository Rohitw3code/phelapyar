import React from 'react';
import { Heart, Mail, Instagram, HelpCircle, FileText, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-amber-400" />
              <span className="text-xl font-bold">phelapyar.com</span>
            </div>
            <p className="text-sm text-amber-200">
              Spreading love and joy through unique messages
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/phelapyar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@phelapyar.com"
                className="hover:text-amber-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-amber-200 hover:text-amber-400 transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-amber-200 hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-amber-200 hover:text-amber-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-amber-200 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-amber-200 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Help Center
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-amber-200 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:contact@phelapyar.com" className="text-amber-200 hover:text-amber-400 transition-colors">
                  contact@phelapyar.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-amber-400" />
                <a 
                  href="https://instagram.com/phelapyar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-200 hover:text-amber-400 transition-colors"
                >
                  @phelapyar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm text-amber-300">
          <p>© {new Date().getFullYear()} phelapyar.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}