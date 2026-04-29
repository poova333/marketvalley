import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Truck, Package, Building, Users, Award, Target, Heart } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-fresh-light to-background py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                About FreshMart
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Fresh Groceries, Delivered with Care
              </h1>
              <p className="text-lg text-muted-foreground">
                We're on a mission to make fresh, quality groceries accessible to everyone. 
                From farm to your doorstep, we ensure every product meets our high standards.
              </p>
            </div>
          </div>
        </section>

        {/* About Market */}
        <section id="market" className="py-12 lg:py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">About Our Market</h2>
                <p className="text-muted-foreground mb-4">
                  FreshMart started with a simple idea: everyone deserves access to fresh, 
                  high-quality groceries without the hassle of traditional shopping.
                </p>
                <p className="text-muted-foreground mb-4">
                  We partner with local farmers and trusted suppliers to bring you the 
                  freshest produce, dairy, and everyday essentials. Our commitment to 
                  quality means we inspect every product before it reaches your door.
                </p>
                <p className="text-muted-foreground">
                  With same-day delivery and a satisfaction guarantee, we're here to 
                  make your grocery shopping effortless and enjoyable.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600"
                  alt="Fresh market"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Order Tracking */}
        <section id="tracking" className="py-12 lg:py-20 bg-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
                  <div className="space-y-6">
                    {[
                      { status: 'Order Placed', time: '10:30 AM', completed: true },
                      { status: 'Order Confirmed', time: '10:32 AM', completed: true },
                      { status: 'Packed & Ready', time: '11:00 AM', completed: true },
                      { status: 'Out for Delivery', time: '11:30 AM', completed: true },
                      { status: 'Delivered', time: '12:15 PM', completed: false },
                    ].map((step, i) => (
                      <div key={step.status} className="flex items-start gap-4">
                        <div className="relative">
                          <div className={`w-4 h-4 rounded-full ${step.completed ? 'bg-primary' : 'bg-border'}`} />
                          {i < 4 && (
                            <div className={`absolute top-4 left-1/2 w-0.5 h-8 -translate-x-1/2 ${step.completed ? 'bg-primary' : 'bg-border'}`} />
                          )}
                        </div>
                        <div>
                          <p className={`font-medium ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {step.status}
                          </p>
                          <p className="text-sm text-muted-foreground">{step.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Real-Time Tracking</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Know exactly where your order is at every step. Our real-time tracking 
                  system keeps you informed from the moment you place your order until 
                  it arrives at your doorstep.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Live GPS tracking of delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary" />
                    <span>Step-by-step order updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    <span>Estimated delivery time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Products */}
        <section id="products" className="py-12 lg:py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Quality Promise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every product we deliver goes through rigorous quality checks to ensure 
                you receive only the freshest and best.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: 'Premium Quality',
                  description: 'Only the finest products from trusted sources',
                },
                {
                  icon: Target,
                  title: 'Fresh Selection',
                  description: 'Daily sourced fruits, vegetables, and more',
                },
                {
                  icon: Heart,
                  title: 'Carefully Handled',
                  description: 'Temperature-controlled storage and delivery',
                },
                {
                  icon: Users,
                  title: 'Customer First',
                  description: '100% satisfaction or full refund guaranteed',
                },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Company */}
        <section id="company" className="py-12 lg:py-20 bg-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">About the Company</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Founded in 2020, FreshMart has grown from a small startup to one of 
                  the most trusted online grocery platforms. Our journey has been driven 
                  by a passion for connecting customers with fresh, quality products.
                </p>
                <p className="text-muted-foreground mb-6">
                  Today, we serve over 50,000 customers daily, partnering with 500+ 
                  local farmers and suppliers to bring the best products to your table.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '50K+', label: 'Happy Customers' },
                    { value: '500+', label: 'Partner Farms' },
                    { value: '10K+', label: 'Products' },
                    { value: '99%', label: 'On-time Delivery' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-background rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600"
                  alt="Our team"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-20 gradient-fresh text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Shop Fresh?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Join thousands of happy customers who trust FreshMart for their daily groceries.
            </p>
            <Link to="/categories/fruits-vegetables">
              <Button variant="secondary" size="lg" className="bg-background text-primary hover:bg-background/90">
                Start Shopping Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
