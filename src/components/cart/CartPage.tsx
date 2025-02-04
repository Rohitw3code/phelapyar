import React from 'react';
import { X, Plus, Minus, ShoppingCart, ArrowRight, Trash2, Gift } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export function CartPage() {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, removeItem } = useCart();

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    window.location.href = '/buy';
    toggleCart(); // Close the cart when navigating
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={toggleCart}
      />

      {/* Cart Panel */}
      <div className="absolute inset-y-0 right-0 w-full max-w-sm transform transition-transform duration-500 ease-in-out bg-gradient-to-b from-white to-amber-50 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-white border-b border-amber-100">
            <div className="flex items-center gap-2">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-amber-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <div>
                <h2 className="text-lg font-bold text-amber-900">Your Cart</h2>
                <p className="text-xs text-amber-600">{totalItems} items</p>
              </div>
            </div>
            <button 
              onClick={toggleCart}
              className="p-1.5 hover:bg-amber-100 rounded-full transition-all duration-200 hover:rotate-90"
            >
              <X className="w-5 h-5 text-amber-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
            {cartItems.map((item, index) => (
              <div 
                key={item.id}
                className="group bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 p-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-3">
                  {/* Image */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-amber-50">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="font-medium text-sm text-amber-900 truncate group-hover:text-amber-700 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-base font-bold text-amber-600">₹{item.price}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-amber-600 hover:text-red-500 hover:bg-red-50 rounded-md transition-all duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2 bg-amber-50 rounded-md p-1 w-fit">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-amber-100 rounded-md transition-all duration-200 disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3 text-amber-600" />
                      </button>
                      <span className="font-medium text-xs text-amber-900 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-amber-100 rounded-md transition-all duration-200"
                      >
                        <Plus className="w-3 h-3 text-amber-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-amber-100 p-4 space-y-3 bg-white">
            {/* Coupon Input */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Gift className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-600" />
                <input
                  type="text"
                  placeholder="Add coupon code"
                  className="w-full pl-8 pr-3 py-1.5 text-sm border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <button className="px-3 py-1.5 bg-amber-100 text-amber-700 text-sm font-medium rounded-md hover:bg-amber-200 transition-colors duration-200">
                Apply
              </button>
            </div>

            {/* Summary */}
            <div className="space-y-1.5 py-2">
              <div className="flex justify-between text-sm text-amber-800">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex justify-between text-sm text-amber-800">
                <span>Delivery</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-base font-bold text-amber-900 pt-2 border-t">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 text-sm"
            >
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}