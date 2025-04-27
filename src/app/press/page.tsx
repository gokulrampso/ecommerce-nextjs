'use client';

import { PageTemplate } from '@/components/PageTemplate';

export default function PressPage() {
  const content = (
    <>
      <p className="mb-4">
        Welcome to the SHOPIFY press page. Here you'll find our latest press releases, media coverage, and company news.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Press Releases</h2>
      
      <div className="space-y-6 mb-8">
        <div className="border-l-4 border-blue-500 pl-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">July 15, 2023</span>
          <h3 className="text-lg font-semibold mb-1">SHOPIFY Launches New Mobile App with Enhanced Features</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our new mobile app offers a seamless shopping experience with personalized recommendations, faster checkout, and real-time order tracking.
          </p>
        </div>
        
        <div className="border-l-4 border-blue-500 pl-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">June 3, 2023</span>
          <h3 className="text-lg font-semibold mb-1">SHOPIFY Expands International Shipping to 25 New Countries</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We're excited to announce that we now offer international shipping to 25 additional countries, bringing our total to over 100 countries worldwide.
          </p>
        </div>
        
        <div className="border-l-4 border-blue-500 pl-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">May 12, 2023</span>
          <h3 className="text-lg font-semibold mb-1">SHOPIFY Commits to Carbon-Neutral Shipping by 2025</h3>
          <p className="text-gray-600 dark:text-gray-400">
            As part of our sustainability initiative, we're implementing eco-friendly packaging and investing in carbon offset programs.
          </p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Media Inquiries</h2>
      
      <p className="mb-4">
        For media inquiries, please contact our press team at press@shopify.com or call (123) 456-7890. We're happy to provide:
      </p>
      
      <ul className="list-disc pl-5 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
        <li>Press kits and media resources</li>
        <li>Executive interviews</li>
        <li>Company information and statistics</li>
        <li>High-resolution images and logos</li>
      </ul>
      
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Download Resources</h3>
        <div className="flex flex-wrap gap-3">
          <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded transition-colors">
            Press Kit
          </a>
          <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded transition-colors">
            Brand Guidelines
          </a>
          <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded transition-colors">
            Logo Package
          </a>
          <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded transition-colors">
            Company Fact Sheet
          </a>
        </div>
      </div>
    </>
  );

  return <PageTemplate title="Press" content={content} />;
} 