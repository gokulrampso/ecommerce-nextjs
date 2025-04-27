'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FaCheckCircle, FaBox, FaTruck, FaClipboardCheck } from 'react-icons/fa';

export default function OrderSuccess() {
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // Generate a random order number
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString();
    setOrderNumber(randomOrderNumber);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header cartItems={[]} onCartClick={() => {}} />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {/* Success Header */}
          <div className="bg-green-600 p-6 text-white text-center">
            <FaCheckCircle className="mx-auto text-5xl mb-4" />
            <h1 className="text-2xl md:text-3xl font-bold">Thank You for Your Order!</h1>
            <p className="mt-2">Your order has been placed successfully.</p>
          </div>

          {/* Order Details */}
          <div className="p-6 md:p-8">
            <div className="mb-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                We've sent a confirmation email to the email address you provided.
              </p>
              <div className="mt-4 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg inline-block">
                <p className="text-sm text-gray-600 dark:text-gray-300">Order Number</p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">#{orderNumber}</p>
              </div>
            </div>

            {/* Order Timeline */}
            <h2 className="text-xl font-bold mb-6">What Happens Next?</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <FaClipboardCheck size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Order Confirmation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We've received your order and are processing it.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <FaBox size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Order Processing</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your items will be prepared and packed for shipping.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <FaTruck size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Shipping</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your order will be shipped to the address you provided. We'll email you the tracking information.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-center transition-colors">
                Continue Shopping
              </Link>
              <Link href="/account/orders" 
                className="inline-block bg-transparent border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium px-6 py-3 rounded-lg text-center transition-colors">
                View My Orders
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 