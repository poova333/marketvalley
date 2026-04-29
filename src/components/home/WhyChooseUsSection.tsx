import React from 'react';
import { Check, Leaf, Truck, Shield, Clock, ThumbsUp } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Farm Fresh Products',
      description: 'We source directly from local farms to ensure maximum freshness',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Same-day delivery available in most areas within 2 hours',
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Not satisfied? Get full refund or replacement, no questions asked',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our customer support team is always ready to help you',
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600"
              alt="Fresh vegetables and fruits"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg hidden md:block">
              <p className="text-4xl font-bold mb-1">10K+</p>
              <p className="text-sm opacity-90">Happy Customers</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              We Provide the Best Quality Fresh Products
            </h2>
            <p className="text-muted-foreground mb-8">
              At FreshMart, we're committed to bringing you the freshest, highest-quality groceries. 
              Our products are carefully selected and delivered with care to ensure you get the best every time.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
