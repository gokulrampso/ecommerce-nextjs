'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { CartItem } from '@/types/product';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
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

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Electronics Trends in 2023',
      excerpt: 'Discover the cutting-edge gadgets and electronics that are shaping the industry this year.',
      category: 'Electronics',
      date: 'June 12, 2023',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Summer Fashion Essentials',
      excerpt: 'Stay cool and stylish with these must-have summer fashion items for your wardrobe.',
      category: 'Clothing',
      date: 'May 28, 2023',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Home Office Setup Guide',
      excerpt: 'Create a productive and comfortable workspace with these essential home office products.',
      category: 'Home & Kitchen',
      date: 'May 15, 2023',
      image: 'https://images.unsplash.com/photo-1593476550610-87baa860004a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'Natural Skincare Ingredients to Look For',
      excerpt: 'Learn about the best natural ingredients that can transform your skincare routine.',
      category: 'Beauty',
      date: 'April 30, 2023',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Blog</h1>
          
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Stay up to date with the latest trends, product reviews, and shopping tips. Our blog covers everything from tech gadgets to fashion, home decor, and more.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map(post => (
              <div key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-0 left-0 m-4">
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
                  <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="inline-block text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
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