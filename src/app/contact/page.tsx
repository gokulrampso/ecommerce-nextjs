'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { CartItem } from '@/types/product';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Reset form submission status after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Have a question, comment, or concern? We'd love to hear from you. Fill out the form below and a member of our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <FaPhone className="text-blue-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">support@shopify.com</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">123 Commerce St, Shopping City, SC 12345</span>
                </div>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-64">
                {/* Placeholder for a map */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Map Location</span>
                </div>
              </div>
            </div>
            
            <div>
              {isSubmitted && (
                <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg mb-4 animate-fadeIn">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                    suppressHydrationWarning
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                    suppressHydrationWarning
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                    suppressHydrationWarning
                  >
                    <option value="">Select a subject</option>
                    <option value="Order Inquiry">Order Inquiry</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Return Request">Return Request</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                    suppressHydrationWarning
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  suppressHydrationWarning
                >
                  Send Message
                </button>
              </form>
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