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
    <div className="py-16 bg-gradient-to-b from-white to-amber-50">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-xl font-bold text-amber-900 mb-1">{stat.value}</div>
              <div className="text-sm text-amber-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partners Scrollable Section */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 md:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 md:hidden"></div>

          {/* Scrollable Container */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 min-w-[800px] md:min-w-0">
              {partners.map((partner) => (
                <div key={partner.name} className="w-40 md:w-auto flex-shrink-0">
                  <div className="group relative aspect-square bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-transparent rounded-xl"></div>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover rounded-lg filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 flex items-end justify-center p-2 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                      <span className="text-white text-xs font-semibold">{partner.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md">
            <Building2 className="w-4 h-4 text-amber-600" />
            <span className="text-amber-900 text-sm font-semibold">Expanding Across 100+ Cities in India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
