import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, MapPin, ShoppingBag, Heart, CreditCard, Bell, 
  HelpCircle, Shield, Gift, LogOut, ChevronRight, 
  Edit, Plus, Trash2, Package, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

type AccountSection = 'profile' | 'addresses' | 'orders' | 'wishlist' | 'payments' | 'notifications' | 'support' | 'security' | 'rewards';

const AccountPage = () => {
  const [activeSection, setActiveSection] = useState<AccountSection>('profile');
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/auth');
    return null;
  }

  const menuItems = [
    { id: 'profile', icon: User, label: 'Personal Information' },
    { id: 'addresses', icon: MapPin, label: 'Address Management' },
    { id: 'orders', icon: ShoppingBag, label: 'Order Management' },
    { id: 'wishlist', icon: Heart, label: 'Wishlist & Saved Lists' },
    { id: 'payments', icon: CreditCard, label: 'Payment & Wallet' },
    { id: 'notifications', icon: Bell, label: 'Delivery & Notifications' },
    { id: 'support', icon: HelpCircle, label: 'Support & Help' },
    { id: 'security', icon: Shield, label: 'Security & Settings' },
    { id: 'rewards', icon: Gift, label: 'Loyalty & Rewards' },
  ];

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{user?.name}</h3>
                  <p className="text-muted-foreground">{user?.email}</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Edit className="w-4 h-4 mr-2" />
                    Change Photo
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Full Name', value: user?.name },
                  { label: 'Email', value: user?.email },
                  { label: 'Phone', value: user?.phone || '+1 234 567 8900' },
                  { label: 'Login Method', value: 'Email & Password' },
                ].map((field) => (
                  <div key={field.label} className="flex justify-between items-center py-3 border-b border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">{field.label}</p>
                      <p className="font-medium">{field.value}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <Button className="mt-6">Save Changes</Button>
            </div>
          </div>
        );

      case 'addresses':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Address Management</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Address
              </Button>
            </div>

            <div className="space-y-4">
              {[
                { id: 1, label: 'Home', address: '123 Main St, Apt 4B, New York, NY 10001', isDefault: true },
                { id: 2, label: 'Work', address: '456 Office Blvd, Suite 200, New York, NY 10002', isDefault: false },
              ].map((addr) => (
                <div key={addr.id} className="bg-card rounded-2xl p-6 shadow-card border border-border">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{addr.label}</h3>
                          {addr.isDefault && (
                            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground mt-1">{addr.address}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon-sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon-sm" className="text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'orders':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Order Management</h2>
            
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {['All', 'In Progress', 'Delivered', 'Cancelled'].map((filter) => (
                <Button 
                  key={filter} 
                  variant={filter === 'All' ? 'default' : 'outline'}
                  size="sm"
                >
                  {filter}
                </Button>
              ))}
            </div>

            <div className="space-y-4">
              {[
                { id: 'FRM12345', date: 'Dec 10, 2024', status: 'Delivered', total: 45.99, items: 5 },
                { id: 'FRM12344', date: 'Dec 8, 2024', status: 'In Progress', total: 32.50, items: 3 },
                { id: 'FRM12343', date: 'Dec 5, 2024', status: 'Delivered', total: 78.25, items: 8 },
              ].map((order) => (
                <div key={order.id} className="bg-card rounded-2xl p-6 shadow-card border border-border">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-semibold">Order #{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'Delivered' 
                        ? 'bg-primary/10 text-primary' 
                        : order.status === 'In Progress'
                        ? 'bg-accent/10 text-accent'
                        : 'bg-destructive/10 text-destructive'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{order.items} items</span>
                      </div>
                      <span className="font-semibold text-primary">${order.total.toFixed(2)}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      {order.status === 'In Progress' && (
                        <Button variant="default" size="sm">Track Order</Button>
                      )}
                      {order.status === 'Delivered' && (
                        <Button variant="default" size="sm">Reorder</Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'wishlist':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Wishlist & Saved Lists</h2>
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
              <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
              <p className="text-muted-foreground mb-6">Save items you love for quick access later</p>
              <Button onClick={() => navigate('/categories/fruits-vegetables')}>
                Start Shopping
              </Button>
            </div>
          </div>
        );

      case 'payments':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Payment & Wallet</h2>
            
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border mb-6">
              <h3 className="font-semibold mb-4">Wallet Balance</h3>
              <p className="text-4xl font-bold text-primary mb-4">$0.00</p>
              <Button>Add Money</Button>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Saved Cards</h3>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Card
                </Button>
              </div>
              <p className="text-muted-foreground text-center py-8">No saved cards</p>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Delivery & Notifications</h2>
            
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border space-y-4">
              {[
                { label: 'Order Updates', description: 'Get notified about your order status', enabled: true },
                { label: 'Offers & Discounts', description: 'Receive exclusive deals and promotions', enabled: true },
                { label: 'Price Drop Alerts', description: 'Know when prices drop on wishlist items', enabled: false },
                { label: 'Back in Stock', description: 'Alert when out-of-stock items return', enabled: true },
              ].map((setting) => (
                <div key={setting.label} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium">{setting.label}</p>
                    <p className="text-sm text-muted-foreground">{setting.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={setting.enabled} className="sr-only peer" />
                    <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-background after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'support':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Support & Help</h2>
            
            <div className="grid gap-4">
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                <h3 className="font-semibold mb-4">Need Help?</h3>
                <div className="space-y-3">
                  {['FAQ', 'Contact Us', 'Live Chat', 'Return Policy'].map((item) => (
                    <button key={item} className="flex justify-between items-center w-full p-3 rounded-lg hover:bg-secondary transition-colors">
                      <span>{item}</span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Security & Settings</h2>
            
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border space-y-4">
              <button className="flex justify-between items-center w-full p-3 rounded-lg hover:bg-secondary transition-colors">
                <span>Change Password</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="flex justify-between items-center w-full p-3 rounded-lg hover:bg-secondary transition-colors">
                <span>Login History</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="flex justify-between items-center w-full p-3 rounded-lg hover:bg-secondary transition-colors text-destructive">
                <span>Delete Account</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        );

      case 'rewards':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Loyalty & Rewards</h2>
            
            <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-6 text-accent-foreground mb-6">
              <p className="text-sm opacity-80 mb-2">Your Points Balance</p>
              <p className="text-4xl font-bold mb-4">0 Points</p>
              <p className="text-sm opacity-80">Earn 1 point for every $1 spent</p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <p className="text-muted-foreground text-center py-8">No activity yet</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container-custom py-8">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden sticky top-24">
              <nav className="p-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id as AccountSection)}
                    className={`flex items-center gap-3 w-full p-3 rounded-xl transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </button>
                ))}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full p-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors mt-2"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium text-sm">Logout</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccountPage;
