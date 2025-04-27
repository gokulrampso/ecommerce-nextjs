'use client';

import { PageTemplate } from '@/components/PageTemplate';

export default function PrivacyPolicyPage() {
  const content = (
    <>
      <p className="mb-4">
        e-Mart ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by e-Mart.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
      
      <p className="mb-4">
        We collect personal information that you voluntarily provide to us when you:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Register for an account</li>
        <li>Place an order</li>
        <li>Sign up for our newsletter</li>
        <li>Contact our customer service</li>
        <li>Participate in surveys or promotions</li>
      </ul>
      
      <p className="mb-4">
        This information may include:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Contact information (name, email address, mailing address, phone number)</li>
        <li>Payment information (credit card details, billing address)</li>
        <li>Account credentials (username, password)</li>
        <li>Order history and preferences</li>
        <li>Demographic information</li>
      </ul>
      
      <p className="mb-4">
        We also automatically collect certain information when you visit, use or navigate our website. This information may include:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Device and usage information (IP address, browser and device characteristics)</li>
        <li>Log and usage data (pages visited, access times, time spent on pages)</li>
        <li>Device information (location information, cookies, and similar technologies)</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
      
      <p className="mb-4">
        We use the information we collect for various business purposes, including:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Processing and fulfilling orders</li>
        <li>Managing your account</li>
        <li>Providing customer support</li>
        <li>Sending transactional emails and order confirmations</li>
        <li>Marketing and promotional communications (with your consent)</li>
        <li>Improving our website and services</li>
        <li>Detecting and preventing fraud</li>
        <li>Complying with legal obligations</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Share Your Information</h2>
      
      <p className="mb-4">
        e-Mart may share your personal information with:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Service providers that help us operate our business</li>
        <li>Payment processors to process your payments</li>
        <li>Shipping and fulfillment partners to deliver your orders</li>
        <li>Marketing partners (with your consent)</li>
        <li>Legal authorities when required by law</li>
      </ul>
      
      <p className="mb-4">
        We do not sell your personal information to third parties.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">4. Your Rights and Choices</h2>
      
      <p className="mb-4">
        Depending on your location, you may have certain rights regarding your personal information, including:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Accessing the personal information we have about you</li>
        <li>Correcting inaccurate personal information</li>
        <li>Deleting your personal information</li>
        <li>Restricting or objecting to our use of your personal information</li>
        <li>Withdrawing your consent</li>
        <li>Data portability</li>
      </ul>
      
      <p className="mb-4">
        To exercise these rights, please contact us using the information provided at the end of this Privacy Policy.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
      
      <p className="mb-4">
        e-Mart implements appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">6. International Transfers</h2>
      
      <p className="mb-4">
        Your personal information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">7. Children's Privacy</h2>
      
      <p className="mb-4">
        Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
      
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
      
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at privacy@e-mart.com.
      </p>
      
      <p className="text-sm text-gray-500 mt-8">
        Last Updated: June 1, 2023
      </p>
    </>
  );

  return <PageTemplate title="Privacy Policy" content={content} />;
} 