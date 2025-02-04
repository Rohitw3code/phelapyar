import React, { useState } from 'react';
import { IndianRupee, ShoppingCart, Heart, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  offPrice: number;
  discount: number;
  images: string[];
}

export function ProductList() {
  const [activeImageIndex, setActiveImageIndex] = useState<Record<number, number>>({});
  const { addToCart } = useCart();

  const products: Product[] = [
    {
      id: 1,
      name: "Classic Message Potato",
      price: 299,
      offPrice: 199,
      discount: 33,
      images: [
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=250&h=250",
        "https://images.unsplash.com/photo-1552661397-4b89adf8d191?auto=format&fit=crop&w=250&h=250"
      ]
    },
    {
      id: 2,
      name: "Love Message Pack",
      price: 499,
      offPrice: 299,
      discount: 40,
      images: [
        "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=250&h=250",
        "https://images.unsplash.com/photo-1633380110125-f6e685676160?auto=format&fit=crop&w=250&h=250"
      ]
    },
    {
      id: 3,
      name: "Birthday Special",
      price: 399,
      offPrice: 249,
      discount: 38,
      images: [
        "https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=250&h=250",
        "https://images.unsplash.com/photo-1591647598839-c461be026766?auto=format&fit=crop&w=250&h=250"
      ]
    },
    {
      id: 4,
      name: "Anniversary Duo",
      price: 599,
      offPrice: 399,
      discount: 33,
      images: [
        "https://images.unsplash.com/photo-1591647598839-c461be026766?auto=format&fit=crop&w=250&h=250",
        "https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=250&h=250"
      ]
    }
  ];

  const nextImage = (productId: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % products.find(p => p.id === productId)!.images.length
    }));
  };

  const handleAddToCart = (productId: number) => {
    addToCart();
  };

  const handleBuyNow = (productId: number) => {
    addToCart();
    // Additional buy now logic here
  };

  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-amber-900">
            Featured Products
          </h2>
          <button className="flex items-center gap-0.5 text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors duration-300">
            View All
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-amber-50">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                      (activeImageIndex[product.id] || 0) === idx 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-110'
                    }`}
                  />
                ))}
                <button
                  onClick={() => nextImage(product.id)}
                  className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                </button>
                {/* Discount Badge */}
                <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  {product.discount}% OFF
                </div>
              </div>

              {/* Content */}
              <div className="p-3 space-y-2">
                <div>
                  <h3 className="text-sm font-semibold text-amber-900 truncate">
                    {product.name}
                  </h3>
                  
                  {/* Price Section */}
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="flex items-center text-base font-bold text-amber-900">
                      <IndianRupee className="w-3.5 h-3.5" />
                      {product.offPrice}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 line-through">
                      <IndianRupee className="w-2.5 h-2.5" />
                      {product.price}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-1.5">
                  <button 
                    onClick={() => handleBuyNow(product.id)}
                    className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium py-1.5 px-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-1 group"
                  >
                    Buy Now
                  </button>
                  <button 
                    onClick={() => handleAddToCart(product.id)}
                    className="bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs font-medium py-1.5 px-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-1 group"
                  >
                    <ShoppingCart className="w-3.5 h-3.5 transform group-hover:scale-110 transition-transform" />
                    Add
                  </button>
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow hover:bg-pink-50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <Heart className="w-3.5 h-3.5 text-pink-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}