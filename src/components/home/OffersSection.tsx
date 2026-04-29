import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Copy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { offers } from '@/data/products';

const OffersSection = () => {
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success(`Code ${code} copied to clipboard!`);
  };

  return (
    <section className="py-12 lg:py-16 bg-secondary/30">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Today's Best Offers</h2>
            <p className="text-muted-foreground">Don't miss these exclusive deals</p>
          </div>
          <Link 
            to="/offers"
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Offers <ArrowRight className="w-4 h-4" />
          </Link>
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
                  className="w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/70" />
              </div>
              
              <div className="relative p-6 text-accent-foreground">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="opacity-90 mb-4">{offer.description}</p>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/20 backdrop-blur-sm">
                    <span className="font-mono font-bold">{offer.code}</span>
                    <button 
                      onClick={() => copyCode(offer.code)}
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Copy className="w-4 h-4" />
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

        <Link 
          to="/offers"
          className="flex md:hidden items-center justify-center gap-2 text-primary font-semibold mt-6 hover:gap-3 transition-all"
        >
          View All Offers <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default OffersSection;
