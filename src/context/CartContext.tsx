import React, { createContext, useContext, useState } from 'react';

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
  addToCart: () => void;
  toggleCart: () => void;
  updateQuantity: (id: number, change: number) => void;
  removeItem: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Classic Message Potato",
      price: 199,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=250&h=250"
    },
    {
      id: 2,
      name: "Love Message Pack",
      price: 299,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=250&h=250"
    },
    {
      id: 3,
      name: "Birthday Special",
      price: 249,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=250&h=250"
    }
  ]);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
    updateCartCount();
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    updateCartCount();
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