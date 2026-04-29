import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';

interface ProductsSectionProps {
  title: string;
  subtitle: string;
  filterFn?: (product: typeof products[0]) => boolean;
  limit?: number;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ 
  title, 
  subtitle, 
  filterFn,
  limit = 8 
}) => {
  const filteredProducts = filterFn 
    ? products.filter(filterFn).slice(0, limit)
    : products.slice(0, limit);

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          <Link 
            to="/categories/fruits-vegetables"
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link 
          to="/categories/fruits-vegetables"
          className="flex md:hidden items-center justify-center gap-2 text-primary font-semibold mt-6 hover:gap-3 transition-all"
        >
          View All Products <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;
