import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { WhyPotato } from './components/home/WhyPotato';
import { Features } from './components/home/Features';
import { CustomOffer } from './components/home/CustomOffer';
import { ProductList } from './components/home/ProductList';
import { HappinessGuarantee } from './components/home/HappinessGuarantee';
import { Partners } from './components/home/Partners';
import { CartPage } from './components/cart/CartPage';
import { Testimonials } from './components/home/Testimonials';
import { BuyPage } from './components/buy/BuyPage';
import { CustomOrderPage } from './components/order/CustomOrderPage';
import { FaqPage } from './components/pages/FaqPage';
import { ContactPage } from './components/pages/ContactPage';
import { CartProvider } from './context/CartContext';
import { DatingBanner } from './components/layout/DatingBanner';
import { UserReactions } from './components/home/UserReactions';

function App() {
  const path = window.location.pathname;

  return (
    <CartProvider>
      {path === '/buy' ? (
        <BuyPage />
      ) : path === '/custom-order' ? (
        <CustomOrderPage />
      ) : path === '/faq' ? (
        <FaqPage />
      ) : path === '/contact' ? (
        <ContactPage />
      ) : (
        <div className="min-h-screen bg-amber-50">
          <Navbar />
          <CartPage />
          <Hero />
          <CustomOffer />
          <ProductList />
          <HappinessGuarantee />
          <WhyPotato />
          <UserReactions />
          <Features />
          <Partners />
          <Testimonials />
          <Footer />
          <DatingBanner />
        </div>
      )}
    </CartProvider>
  );
}

export default App;