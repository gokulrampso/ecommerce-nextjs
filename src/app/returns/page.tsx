'use client';

import { PageTemplate } from '@/components/PageTemplate';

export default function ReturnsPage() {
  const content = (
    <>
      <p className="mb-4">
        We want you to be completely satisfied with your purchase. If you're not happy with your order for any reason, we're here to help with an easy return and exchange process.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Return Policy</h2>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>You have 30 days from the delivery date to return most items.</li>
        <li>Items must be in their original condition with all tags attached.</li>
        <li>Items marked as "Final Sale" cannot be returned or exchanged.</li>
        <li>For hygiene reasons, certain items like underwear, earrings, and beauty products that have been opened cannot be returned.</li>
        <li>Defective or damaged items can be returned at any time for a full refund or replacement.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">How to Return an Item</h2>
      
      <ol className="list-decimal pl-5 mb-8 space-y-2">
        <li>Log in to your SHOPIFY account and go to your Order History.</li>
        <li>Select the order that contains the item(s) you want to return.</li>
        <li>Click on "Return Items" and follow the prompts to complete your return request.</li>
        <li>Print the prepaid return shipping label (if eligible) or use your own shipping method.</li>
        <li>Package the item(s) securely in the original packaging if possible.</li>
        <li>Attach the return label to the outside of the package and drop it off at the designated shipping carrier.</li>
        <li>Once we receive and process your return, we'll issue your refund within 5-7 business days.</li>
      </ol>
      
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-8">
        <h3 className="font-bold mb-2">Return Shipping Fees</h3>
        <p className="mb-2">
          For standard returns, a $5.95 return shipping fee will be deducted from your refund.
        </p>
        <p>
          Return shipping is free for:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Defective or damaged items</li>
          <li>Incorrect items shipped</li>
          <li>VIP members</li>
        </ul>
      </div>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Exchanges</h2>
      
      <p className="mb-4">
        If you'd like to exchange an item for a different size or color, you can request an exchange during the return process. Here's how it works:
      </p>
      
      <ol className="list-decimal pl-5 mb-6 space-y-2">
        <li>When initiating your return, select "Exchange" as your preferred option.</li>
        <li>Choose the new size, color, or item you'd like to receive.</li>
        <li>If the new item has a different price, we'll charge or refund the difference accordingly.</li>
        <li>Once we receive your original item, we'll process and ship your exchange.</li>
      </ol>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Refund Information</h2>
      
      <p className="mb-4">
        Refunds will be issued to the original form of payment used for the purchase. Please allow 5-7 business days after we receive your return for the refund to appear in your account.
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Credit card refunds: 3-5 business days to process</li>
        <li>Debit card refunds: 5-7 business days to process</li>
        <li>Store credit or gift card refunds: 1-2 business days to process</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
      
      <p className="mb-4">
        If you have any questions about returns or exchanges, please contact our customer service team at returns@shopify.com or call us at (123) 456-7890.
      </p>
    </>
  );

  return <PageTemplate title="Returns & Exchanges" content={content} />;
} 