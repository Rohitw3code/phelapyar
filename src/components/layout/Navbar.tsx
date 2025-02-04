import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, HelpCircle, Mail, Grid, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDatingLink, setShowDatingLink] = useState(false);
  const { cartCount, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    ...(showDatingLink ? [{
      icon: <Heart className="w-5 h-5 text-pink-400" />,
      label: 'Find Love',
      href: 'https://date.phelapyar.com',
      isExternal: true
    }] : []),
    { icon: <Grid className="w-5 h-5" />, label: 'Products', href: '#products' },
    { 
      icon: (
        <div className="relative">
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
              {cartCount}
            </span>
          )}
        </div>
      ), 
      label: 'Cart', 
      onClick: toggleCart 
    },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'FAQ', href: '/faq' },
    { icon: <Mail className="w-5 h-5" />, label: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled && !isOpen
          ? 'bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 shadow-lg backdrop-blur-md border-b border-amber-700/50' 
          : 'bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="/" 
            className="group flex items-center space-x-2 text-amber-50 relative overflow-hidden"
          >
            <div className="relative z-10 transform transition-transform group-hover:scale-110 duration-300">
              <Heart className="w-8 h-8" />
            </div>
            <span className="font-bold text-xl tracking-tight relative z-10">
              <span className="font-serif">phelapyar</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.onClick ? (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="group relative px-4 py-2 rounded-lg text-amber-100 hover:text-amber-50 transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-amber-700/0 group-hover:bg-amber-700/50 rounded-lg transition-all duration-300"></span>
                  <span className="relative flex items-center space-x-2">
                    <span className="transform transition-transform group-hover:scale-110 duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </span>
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="group relative px-4 py-2 rounded-lg text-amber-100 hover:text-amber-50 transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-amber-700/0 group-hover:bg-amber-700/50 rounded-lg transition-all duration-300"></span>
                  <span className="relative flex items-center space-x-2">
                    <span className="transform transition-transform group-hover:scale-110 duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </span>
                </a>
              )
            ))}
          </div>

          {/* Mobile Cart and Menu */}
          <div className="md:hidden flex items-center gap-2">
            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative text-amber-50 hover:text-amber-200 p-2 rounded-lg hover:bg-amber-700/50 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-amber-700/0 hover:bg-amber-700/50 rounded-lg transition-all duration-300"></span>
              <span className="relative">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </span>
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-amber-50 hover:text-amber-200 p-2 rounded-lg hover:bg-amber-700/50 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-amber-700/0 hover:bg-amber-700/50 rounded-lg transition-all duration-300"></span>
              <span className="relative">
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } md:hidden fixed inset-0 z-50 transition-all duration-500 ease-in-out transform`}
      >
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/20"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-3/4 max-w-sm bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 shadow-2xl overflow-auto">
          <div className="h-full">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                item.onClick ? (
                  <button
                    key={item.label}
                    onClick={() => {
                      item.onClick?.();
                      setIsOpen(false);
                    }}
                    className="group flex items-center w-full space-x-3 text-amber-100 hover:text-amber-50 p-3 rounded-xl hover:bg-amber-700/50 active:bg-amber-700/70 transition-all duration-300"
                  >
                    <span className="transform transition-transform group-hover:scale-110 duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center w-full space-x-3 text-amber-100 hover:text-amber-50 p-3 rounded-xl hover:bg-amber-700/50 active:bg-amber-700/70 transition-all duration-300"
                  >
                    <span className="transform transition-transform group-hover:scale-110 duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                )
              ))}
            </div>

            {/* Additional Mobile Menu Content */}
            <div className="px-4 py-6 border-t border-amber-700/50">
              <div className="flex flex-col space-y-4">
                <button className="flex items-center space-x-2 text-amber-200 hover:text-amber-100 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>My Wishlist</span>
                </button>
                <button className="flex items-center space-x-2 text-amber-200 hover:text-amber-100 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>Newsletter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}