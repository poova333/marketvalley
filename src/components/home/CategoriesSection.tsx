import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CategoryCard from '@/components/categories/CategoryCard';
import { categories } from '@/data/products';

const CategoriesSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Shop by Category</h2>
            <p className="text-muted-foreground">Browse our wide selection of fresh products</p>
          </div>
          <Link 
            to="/categories/fruits-vegetables"
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              image={category.image}
              count={category.count}
            />
          ))}
        </div>

        <Link 
          to="/categories/fruits-vegetables"
          className="flex md:hidden items-center justify-center gap-2 text-primary font-semibold mt-6 hover:gap-3 transition-all"
        >
          View All Categories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default CategoriesSection;
