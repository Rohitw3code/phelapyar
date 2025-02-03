import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, HelpCircle, Mail, Grid, Heart } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: <Grid className="w-5 h-5" />, label: 'Products', href: '#products' },
    { icon: <ShoppingCart className="w-5 h-5" />, label: 'Cart', href: '#cart' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'FAQ', href: '/faq' },
    { icon: <Mail className="w-5 h-5" />, label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
      scrolled ? 'bg-amber-900/95 backdrop-blur-md shadow-lg' : 'bg-amber-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="group flex items-center space-x-2 text-amber-50">
            <Heart className="w-8 h-8 transform transition-transform group-hover:rotate-12" />
            <span className="font-bold text-xl tracking-tight relative">
              phelapyar.com
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative px-4 py-2 rounded-lg text-amber-50 hover:text-amber-200 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-amber-800/0 group-hover:bg-amber-800/50 rounded-lg transition-all duration-300"></span>
                <span className="relative flex items-center space-x-2">
                  <span className="transform transition-transform group-hover:scale-110 duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-50 hover:text-amber-200 focus:outline-none p-2 rounded-lg hover:bg-amber-800/50 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } md:hidden fixed inset-0 z-50 transition-all duration-500 ease-in-out transform`}
        style={{ top: '64px' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900 to-amber-800 backdrop-blur-lg">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center space-x-3 text-amber-50 hover:text-amber-200 p-3 rounded-xl hover:bg-amber-800/50 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="transform transition-transform group-hover:scale-110 duration-300">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}