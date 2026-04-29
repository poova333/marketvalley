import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Filter, Grid, List, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryMap: Record<string, string> = {
    'fruits-vegetables': 'Fruits & Vegetables',
    'dairy-bakery': 'Dairy & Bakery',
    'beverages': 'Beverages',
    'snacks': 'Snacks',
    'daily-essentials': 'Daily Essentials',
  };

  const categoryName = categoryId ? categoryMap[categoryId] || 'All Products' : 'All Products';
  
  const filteredProducts = products.filter(p => {
    const matchesCategory = !categoryId || p.category === categoryName;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/categories/fruits-vegetables" className="hover:text-primary">Categories</Link>
          <span>/</span>
          <span className="text-foreground">{categoryName}</span>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border sticky top-24">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      to={`/categories/${cat.id}`}
                      className={`block py-2 px-3 rounded-lg transition-colors ${
                        categoryId === cat.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-secondary'
                      }`}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border mt-6 pt-6">
                <h3 className="font-bold text-lg mb-4">Price Range</h3>
                <div className="space-y-2">
                  {['Under $5', '$5 - $10', '$10 - $20', 'Over $20'].map((range) => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span>{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-border mt-6 pt-6">
                <h3 className="font-bold text-lg mb-4">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span>{rating}+ Stars</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">{categoryName}</h1>
                <p className="text-muted-foreground">{sortedProducts.length} products found</p>
              </div>

              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search in category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-lg bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none w-48"
                  />
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>

                {/* View mode */}
                <div className="hidden md:flex items-center gap-1 bg-secondary rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="icon-sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="icon-sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products grid */}
            <div className={`grid gap-4 lg:gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-2 md:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
