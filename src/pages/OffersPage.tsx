import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Copy, Percent, Gift, Package, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { products, offers } from '@/data/products';
import { toast } from 'sonner';

const OffersPage = () => {
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success(`Code ${code} copied to clipboard!`);
  };

  const discountedProducts = products.filter(p => p.discount);

  const dealSections = [
    {
      id: 'daily',
      title: 'Deals of the Day',
      icon: Clock,
      description: 'Limited time offers - Grab them before they\'re gone!',
      products: discountedProducts.slice(0, 4),
    },
    {
      id: 'value',
      title: 'Value Packs',
      icon: Package,
      description: 'Best value bundles for your weekly shopping',
      products: products.slice(4, 8),
    },
    {
      id: 'combo',
      title: 'Combo Offers',
      icon: Gift,
      description: 'Buy more, save more with our special combos',
      products: products.slice(8, 12),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground py-12 lg:py-20">
          <div className="container-custom text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-background/20 text-accent-foreground font-semibold text-sm mb-4">
              🔥 Hot Deals
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Exclusive Offers & Deals
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Save big on your favorite groceries with our exclusive offers. 
              Fresh deals added daily!
            </p>
          </div>
        </section>

        {/* Coupons Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <Tag className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Available Coupons</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.map((offer) => (
                <div 
                  key={offer.id}
                  className="relative overflow-hidden rounded-2xl bg-card shadow-card border border-border group"
                >
                  <div className="absolute inset-0">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/70" />
                  </div>
                  
                  <div className="relative p-6 text-accent-foreground">
                    <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                    <p className="opacity-90 mb-4">{offer.description}</p>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/20 backdrop-blur-sm">
                        <span className="font-mono font-bold text-lg">{offer.code}</span>
                        <button 
                          onClick={() => copyCode(offer.code)}
                          className="hover:opacity-80 transition-opacity"
                        >
                          <Copy className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm opacity-80">
                      <Clock className="w-4 h-4" />
                      <span>Valid till {offer.validTill}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deal Sections */}
        {dealSections.map((section, index) => (
          <section 
            key={section.id} 
            className={`py-12 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}`}
          >
            <div className="container-custom">
              <div className="flex items-center gap-3 mb-2">
                <section.icon className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <p className="text-muted-foreground mb-8">{section.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {section.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Newsletter CTA */}
        <section className="py-12 lg:py-20 gradient-fresh text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Never Miss a Deal!
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Subscribe to our newsletter and get exclusive offers delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl bg-background/20 border border-background/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:ring-2 focus:ring-background/50 outline-none"
              />
              <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OffersPage;
