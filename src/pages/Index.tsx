import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import OffersSection from '@/components/home/OffersSection';
import ProductsSection from '@/components/home/ProductsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import DeliverySection from '@/components/home/DeliverySection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* 1. Hero Banner */}
        <HeroSection />

        {/* 2. Top Categories */}
        <CategoriesSection />

        {/* 3. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 4. Today's Offers */}
        <OffersSection />

        {/* 5. Recommended / Best Sellers */}
        <ProductsSection 
          title="Recommended for You"
          subtitle="Handpicked products based on your preferences"
          filterFn={(p) => p.rating >= 4.7}
          limit={4}
        />

        {/* 6. Best Selling Products */}
        <ProductsSection 
          title="Best Sellers"
          subtitle="Most popular products this week"
          limit={8}
        />

        {/* 7. New Arrivals */}
        <ProductsSection 
          title="New Arrivals"
          subtitle="Fresh additions to our store"
          filterFn={(p) => !!p.discount}
          limit={4}
        />

        {/* 9. How It Works */}
        <HowItWorksSection />

        {/* 10. Reviews */}
        <ReviewsSection />

        {/* 11. Delivery Info */}
        <DeliverySection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
