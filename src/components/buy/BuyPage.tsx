import React, { useState, useEffect } from 'react';
import { Shield, Truck, Clock, Gift, IndianRupee, ArrowLeft, CheckCircle, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getProduct } from '../../api/client';
import { Product } from '../../types/product';

interface UserInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

interface ProductWithQuantity extends Product {
  quantity: number;
}

export function BuyPage() {
  const { cartItems, updateQuantity, removeItem } = useCart();
  const [products, setProducts] = useState<(ProductWithQuantity | null)[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India'
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productPromises = cartItems.map(async (item) => {
          const productId = item.id.toString(36); // Convert number ID back to base36 string
          const product = await getProduct(productId);
          return product ? { ...product, quantity: item.quantity } : null;
        });
        
        const fetchedProducts = await Promise.all(productPromises);
        setProducts(fetchedProducts);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load product details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [cartItems]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
    console.log('Order placed:', { userInfo, items: products });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-50 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-amber-200 rounded w-1/4"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl h-96"></div>
              <div className="bg-white rounded-xl h-96"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-amber-50 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Error Loading Products</h2>
            <p className="text-amber-800 mb-6">{error}</p>
            <a 
              href="/"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-amber-50 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Your cart is empty</h2>
            <a 
              href="/"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  const totalAmount = products.reduce((sum, product) => {
    if (!product) return sum;
    return sum + (product.price * product.quantity);
  }, 0);

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <a href="/" className="text-amber-600 hover:text-amber-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </a>
            <h1 className="text-xl font-bold text-amber-900">Checkout</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-amber-900 mb-4">Delivery Information</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={userInfo.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter 10-digit phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-1">
                    Delivery Address *
                  </label>
                  <textarea
                    name="address"
                    value={userInfo.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={userInfo.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter city"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={userInfo.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter state"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={userInfo.pincode}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{6}"
                      className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter 6-digit PIN code"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={userInfo.country}
                      disabled
                      className="w-full px-3 py-2 border border-amber-200 rounded-md bg-amber-50 text-amber-800"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-amber-900 mb-4">Order Summary</h2>
              <div className="space-y-4">
                {products.map((product, index) => {
                  if (!product) return null;
                  const cartItem = cartItems[index];
                  
                  return (
                    <div key={product.id} className="flex gap-4 py-4 border-b border-amber-100 last:border-0">
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-amber-50">
                        <img 
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-amber-900">{product.name}</h3>
                          <button 
                            onClick={() => removeItem(cartItem.id)}
                            className="text-red-500 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center text-amber-900">
                            <IndianRupee className="w-4 h-4" />
                            <span className="font-bold">{product.price}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(cartItem.id, -1)}
                            className="p-1 hover:bg-amber-100 rounded-md transition-all duration-200"
                            disabled={product.quantity <= 1}
                          >
                            <Minus className="w-4 h-4 text-amber-600" />
                          </button>
                          <span className="w-8 text-center text-amber-900">{product.quantity}</span>
                          <button
                            onClick={() => updateQuantity(cartItem.id, 1)}
                            className="p-1 hover:bg-amber-100 rounded-md transition-all duration-200"
                          >
                            <Plus className="w-4 h-4 text-amber-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-amber-900">
                  <span>Subtotal</span>
                  <div className="flex items-center">
                    <IndianRupee className="w-4 h-4" />
                    {totalAmount}
                  </div>
                </div>
                <div className="flex justify-between text-amber-900">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-amber-900 pt-2 border-t border-amber-100">
                  <span>Total</span>
                  <div className="flex items-center">
                    <IndianRupee className="w-4 h-4" />
                    {totalAmount}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-6">
                <div className="flex items-center gap-2 bg-amber-50 p-2 rounded-lg">
                  <Truck className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-amber-800">Free Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 p-2 rounded-lg">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-amber-800">24hr Delivery</span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
              >
                Place Order
              </button>

              <div className="flex items-center gap-2 mt-4 text-sm text-amber-600">
                <Shield className="w-4 h-4" />
                <span>Your order is secure and encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}