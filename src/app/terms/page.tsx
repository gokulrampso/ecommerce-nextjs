'use client';

import { PageTemplate } from '@/components/PageTemplate';

export default function TermsPage() {
  const content = (
    <>
      <p className="mb-4">
        Welcome to e-MART. By accessing our website, you agree to these Terms of Service. Please read them carefully.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
      
      <p className="mb-4">
        By accessing or using our website, mobile application, or any of our services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access or use our services.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">2. Changes to Terms</h2>
      
      <p className="mb-4">
        We reserve the right to modify these Terms of Service at any time. We will provide notice of any material changes by updating the "Last Updated" date at the top of this page. Your continued use of our services after such modifications will constitute your acknowledgment and agreement to the modified terms.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">3. Account Registration</h2>
      
      <p className="mb-4">
        To access certain features of our services, you may need to create an account. You are responsible for:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Providing accurate and complete information during registration</li>
        <li>Maintaining the security of your account credentials</li>
        <li>All activities that occur under your account</li>
        <li>Notifying us immediately of any unauthorized use of your account</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">4. Products and Services</h2>
      
      <p className="mb-4">
        We strive to accurately describe our products and services, but we do not warrant that product descriptions or other content are accurate, complete, reliable, current, or error-free. In the event of a pricing error, we reserve the right to cancel any orders placed for products listed at the incorrect price.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">5. Orders and Payments</h2>
      
      <p className="mb-4">
        All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product or pricing information, or problems identified by our credit and fraud avoidance department.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">6. Shipping and Delivery</h2>
      
      <p className="mb-4">
        Shipping times are estimates and not guaranteed. Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier. You are responsible for filing any claims with carriers for damaged or lost shipments.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">7. Returns and Refunds</h2>
      
      <p className="mb-4">
        Our return and refund policies are as described in the Returns & Exchanges section of our website. Certain items may not be eligible for return or exchange as noted in the product descriptions.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">8. Intellectual Property</h2>
      
      <p className="mb-4">
        All content included on our website, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of e-MART or its content suppliers and protected by international copyright laws.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">9. User Conduct</h2>
      
      <p className="mb-4">
        You agree not to use our services for any illegal or unauthorized purpose. You must not:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Violate any applicable laws or regulations</li>
        <li>Infringe the rights of others</li>
        <li>Interfere with or disrupt our services</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Engage in any form of automated data collection without our consent</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">10. Limitation of Liability</h2>
      
      <p className="mb-4">
        To the fullest extent permitted by law, e-MART shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law</h2>
      
      <p className="mb-4">
        These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Information</h2>
      
      <p className="mb-4">
        Questions about the Terms of Service should be sent to us at legal@e-mart.com.
      </p>
      
      <p className="text-sm text-gray-500 mt-8">
        Last Updated: June 1, 2023
      </p>
    </>
  );

  return <PageTemplate title="Terms of Service" content={content} />;
} 