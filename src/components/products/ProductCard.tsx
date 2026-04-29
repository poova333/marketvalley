import React, { useState } from 'react';
import { ShoppingCart, Eye, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product, useCart } from '@/contexts/CartContext';
import ProductModal from './ProductModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  return (
    <>
      <div className="group bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-hover transition-all duration-300 border border-border">
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          {product.discount && (
            <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-bold">
              -{product.discount}%
            </span>
          )}
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
          >
            <Heart 
              className={`w-4 h-4 ${isWishlisted ? 'fill-destructive text-destructive' : 'text-muted-foreground'}`} 
            />
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Hover actions */}
          <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => setShowModal(true)}
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform"
            >
              <Eye className="w-5 h-5" />
            </Button>
            <Button
              variant="cart"
              size="icon"
              onClick={() => addToCart(product)}
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75"
            >
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{product.unit}</p>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <Button
              variant="cart"
              size="icon-sm"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {showModal && (
        <ProductModal product={product} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ProductCard;
