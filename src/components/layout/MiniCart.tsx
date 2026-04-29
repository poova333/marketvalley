import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const MiniCart = () => {
  const { items, totalPrice, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="w-80 bg-card rounded-xl shadow-lg border border-border p-4 animate-fade-in">
      <h3 className="font-semibold text-lg mb-4">Shopping Cart</h3>
      
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{item.name}</p>
              <p className="text-primary font-semibold">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => removeFromCart(item.id)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="border-t border-border mt-4 pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total:</span>
          <span className="font-bold text-lg text-primary">${totalPrice.toFixed(2)}</span>
        </div>
        <Button 
          className="w-full" 
          onClick={() => navigate('/cart')}
        >
          View Cart & Checkout
        </Button>
      </div>
    </div>
  );
};

export default MiniCart;
