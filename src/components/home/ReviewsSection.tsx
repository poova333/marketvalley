import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      rating: 5,
      comment: 'Absolutely love FreshMart! The vegetables are always crisp and fresh. Delivery is super fast too.',
      date: '2 days ago',
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      rating: 5,
      comment: 'Best online grocery store! Great prices and the quality is consistently excellent. Highly recommend!',
      date: '1 week ago',
    },
    {
      id: 3,
      name: 'Emily Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      rating: 4,
      comment: 'Very convenient service. The app is easy to use and customer support is always helpful.',
      date: '2 weeks ago',
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about their FreshMart experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-hover transition-shadow"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'fill-accent text-accent' : 'text-muted-foreground'}`}
                  />
                ))}
              </div>

              <p className="text-foreground mb-6">{review.comment}</p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50K+', label: 'Happy Customers' },
            { value: '10K+', label: 'Products' },
            { value: '4.8', label: 'Average Rating' },
            { value: '99%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-secondary/50">
              <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
