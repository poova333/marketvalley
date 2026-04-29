import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  User, 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  Heart,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import MiniCart from './MiniCart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const { totalItems } = useCart();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const categories = [
    { name: 'Fruits & Vegetables', path: '/categories/fruits-vegetables' },
    { name: 'Dairy & Bakery', path: '/categories/dairy-bakery' },
    { name: 'Snacks', path: '/categories/snacks' },
    { name: 'Beverages', path: '/categories/beverages' },
    { name: 'Daily Essentials', path: '/categories/daily-essentials' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-custom flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Free delivery on orders over $50</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Support: 1-800-GROCERY</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-fresh flex items-center justify-center">
              <span className="text-2xl">🥬</span>
            </div>
            <span className="text-xl font-bold text-foreground">FreshMart</span>
          </Link>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for groceries, fruits, vegetables..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <div 
              className="relative"
              onMouseEnter={() => setShowMiniCart(true)}
              onMouseLeave={() => setShowMiniCart(false)}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onClick={() => navigate('/cart')}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold animate-cart-bounce">
                    {totalItems}
                  </span>
                )}
              </Button>
              {showMiniCart && totalItems > 0 && (
                <div className="absolute right-0 top-full mt-2">
                  <MiniCart />
                </div>
              )}
            </div>

            {/* Account */}
            {isAuthenticated ? (
              <Button variant="ghost" onClick={() => navigate('/account')}>
                <User className="w-5 h-5 mr-2" />
                <span className="hidden md:inline">{user?.name?.split(' ')[0]}</span>
              </Button>
            ) : (
              <Button variant="default" onClick={() => navigate('/auth')}>
                <User className="w-5 h-5 mr-2" />
                <span className="hidden md:inline">Sign In</span>
              </Button>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation links - Desktop */}
        <nav className="hidden md:flex items-center gap-8 mt-4">
          <Link to="/" className="font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <button className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors">
              Categories
              <ChevronDown className="w-4 h-4" />
            </button>
            {showCategories && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-lg border border-border py-2 animate-fade-in">
                {categories.map((cat) => (
                  <Link
                    key={cat.path}
                    to={cat.path}
                    className="block px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/offers" className="font-medium text-foreground hover:text-primary transition-colors">
            Offers
          </Link>
          
          <Link to="/about" className="font-medium text-foreground hover:text-primary transition-colors">
            About
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-slide-up">
          {/* Mobile search */}
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search groceries..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          </div>

          {/* Mobile nav links */}
          <nav className="px-4 pb-4 space-y-2">
            <Link 
              to="/" 
              className="block py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <p className="px-4 text-sm font-semibold text-muted-foreground mb-2">Categories</p>
              {categories.map((cat) => (
                <Link
                  key={cat.path}
                  to={cat.path}
                  className="block py-2 px-6 hover:bg-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <Link 
              to="/offers" 
              className="block py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Offers
            </Link>
            <Link 
              to="/about" 
              className="block py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
