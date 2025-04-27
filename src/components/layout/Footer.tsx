import { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaArrowRight } from 'react-icons/fa';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the email to a server
    if (email.includes('@')) {
      // Simple validation
      setSubscribed(true);
      setEmail('');
      // Reset the success message after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Newsletter */}
      <div className="bg-gray-100 dark:bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get the latest updates on new products and upcoming sales
            </p>
            {subscribed ? (
              <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-3 rounded-lg mb-4 animate-fadeIn">
                Thank you for subscribing!
              </div>
            ) : null}
            <form onSubmit={handleSubscribe} className="flex" suppressHydrationWarning>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                suppressHydrationWarning
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-r-lg flex items-center transition-colors"
                suppressHydrationWarning
              >
                Subscribe <FaArrowRight className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Blog</Link></li>
              <li><Link href="/press" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Press</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">All Products</Link></li>
              <li><Link href="/products?sort=bestselling" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Best Sellers</Link></li>
              <li><Link href="/products?sort=newest" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">New Arrivals</Link></li>
              <li><Link href="/products?sale=true" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">On Sale</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Returns & Exchanges</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                <FaYoutube size={24} />
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Monday-Friday: 9am-5pm ET<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} e-MART. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-500 dark:hover:text-blue-400">Terms of Service</Link>
            <Link href="/privacy" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-500 dark:hover:text-blue-400">Privacy Policy</Link>
            <Link href="/cookies" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-500 dark:hover:text-blue-400">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}; 