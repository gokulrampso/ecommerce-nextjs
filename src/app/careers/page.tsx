'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { CartItem } from '@/types/product';
import Link from 'next/link';

export default function CareersPage() {
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

  const jobOpenings = [
    {
      id: 1,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full-time'
    },
    {
      id: 4,
      title: 'Customer Support Representative',
      department: 'Customer Service',
      location: 'Remote',
      type: 'Part-time'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Careers</h1>
          
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="mb-4">
              Join our talented team and help us transform the e-commerce industry! At SHOPIFY, we're always looking for passionate, creative individuals who want to make a difference.
            </p>
            
            <p className="mb-4">
              We offer competitive salaries, comprehensive benefits, flexible work arrangements, and a dynamic, inclusive culture that values innovation and diversity.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Current Openings</h2>
          
          <div className="grid gap-4 mb-8">
            {jobOpenings.map(job => (
              <div key={job.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                    {job.department}
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                    {job.location}
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                <Link 
                  href={`/careers/${job.id}`} 
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Don't see a position that fits?</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              We're always interested in connecting with talented individuals. Send your resume to careers@shopify.com and tell us why you'd be a great fit for our team.
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