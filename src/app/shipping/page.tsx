'use client';

import { PageTemplate } from '@/components/PageTemplate';

export default function ShippingPage() {
  const content = (
    <>
      <p className="mb-4">
        At e-MART, we strive to provide fast, reliable shipping options to customers worldwide. Below you'll find information about our shipping policies, delivery times, and tracking options.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Shipping Options</h2>
      
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="py-3 px-4 text-left">Shipping Method</th>
              <th className="py-3 px-4 text-left">Delivery Time</th>
              <th className="py-3 px-4 text-left">Cost</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="py-3 px-4">Standard Shipping</td>
              <td className="py-3 px-4">5-7 business days</td>
              <td className="py-3 px-4">$4.99 (Free on orders over $50)</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Express Shipping</td>
              <td className="py-3 px-4">2-3 business days</td>
              <td className="py-3 px-4">$9.99</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Next Day Delivery</td>
              <td className="py-3 px-4">1 business day</td>
              <td className="py-3 px-4">$19.99</td>
            </tr>
            <tr>
              <td className="py-3 px-4">International Shipping</td>
              <td className="py-3 px-4">7-14 business days</td>
              <td className="py-3 px-4">Varies by location</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Shipping Policies</h2>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Orders are processed within 1-2 business days.</li>
        <li>Shipping times are estimated and begin from the date of shipment, not the order date.</li>
        <li>We ship to all 50 US states and over 100 countries internationally.</li>
        <li>Orders placed on weekends or holidays will be processed on the next business day.</li>
        <li>For international orders, please note that customs fees may apply and are the responsibility of the customer.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Order Tracking</h2>
      
      <p className="mb-4">
        Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number to track your package's status and estimated delivery date.
      </p>
      
      <p className="mb-6">
        To track your order:
      </p>
      
      <ol className="list-decimal pl-5 mb-6 space-y-2">
        <li>Log in to your e-MART account</li>
        <li>Go to your Order History</li>
        <li>Click on the order you want to track</li>
        <li>Click the tracking number to view the current status</li>
      </ol>
      
      <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg mb-8">
        <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">COVID-19 Update</h3>
        <p className="text-yellow-700 dark:text-yellow-400">
          Due to COVID-19, shipping carriers may experience delays. We appreciate your patience and understanding during this time.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
      
      <p className="mb-4">
        If you have any questions about shipping or tracking, please contact our customer service team at support@e-mart.com or call us at (123) 456-7890.
      </p>
    </>
  );

  return <PageTemplate title="Shipping Information" content={content} />;
} 