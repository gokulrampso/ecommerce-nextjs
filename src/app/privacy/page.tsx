'use client';

import { PageTemplate } from '@/components/PageTemplate';

export default function PrivacyPage() {
  const content = (
    <>
      <p className="mb-4">
        At e-MART, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
      
      <p className="mb-4">
        We may collect personal information that you voluntarily provide to us when you:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Register for an account</li>
        <li>Place an order</li>
        <li>Subscribe to our newsletter</li>
        <li>Contact customer support</li>
        <li>Participate in promotions or surveys</li>
      </ul>
      
      <p className="mb-4">
        This information may include:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Name and contact details (email address, phone number, shipping and billing address)</li>
        <li>Payment information (credit card details, though we do not store complete credit card information)</li>
        <li>Account credentials</li>
        <li>Order history and preferences</li>
        <li>Communications with our customer service team</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">2. Automatically Collected Information</h2>
      
      <p className="mb-4">
        When you visit our website, we automatically collect certain information about your device, including:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Referral source</li>
        <li>Pages visited and time spent on those pages</li>
        <li>Clicks, scrolls, and mouse movements</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
      
      <p className="mb-4">
        We may use the information we collect for various purposes, including:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Processing and fulfilling your orders</li>
        <li>Managing your account</li>
        <li>Providing customer support</li>
        <li>Sending transactional emails (order confirmations, shipping updates)</li>
        <li>Sending marketing communications (if you've opted in)</li>
        <li>Improving our website and products</li>
        <li>Detecting and preventing fraud</li>
        <li>Complying with legal obligations</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
      
      <p className="mb-4">
        We use cookies, pixel tags, and similar technologies to collect information about your browsing activities. These technologies help us analyze website traffic, customize content, and provide targeted advertisements. You can manage your cookie preferences through your browser settings. For more information, please see our Cookie Policy.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">5. Information Sharing</h2>
      
      <p className="mb-4">
        We may share your information with:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Service providers (payment processors, shipping companies, marketing partners)</li>
        <li>Affiliated companies within our corporate family</li>
        <li>Legal authorities when required by law</li>
        <li>Business partners for joint marketing efforts (with your consent)</li>
        <li>Professional advisors (attorneys, accountants, insurers)</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
      
      <p className="mb-4">
        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Retention</h2>
      
      <p className="mb-4">
        We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">8. Your Rights</h2>
      
      <p className="mb-4">
        Depending on your location, you may have certain rights regarding your personal information, including:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Right to access your personal information</li>
        <li>Right to correct inaccurate or incomplete information</li>
        <li>Right to delete your personal information</li>
        <li>Right to restrict or object to processing</li>
        <li>Right to data portability</li>
        <li>Right to withdraw consent</li>
      </ul>
      
      <p className="mb-4">
        To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">9. Children's Privacy</h2>
      
      <p className="mb-4">
        Our website is not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
      
      <p className="mb-4">
        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Us</h2>
      
      <p className="mb-4">
        If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
      </p>
      
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
        <p>e-MART Privacy Team</p>
        <p>123 Commerce St, Shopping City, SC 12345</p>
        <p>Email: privacy@e-mart.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      
      <p className="text-sm text-gray-500 mt-8">
        Last Updated: June 1, 2023
      </p>
    </>
  );

  return <PageTemplate title="Privacy Policy" content={content} />;
} 