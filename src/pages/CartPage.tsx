import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, CreditCard, Truck, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

type CheckoutStep = 'cart' | 'address' | 'summary' | 'payment' | 'confirmation';

const CartPage = () => {
  const { items, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<CheckoutStep>('cart');
  const [selectedAddress, setSelectedAddress] = useState('home');

  const addresses = [
    { id: 'home', label: 'Home', address: '123 Main St, Apt 4B, New York, NY 10001' },
    { id: 'work', label: 'Work', address: '456 Office Blvd, Suite 200, New York, NY 10002' },
  ];

  const deliveryFee = totalPrice > 50 ? 0 : 4.99;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + deliveryFee + tax;

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.info('Please sign in to continue');
      navigate('/auth');
      return;
    }
    setStep('address');
  };

  const handlePlaceOrder = () => {
    setStep('confirmation');
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container-custom py-12">
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto rounded-full bg-secondary flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Looks like you haven't added anything yet</p>
            <Button onClick={() => navigate('/categories/fruits-vegetables')}>
              Start Shopping
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container-custom py-8">
        {/* Breadcrumb / Steps */}
        {step !== 'confirmation' && (
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            {['cart', 'address', 'summary', 'payment'].map((s, i) => (
              <React.Fragment key={s}>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
                  step === s ? 'bg-primary text-primary-foreground' : 
                  ['cart', 'address', 'summary', 'payment'].indexOf(step) > i ? 'bg-primary/20 text-primary' : 
                  'bg-secondary text-muted-foreground'
                }`}>
                  <span className="w-6 h-6 rounded-full bg-current/20 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="font-medium capitalize">{s}</span>
                </div>
                {i < 3 && <div className="w-8 h-0.5 bg-border" />}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Cart View */}
        {step === 'cart' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Shopping Cart ({items.length} items)</h1>
                <Button variant="ghost" onClick={() => navigate(-1)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Button>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-card rounded-2xl p-4 shadow-card border border-border">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                        <h3 className="font-semibold text-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.unit}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${item.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span className="font-medium">
                      {deliveryFee === 0 ? (
                        <span className="text-primary">FREE</span>
                      ) : (
                        `$${deliveryFee.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-lg text-primary">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                {totalPrice < 50 && (
                  <p className="text-sm text-muted-foreground mb-4 p-3 rounded-lg bg-secondary">
                    Add ${(50 - totalPrice).toFixed(2)} more for free delivery!
                  </p>
                )}

                <Button className="w-full" size="lg" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Address Step */}
        {step === 'address' && (
          <div className="max-w-2xl mx-auto">
            <Button variant="ghost" onClick={() => setStep('cart')} className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Button>
            
            <h2 className="text-2xl font-bold mb-6">Delivery Address</h2>
            
            <div className="space-y-4 mb-8">
              {addresses.map((addr) => (
                <label
                  key={addr.id}
                  className={`block p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedAddress === addr.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="address"
                      value={addr.id}
                      checked={selectedAddress === addr.id}
                      onChange={(e) => setSelectedAddress(e.target.value)}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-semibold">{addr.label}</p>
                      <p className="text-muted-foreground">{addr.address}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <Button className="w-full" size="lg" onClick={() => setStep('summary')}>
              Continue to Summary
            </Button>
          </div>
        )}

        {/* Summary Step */}
        {step === 'summary' && (
          <div className="max-w-2xl mx-auto">
            <Button variant="ghost" onClick={() => setStep('address')} className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Address
            </Button>
            
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border mb-6">
              <h3 className="font-semibold mb-4">Items ({items.length})</h3>
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>{deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border mb-6">
              <h3 className="font-semibold mb-2">Delivery Address</h3>
              <p className="text-muted-foreground">
                {addresses.find(a => a.id === selectedAddress)?.address}
              </p>
            </div>

            <Button className="w-full" size="lg" onClick={() => setStep('payment')}>
              Continue to Payment
            </Button>
          </div>
        )}

        {/* Payment Step */}
        {step === 'payment' && (
          <div className="max-w-2xl mx-auto">
            <Button variant="ghost" onClick={() => setStep('summary')} className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Summary
            </Button>
            
            <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
            
            <div className="space-y-4 mb-8">
              {[
                { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
                { id: 'cod', label: 'Cash on Delivery', icon: Truck },
              ].map((method) => (
                <label
                  key={method.id}
                  className="block p-4 rounded-2xl border-2 border-border hover:border-primary/50 cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" defaultChecked={method.id === 'card'} />
                    <method.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{method.label}</span>
                  </div>
                </label>
              ))}
            </div>

            <div className="bg-secondary rounded-2xl p-6 mb-6">
              <p className="font-bold text-lg mb-2">Total to Pay: <span className="text-primary">${finalTotal.toFixed(2)}</span></p>
              <p className="text-sm text-muted-foreground">Your payment information is secured with SSL encryption</p>
            </div>

            <Button className="w-full" size="lg" onClick={handlePlaceOrder}>
              Place Order - ${finalTotal.toFixed(2)}
            </Button>
          </div>
        )}

        {/* Confirmation Step */}
        {step === 'confirmation' && (
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center mb-6">
              <Check className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Order Placed Successfully!</h2>
            <p className="text-muted-foreground mb-2">Your order #FRM{Date.now()} has been placed</p>
            <p className="text-muted-foreground mb-8">You will receive a confirmation email shortly</p>
            
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/account')}>
                Track Order
              </Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
