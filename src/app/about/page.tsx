'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { CartItem } from '@/types/product';

export default function AboutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on initial render
  useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (e) {
        console.error('Error parsing cart items from localStorage:', e);
      }
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">About Us</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">
              Welcome to e-MART, your number one source for all things [product category]. We're dedicated to providing you the very best of [products], with an emphasis on [characteristics].
            </p>
            
            <p className="mb-4">
              Founded in [year] by [founder's name], e-MART has come a long way from its beginnings in [starting location]. When [founder's name] first started out, their passion for [passion] drove them to [action] so that e-MART can offer you [competitive differentiator]. We now serve customers all over [place], and are thrilled that we're able to turn our passion into our own website.
            </p>
            
            <p className="mb-4">
              We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p className="mb-4">
              At e-MART, our mission is to provide high-quality products at affordable prices while delivering exceptional customer service. We believe in sustainability and ethical business practices, and we work hard to ensure our products are sourced and manufactured responsibly.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
            <p className="mb-4">
              Our team of dedicated professionals is committed to helping you find the perfect products to meet your needs. With years of experience in the industry, we have the knowledge and expertise to guide you through your shopping journey.
            </p>
          </div>
        </div>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={(id) => {
          setCartItems(prevItems => prevItems.filter(item => item.id !== id));
        }}
        onUpdateQuantity={(id, quantity) => {
          setCartItems(prevItems =>
            prevItems.map(item =>
              item.id === id
                ? { ...item, quantity }
                : item
            )
          );
        }}
      />
    </div>
  );
} 