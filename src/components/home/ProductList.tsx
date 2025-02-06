import React, { useState, useEffect } from 'react';
import { IndianRupee, ShoppingCart, Heart, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getProducts } from '../../api/client';
import { Product } from '../../types/product';

export function ProductList() {
  const [activeImageIndex, setActiveImageIndex] = useState<Record<string, number>>({});
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const fetchedProducts = await getProducts();
      // Filter products with type "1" for featured products
      const featuredProducts = fetchedProducts.filter(product => product.type === "1");
      setProducts(featuredProducts);
    } catch (err) {
      setError('Failed to load products');
      console.error('Error loading products:', err);
    } finally {
      setLoading(false);
    }
  };

  const nextImage = (productId: string) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % (products.find(p => p.id === productId)?.images.length || 1)
    }));
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: parseInt(product.id, 36), // Convert string ID to number for cart compatibility
      name: product.name,
      price: product.price,
      image: product.images[0]
    });
  };

  const handleBuyNow = (product: Product) => {
    addToCart({
      id: parseInt(product.id, 36),
      name: product.name,
      price: product.price,
      image: product.images[0]
    });
    window.location.href = '/buy';
  };

  if (loading) {
    return (
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-amber-100 rounded w-1/4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-amber-50 rounded-lg h-64"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-600">
            <p>{error}</p>
            <button 
              onClick={fetchProducts}
              className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

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
                      {product.price}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-1.5">
                  <button 
                    onClick={() => handleBuyNow(product)}
                    className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium py-1.5 px-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-1 group"
                  >
                    Buy Now
                  </button>
                  <button 
                    onClick={() => handleAddToCart(product)}
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