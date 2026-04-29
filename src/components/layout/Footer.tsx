import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-2xl">🥬</span>
              </div>
              <span className="text-xl font-bold">FreshMart</span>
            </div>
            <p className="text-background/70 mb-4">
              Your trusted online grocery store delivering fresh products right to your doorstep.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/categories/fruits-vegetables" className="text-background/70 hover:text-primary transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/offers" className="text-background/70 hover:text-primary transition-colors">Offers & Deals</Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">Track Order</Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/fruits-vegetables" className="text-background/70 hover:text-primary transition-colors">Fruits & Vegetables</Link>
              </li>
              <li>
                <Link to="/categories/dairy-bakery" className="text-background/70 hover:text-primary transition-colors">Dairy & Bakery</Link>
              </li>
              <li>
                <Link to="/categories/beverages" className="text-background/70 hover:text-primary transition-colors">Beverages</Link>
              </li>
              <li>
                <Link to="/categories/snacks" className="text-background/70 hover:text-primary transition-colors">Snacks</Link>
              </li>
              <li>
                <Link to="/categories/daily-essentials" className="text-background/70 hover:text-primary transition-colors">Daily Essentials</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Grocery St, Fresh City, FC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5 text-primary" />
                <span>1-800-GROCERY</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@freshmart.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © 2024 FreshMart. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/70 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
