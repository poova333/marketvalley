import React from 'react';
import { Truck, Clock, MapPin, Calendar, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DeliverySection = () => {
  return (
    <section className="py-12 lg:py-20 gradient-fresh text-primary-foreground">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-background/20 text-primary-foreground font-semibold text-sm mb-4">
              Delivery Information
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Fast & Reliable Delivery to Your Doorstep
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              We understand that you want your groceries fresh and fast. 
              That's why we offer multiple delivery options to suit your needs.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Clock,
                  title: 'Express Delivery',
                  description: 'Get your order within 2 hours for just $4.99',
                },
                {
                  icon: Calendar,
                  title: 'Scheduled Delivery',
                  description: 'Choose your preferred time slot up to 7 days ahead',
                },
                {
                  icon: Package,
                  title: 'Free Delivery',
                  description: 'On all orders above $50 with standard delivery',
                },
                {
                  icon: MapPin,
                  title: 'Live Tracking',
                  description: 'Track your order in real-time from store to door',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-primary-foreground/80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              variant="secondary" 
              size="lg" 
              className="mt-8 bg-background text-primary hover:bg-background/90"
            >
              Learn More About Delivery
            </Button>
          </div>

          {/* Image/Map placeholder */}
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-3xl bg-background/10 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-background/20 flex items-center justify-center mb-4">
                  <Truck className="w-12 h-12" />
                </div>
                <p className="text-2xl font-bold mb-2">Delivery Zone</p>
                <p className="text-primary-foreground/80">We deliver to 500+ areas</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-8 right-8 bg-background rounded-xl p-4 shadow-lg text-foreground animate-float">
              <p className="text-sm font-semibold">Average Delivery Time</p>
              <p className="text-2xl font-bold text-primary">45 min</p>
            </div>
            <div className="absolute bottom-8 left-8 bg-background rounded-xl p-4 shadow-lg text-foreground animate-float" style={{ animationDelay: '1s' }}>
              <p className="text-sm font-semibold">Deliveries Today</p>
              <p className="text-2xl font-bold text-primary">2,500+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
