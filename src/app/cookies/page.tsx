'use client';

import { PageTemplate } from '@/components/PageTemplate';

export default function CookiePolicyPage() {
  const content = (
    <>
      <p className="mb-4">
        This Cookie Policy explains how e-Mart ("we", "our", or "us") uses cookies and similar technologies to recognize and track your visits to our website.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">1. What are Cookies?</h2>
      
      <p className="mb-4">
        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work efficiently and to provide reporting information.
      </p>
      
      <p className="mb-4">
        Cookies set by the website owner (in this case, e-Mart) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">2. Types of Cookies We Use</h2>
      
      <p className="mb-4">
        We use the following types of cookies on our website:
      </p>
      
      <h3 className="text-xl font-bold mt-6 mb-2">Essential Cookies</h3>
      
      <p className="mb-4">
        These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You may disable these by changing your browser settings, but this may affect how the website functions.
      </p>
      
      <h3 className="text-xl font-bold mt-6 mb-2">Performance and Analytics Cookies</h3>
      
      <p className="mb-4">
        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the performance of our site and enhance user experience.
      </p>
      
      <h3 className="text-xl font-bold mt-6 mb-2">Functionality Cookies</h3>
      
      <p className="mb-4">
        These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
      </p>
      
      <h3 className="text-xl font-bold mt-6 mb-2">Targeting and Advertising Cookies</h3>
      
      <p className="mb-4">
        These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">3. How to Manage Cookies</h2>
      
      <p className="mb-4">
        Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, as it will no longer be personalized to you.
      </p>
      
      <p className="mb-4">
        To manage your cookie preferences:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Chrome:</strong> Settings {'>'}  Privacy and security {'>'} Cookies and other site data</li>
        <li><strong>Firefox:</strong> Options {'>'} Privacy & Security {'>'} Cookies and Site Data</li>
        <li><strong>Safari:</strong> Preferences {'>'} Privacy {'>'} Cookies and website data</li>
        <li><strong>Edge:</strong> Settings {'>'} Cookies and site permissions {'>'} Cookies and site data</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookie Consent</h2>
      
      <p className="mb-4">
        When you first visit our website, we will request your consent to set cookies on your device. You can choose to accept all cookies, reject non-essential cookies, or manage your preferences. You can change your cookie preferences at any time by visiting our Cookie Preference Center.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Collected by Cookies</h2>
      
      <p className="mb-4">
        The information collected through cookies may include:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>IP address</li>
        <li>Device information (type, operating system, browser)</li>
        <li>Location data</li>
        <li>Pages visited and time spent</li>
        <li>Referring website</li>
        <li>Click behavior</li>
      </ul>
      
      <p className="mb-4">
        This information helps us analyze traffic patterns, determine the popularity of certain content, and better understand how our website is used.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">6. Changes to Our Cookie Policy</h2>
      
      <p className="mb-4">
        We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
      
      <p className="mb-4">
        If you have any questions about our use of cookies, please contact us at privacy@e-mart.com.
      </p>
      
      <p className="text-sm text-gray-500 mt-8">
        Last Updated: June 1, 2023
      </p>
    </>
  );

  return <PageTemplate title="Cookie Policy" content={content} />;
} 