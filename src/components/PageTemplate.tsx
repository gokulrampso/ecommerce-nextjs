'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { CartItem } from '@/types/product';

type PageTemplateProps = {
  title: string;
  content: React.ReactNode;
};

export const PageTemplate = ({ title, content }: PageTemplateProps) => {
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
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{title}</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            {content}
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