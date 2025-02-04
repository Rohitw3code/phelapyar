import React, { useState, useEffect } from 'react';
import { IndianRupee, Truck, Package, Clock, CheckCircle, AlertCircle, ChevronRight, Home } from 'lucide-react';

interface OrderFormData {
  fullName: string;
  address: string;
  pincode: string;
  country: string;
  phone: string;
  email: string;
  alternatePhone: string;
  state: string;
  city: string;
  orderedBy: string;
  message: string;
}

interface OrderStatus {
  show: boolean;
  success: boolean;
  message: string;
}

export function CustomOrderPage() {
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    address: '',
    pincode: '',
    country: 'India',
    phone: '',
    email: '',
    alternatePhone: '',
    state: '',
    city: '',
    orderedBy: '',
    message: ''
  });

  const [orderStatus, setOrderStatus] = useState<OrderStatus>({
    show: false,
    success: false,
    message: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const messageParam = params.get('message');
    if (messageParam) {
      setFormData(prev => ({ ...prev, message: messageParam }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderStatus({
      show: true,
      success: true,
      message: 'Order placed successfully! Your potato message will be delivered soon. 🥔'
    });
  };

  return (
    <div className="min-h-screen bg-amber-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Navigation */}
        <nav className="mb-8 bg-amber-100/80 border border-amber-200 rounded-xl px-5 py-3 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-amber-700">
            <a href="/" className="hover:text-amber-800 flex items-center gap-1 font-serif font-medium">
              <Home className="w-4 h-4" />
              <span>phelapyar</span>
            </a>
            <ChevronRight className="w-4 h-4 text-amber-500" />
            <a href="/products" className="hover:text-amber-800 font-medium">potato message</a>
            <ChevronRight className="w-4 h-4 text-amber-500" />
            <span className="text-amber-900 font-semibold">custom order</span>
          </div>
        </nav>

        {/* Order Status Modal */}
        {orderStatus.show && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
              <div className="text-center">
                {orderStatus.success ? (
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                ) : (
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {orderStatus.success ? 'Order Successful!' : 'Order Failed'}
                </h3>
                <p className="text-gray-600 mb-6">{orderStatus.message}</p>
                <button
                  onClick={() => setOrderStatus({ ...orderStatus, show: false })}
                  className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
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
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter recipient's name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="10-digit number"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      Complete Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter complete delivery address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter city"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{6}"
                      className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="6-digit pincode"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter state"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      disabled
                      className="w-full px-3 py-2 border border-amber-200 rounded-md bg-amber-50 text-amber-800"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-amber-900 mb-4">Your Message</h2>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                rows={4}
                placeholder="Write your message here (max 100 characters)"
                maxLength={100}
              />
              <p className="text-xs text-amber-600 mt-1">
                {100 - (formData.message?.length || 0)} characters remaining
              </p>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-amber-900 mb-4">Order Summary</h2>
              
              {/* Product */}
              <div className="flex gap-4 pb-4 border-b border-amber-100">
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400&h=400"
                    alt="Premium Message Potato"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-amber-900">Premium Message Potato</h3>
                  <div className="flex items-center mt-1">
                    <IndianRupee className="w-4 h-4 text-amber-600" />
                    <span className="font-bold text-amber-900">200</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span className="text-sm text-amber-700">Delivery in 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="py-4 space-y-2">
                <div className="flex justify-between text-amber-900">
                  <span>Subtotal</span>
                  <div className="flex items-center">
                    <IndianRupee className="w-4 h-4" />
                    <span>200</span>
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
                    <span>200</span>
                  </div>
                </div>

                {/* Cash on Delivery Badge */}
                <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 flex items-center justify-center gap-2">
                  <IndianRupee className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-amber-900">Cash on Delivery</span>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="flex items-center gap-2 bg-amber-50 p-2 rounded-lg">
                  <Truck className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-amber-800">Free Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 p-2 rounded-lg">
                  <Package className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-amber-800">Premium Quality</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 p-2 rounded-lg">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-amber-800">24hr Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 p-2 rounded-lg">
                  <IndianRupee className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-amber-800">COD Available</span>
                </div>
              </div>

              {/* Order Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Package className="w-5 h-5" />
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}