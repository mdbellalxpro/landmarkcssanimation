
import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-12 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-2xl p-8 md:p-12">

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Terms & Conditions
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Last updated: April 2026
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using this website, you agree to be bound by these
            Terms and Conditions. If you do not agree, please do not use our services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Use of Our Service
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You agree to use our website only for lawful purposes. You must not
            misuse or attempt to harm the website or its functionality.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. User Accounts
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you create an account, you are responsible for maintaining the
            confidentiality of your login information and all activities under your account.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All content, logos, designs, and materials on this website are
            protected by intellectual property laws and belong to the website owner.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are not responsible for any damages or losses arising from the use
            or inability to use our website or services.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Changes to Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update these Terms & Conditions at any time. Continued use of
            the website means you accept the updated terms.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about these Terms, contact us at:{" "}
            <span className="text-blue-600">support@yourwebsite.com</span>
          </p>
        </div>

      </div>
    </div>
  );
}

