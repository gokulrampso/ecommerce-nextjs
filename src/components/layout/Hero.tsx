import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              New Arrival
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Experience Premium Audio Like Never Before
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Immerse yourself in crystal-clear sound with our latest noise-cancelling headphones. Perfect for work, travel, or relaxation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/products?category=Electronics"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                Shop Now <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/products/1"
                className="px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-lg transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image content */}
          <div className="relative h-80 md:h-96 lg:h-full">
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
                  alt="Premium Headphones"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="drop-shadow-2xl"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-200 dark:bg-blue-900 opacity-50 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-60 h-60 rounded-full bg-purple-200 dark:bg-purple-900 opacity-50 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Features banner */}
      <div className="bg-white dark:bg-gray-800 py-6 border-t border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-blue-600 dark:text-blue-400 font-medium mb-1">Free Shipping</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">On all orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-blue-600 dark:text-blue-400 font-medium mb-1">30-Day Returns</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Money back guarantee</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-blue-600 dark:text-blue-400 font-medium mb-1">Secure Checkout</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">100% protected payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 