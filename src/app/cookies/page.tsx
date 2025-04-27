'use client';

import { PageTemplate } from '@/components/PageTemplate';

export default function CookiePolicyPage() {
  const content = (
    <>
      <p className="mb-4">
        This Cookie Policy explains how e-MART uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies?</h2>
      
      <p className="mb-4">
        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work efficiently and provide reporting information.
      </p>
      
      <p className="mb-4">
        Cookies set by the website owner (in this case, e-MART) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality on or through the website (such as advertising, interactive content, and analytics).
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">2. Types of Cookies We Use</h2>
      
      <h3 className="text-xl font-medium mt-6 mb-2">Essential Cookies</h3>
      <p className="mb-4">
        These cookies are necessary for the website to function properly and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not work if you do so.
      </p>
      
      <h3 className="text-xl font-medium mt-6 mb-2">Performance Cookies</h3>
      <p className="mb-4">
        These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous.
      </p>
      
      <h3 className="text-xl font-medium mt-6 mb-2">Functionality Cookies</h3>
      <p className="mb-4">
        These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, then some or all of these services may not function properly.
      </p>
      
      <h3 className="text-xl font-medium mt-6 mb-2">Targeting Cookies</h3>
      <p className="mb-4">
        These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not directly store personal information, but are based on uniquely identifying your browser and internet device.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">3. Specific Cookies We Use</h2>
      
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="py-3 px-4 text-left">Cookie Name</th>
              <th className="py-3 px-4 text-left">Purpose</th>
              <th className="py-3 px-4 text-left">Duration</th>
              <th className="py-3 px-4 text-left">Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="py-3 px-4">_emart_session</td>
              <td className="py-3 px-4">Used to maintain user sessions</td>
              <td className="py-3 px-4">2 weeks</td>
              <td className="py-3 px-4">Essential</td>
            </tr>
            <tr>
              <td className="py-3 px-4">_emart_cart</td>
              <td className="py-3 px-4">Stores cart information</td>
              <td className="py-3 px-4">2 weeks</td>
              <td className="py-3 px-4">Essential</td>
            </tr>
            <tr>
              <td className="py-3 px-4">_ga</td>
              <td className="py-3 px-4">Google Analytics</td>
              <td className="py-3 px-4">2 years</td>
              <td className="py-3 px-4">Performance</td>
            </tr>
            <tr>
              <td className="py-3 px-4">_fbp</td>
              <td className="py-3 px-4">Facebook Pixel</td>
              <td className="py-3 px-4">3 months</td>
              <td className="py-3 px-4">Targeting</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">4. How to Control Cookies</h2>
      
      <p className="mb-4">
        You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
      </p>
      
      <h3 className="text-xl font-medium mt-6 mb-2">Browser Controls</h3>
      <p className="mb-4">
        Most browsers allow you to view, manage, delete and block cookies for a website. Be aware that if you delete all cookies then any preferences you have set will be lost, including the ability to opt-out from cookies as this function itself requires placement of an opt-out cookie on your device.
      </p>
      
      <h3 className="text-xl font-medium mt-6 mb-2">Cookie Preference Center</h3>
      <p className="mb-4">
        We provide a cookie preference center accessible via the "Cookie Settings" link in the footer of our website, allowing you to accept or reject different types of cookies.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">5. Do Not Track</h2>
      
      <p className="mb-4">
        Some browsers have a "Do Not Track" feature that allows you to tell websites that you do not want to have your online activities tracked. At this time, we do not respond to browser "Do Not Track" signals.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">6. Changes to This Cookie Policy</h2>
      
      <p className="mb-4">
        We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised policy on our website.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
      
      <p className="mb-4">
        If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
      </p>
      
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
        <p>e-MART Privacy Team</p>
        <p>Email: privacy@e-mart.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      
      <p className="text-sm text-gray-500 mt-8">
        Last Updated: June 1, 2023
      </p>
    </>
  );

  return <PageTemplate title="Cookie Policy" content={content} />;
} 