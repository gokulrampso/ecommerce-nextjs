'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/layout/Hero';
import { ProductCard } from '@/components/products/ProductCard';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { products } from '@/data/products';
import { Product, CartItem } from '@/types/product';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart items from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (e) {
        console.error('Error parsing cart items from localStorage:', e);
      }
    }
  }, []);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    // If cart becomes empty after removal, remove from localStorage
    if (cartItems.length === 1) {
      localStorage.removeItem('cartItems');
    }
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Categories for filtering
  const categories = ["All", "Electronics", "Clothing", "Home & Kitchen", "Beauty", "Sports", "Books"];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Hero />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link href="/products" className="text-blue-600 dark:text-blue-400 hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>

        {/* Marketing section */}
        <section className="my-16">
          <div className="bg-blue-600 dark:bg-blue-800 rounded-xl overflow-hidden">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <h2 className="text-3xl font-bold mb-4">Spring Sale</h2>
                  <p className="text-blue-100 mb-6">Get up to 50% off on selected items. Limited time offer!</p>
                  <Link href="/products?sale=true" 
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-block">
                    Shop the Sale
                  </Link>
                </div>
                <div className="flex justify-center">
                  <div className="relative h-64 w-64">
                    <Image
                      src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80"
                      alt="Sale"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}
