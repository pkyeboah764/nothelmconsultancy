/**
 * Nothelm Consultancy - Terms and Conditions Page
 * Developer: Samuel Arthur
 * Description: Terms and conditions page with comprehensive legal terms
 */

import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-[#202962] mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 22, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#202962] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the Nothelm Consultancy website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#202962] mb-4">2. Services</h2>
              <p className="text-gray-700 mb-4">
                Nothelm Consultancy provides professional business advisory services including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Business Advisory & Strategic Consulting</li>
                <li>Real Estate Advisory Services</li>
                <li>Project Advisory & Management</li>
                <li>Compliance and Legal Advisory</li>
                <li>Market Research and Analysis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#202962] mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Providing accurate and complete information</li>
                <li>Timely payment of fees as agreed</li>
                <li>Compliance with applicable laws and regulations</li>
                <li>Implementing recommendations at their own discretion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#202962] mb-4">4. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We maintain strict confidentiality regarding all client information and business matters. All proprietary information shared will be protected and not disclosed to third parties without explicit consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#202962] mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Nothelm Consultancy provides advisory services based on available information and industry best practices. We are not liable for decisions made by clients based on our recommendations or for outcomes beyond our direct control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#202962] mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, methodologies, and materials provided by Nothelm Consultancy remain our intellectual property unless otherwise agreed in writing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#202962] mb-4">7. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate services with appropriate notice as specified in individual service agreements. All obligations regarding confidentiality and payment survive termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#202962] mb-4">8. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms are governed by the laws of Ghana. Any disputes will be resolved through appropriate legal channels in Ghana.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#202962] mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions regarding these terms, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> nothelmmanagement@gmail.com<br />
                  <strong>Phone:</strong> (+233) 59 232 6074<br />
                  <strong>Address:</strong> Oat Street, Agbogba, North Legon, Greater Accra, Ghana
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}