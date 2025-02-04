import React from 'react';
import { Building2, Star, TrendingUp, Users } from 'lucide-react';

export function Partners() {
  const partners = [
    { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=400&h=400' },
    { name: 'Flipkart', logo: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&q=80&w=400&h=400' },
    { name: 'BigBasket', logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400&h=400' },
    { name: 'Grofers', logo: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400&h=400' },
    { name: 'Swiggy', logo: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=400&h=400' },
    { name: 'Zomato', logo: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400&h=400' },
  ];

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: '100+', label: 'Partners' },
    { icon: <Star className="w-5 h-5" />, value: '50K+', label: 'Deliveries' },
    { icon: <TrendingUp className="w-5 h-5" />, value: '98%', label: 'Success Rate' },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
            <Building2 className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-semibold">Our Trusted Partners</span>
          </div>
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Partnering with India's Best
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Join our network of leading e-commerce platforms delivering joy across India
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-3">
                <div className="p-2.5 bg-amber-100 rounded-lg text-amber-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-amber-900 mb-1">{stat.value}</div>
              <div className="text-sm text-amber-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partners Showcase */}
        <div className="relative mt-16">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-amber-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-amber-50 to-transparent z-10"></div>

          {/* Scrolling Partners */}
          <div className="flex gap-8 animate-scroll overflow-hidden py-8">
            {/* First Set */}
            <div className="flex gap-8 items-center">
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-1`}
                  className="group relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-transparent rounded-2xl"></div>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white text-sm font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg whitespace-nowrap">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate Set for Infinite Scroll */}
            <div className="flex gap-8 items-center">
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-2`}
                  className="group relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-transparent rounded-2xl"></div>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white text-sm font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg whitespace-nowrap">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <Building2 className="w-5 h-5 text-amber-600" />
            <span className="text-amber-900 font-semibold">Expanding Across 100+ Cities in India</span>
          </div>
        </div>
      </div>
    </div>
  );
}