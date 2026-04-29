import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  count: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image, count }) => {
  return (
    <Link 
      to={`/categories/${id}`}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 border border-border"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-background mb-1">{name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-background/80">{count}+ items</span>
            <span className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <ArrowRight className="w-4 h-4 text-background group-hover:text-primary-foreground" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
