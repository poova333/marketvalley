import React from 'react';
import { Search, ShoppingCart, CreditCard, Truck } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      step: '01',
      title: 'Browse & Select',
      description: 'Browse our wide range of fresh products and add them to your cart',
    },
    {
      icon: ShoppingCart,
      step: '02',
      title: 'Add to Cart',
      description: 'Review your cart and make any adjustments before checkout',
    },
    {
      icon: CreditCard,
      step: '03',
      title: 'Easy Checkout',
      description: 'Pay securely using your preferred payment method',
    },
    {
      icon: Truck,
      step: '04',
      title: 'Fast Delivery',
      description: 'Sit back and relax while we deliver fresh groceries to your door',
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              How It Works
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Fresh Groceries at Your Fingertips
            </h2>
            <p className="text-muted-foreground mb-8">
              Getting your favorite groceries delivered is easier than ever. 
              Follow these simple steps and enjoy fresh products at your doorstep.
            </p>

            <div className="space-y-6">
              {steps.map((item, index) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-full left-1/2 w-0.5 h-6 bg-primary/30 -translate-x-1/2" />
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-sm text-primary font-semibold mb-1">Step {item.step}</p>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600"
              alt="Grocery delivery"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -top-4 -left-4 bg-background rounded-2xl shadow-lg p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm">Order Delivered!</p>
                  <p className="text-xs text-muted-foreground">Just now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
