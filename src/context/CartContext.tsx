import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartCount: number;
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  toggleCart: () => void;
  updateQuantity: (id: number, change: number) => void;
  removeItem: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Default dummy item
const defaultCartItem: CartItem = {
  id: 1,
  name: "Premium Message Potato",
  price: 199,
  quantity: 1,
  image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400&h=400"
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([defaultCartItem]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(1);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      // Only use saved cart if it's not empty
      if (parsedCart.length > 0) {
        setCartItems(parsedCart);
        setCartCount(parsedCart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0));
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartCount();
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateCartCount = () => {
    setCartCount(cartItems.reduce((sum, item) => sum + item.quantity, 0));
  };

  return (
    <CartContext.Provider value={{ 
      cartCount, 
      cartItems, 
      isCartOpen, 
      addToCart, 
      toggleCart,
      updateQuantity,
      removeItem 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}