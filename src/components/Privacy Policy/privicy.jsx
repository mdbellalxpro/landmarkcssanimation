
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-12 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-2xl p-8 md:p-12">

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Privacy Policy
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Last updated: April 2026
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may collect personal information such as your name, email address,
            and usage data when you use our website or services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. How We Use Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We use the collected data to improve our services, provide customer
            support, and enhance user experience.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. Cookies
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We use cookies to analyze website traffic and improve functionality.
            You can disable cookies in your browser settings.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Data Protection
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We take appropriate security measures to protect your personal data
            from unauthorized access, alteration, or disclosure.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Third-Party Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may use third-party services (like analytics or hosting providers)
            that help us operate our website.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, you can contact
            us at: <span className="text-blue-600">support@yourwebsite.com</span>
          </p>
        </div>

      </div>
    </div>
  );
}