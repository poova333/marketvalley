import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Truck, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="container-custom py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              🎉 Free delivery on orders over $50
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Fresh Groceries
              <span className="text-primary block">Delivered to Your Door</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Shop from thousands of fresh products. Get them delivered within hours. 
              Quality guaranteed on every order.
            </p>

            {/* Search bar */}
            <div className="relative max-w-lg mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for fresh vegetables, fruits, dairy..."
                className="w-full pl-12 pr-32 py-4 rounded-2xl bg-background shadow-card border border-border focus:ring-2 focus:ring-primary outline-none transition-all"
              />
              <Button
                variant="hero"
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                Search
              </Button>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-3">
              <Link to="/offers">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors font-medium">
                  🔥 Today's Deals
                </span>
              </Link>
              <Link to="/categories/fruits-vegetables">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium">
                  🥬 Fresh Veggies
                </span>
              </Link>
              <Link to="/categories/dairy-bakery">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-medium">
                  🥛 Dairy & Bakery
                </span>
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600"
                alt="Fresh groceries"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-background rounded-2xl shadow-lg p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold">Fast Delivery</p>
                  <p className="text-sm text-muted-foreground">Within 2 hours</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background rounded-2xl shadow-lg p-4 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold">100% Fresh</p>
                  <p className="text-sm text-muted-foreground">Quality guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features bar */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Truck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Free Delivery</p>
              <p className="text-sm text-muted-foreground">On orders over $50</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Express Delivery</p>
              <p className="text-sm text-muted-foreground">Get it in 2 hours</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Fresh Guarantee</p>
              <p className="text-sm text-muted-foreground">100% quality products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
