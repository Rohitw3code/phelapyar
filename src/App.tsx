import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { WhyPotato } from './components/home/WhyPotato';
import { Features } from './components/home/Features';
import { CustomOffer } from './components/home/CustomOffer';
import { ProductList } from './components/home/ProductList';
import { HappinessGuarantee } from './components/home/HappinessGuarantee';
import { OrderForm } from './components/home/OrderForm';
import { Testimonials } from './components/home/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <Hero />
      <CustomOffer />
      <ProductList />
      <HappinessGuarantee />
      <WhyPotato />
      <Features />
      <OrderForm />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;