import React from 'react';
import { Shield, Truck, Clock, Gift, IndianRupee, ArrowLeft, CheckCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export function BuyPage() {
  const { cartItems } = useCart();
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
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
          {/* Product Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-amber-900 mb-4">Order Summary</h2>
              
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 border-b border-amber-100 last:border-0">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-amber-50">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-amber-900">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center text-amber-600 font-bold">
                        <IndianRupee className="w-4 h-4" />
                        {item.price}
                      </div>
                      <span className="text-amber-600">×</span>
                      <span className="text-amber-600">{item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Information */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-amber-900 mb-4">Delivery Information</h2>
              <div className="grid gap-4">
                <div className="flex items-center gap-3 text-amber-700">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span>Estimated delivery: 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-amber-700">
                  <Truck className="w-5 h-5 text-amber-600" />
                  <span>Free delivery across India</span>
                </div>
                <div className="flex items-center gap-3 text-amber-700">
                  <Gift className="w-5 h-5 text-amber-600" />
                  <span>Gift wrapping available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-amber-900 mb-4">Payment Details</h2>
              
              {/* Price Breakdown */}
              <div className="space-y-3 pb-4 border-b border-amber-100">
                <div className="flex justify-between text-amber-700">
                  <span>Subtotal</span>
                  <div className="flex items-center font-medium">
                    <IndianRupee className="w-4 h-4" />
                    {totalAmount}
                  </div>
                </div>
                <div className="flex justify-between text-amber-700">
                  <span>Delivery</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-amber-900">
                  <span>Total</span>
                  <div className="flex items-center">
                    <IndianRupee className="w-5 h-5" />
                    {totalAmount}
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="py-4">
                <h3 className="font-medium text-amber-900 mb-3">Payment Method</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border border-amber-200 rounded-lg cursor-pointer bg-amber-50">
                    <input type="radio" name="payment" className="text-amber-600" defaultChecked />
                    <span className="font-medium text-amber-900">Cash on Delivery</span>
                    <CheckCircle className="w-5 h-5 text-amber-600 ml-auto" />
                  </label>
                </div>
              </div>

              {/* Place Order Button */}
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 mt-4">
                Place Order
              </button>

              {/* Security Note */}
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