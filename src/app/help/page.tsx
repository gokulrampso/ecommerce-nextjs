'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { CartItem } from '@/types/product';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function HelpPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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

  const faqs = [
    {
      id: 1,
      question: 'How do I track my order?',
      answer: 'You can track your order by logging into your account and viewing your order history. Each order has a tracking number that you can use to monitor the delivery status.'
    },
    {
      id: 2,
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Products must be in their original condition with all tags attached. Please visit our Returns & Exchanges page for more details.'
    },
    {
      id: 3,
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location. You can view the shipping options available to your country during checkout.'
    },
    {
      id: 4,
      question: 'How can I change or cancel my order?',
      answer: 'You can change or cancel your order within 1 hour of placing it by contacting our customer service team. After that, we may not be able to make changes as orders are processed quickly.'
    },
    {
      id: 5,
      question: 'Are there any promo codes available?',
      answer: 'We regularly offer promotional codes through our newsletter and social media channels. You can also check our Deals page for current promotions and discounts.'
    }
  ];

  const toggleFaq = (id: number) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };

  const filteredFaqs = searchQuery
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Help Center</h1>
          
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Find answers to frequently asked questions and get the support you need.
            </p>
            
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                suppressHydrationWarning
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map(faq => (
                  <div 
                    key={faq.id} 
                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                      onClick={() => toggleFaq(faq.id)}
                      suppressHydrationWarning
                    >
                      <span>{faq.question}</span>
                      {expandedFaq === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">No results found. Please try a different search.</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">Still need help?</h2>
            <p className="text-blue-600 dark:text-blue-400 mb-4">
              Our customer support team is available to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a 
                href="/contact" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="mailto:support@e-mart.com" 
                className="bg-white dark:bg-gray-800 text-blue-500 border border-blue-500 px-6 py-2 rounded-lg transition-colors"
              >
                Email Support
              </a>
            </div>
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