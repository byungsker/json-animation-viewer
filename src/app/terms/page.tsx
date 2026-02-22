import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - JSON Animation Viewer",
  description:
    "Terms of Service for JSON Animation Viewer. Understand the terms and conditions for using our free Lottie JSON animation preview tool.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block transition-colors"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: February 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using JSON Animation Viewer (&quot;the Service&quot;), available at{" "}
              <a
                href="https://json-animation-viewer.vercel.app"
                className="text-blue-400 hover:underline"
              >
                json-animation-viewer.vercel.app
              </a>
              , you agree to be bound by these Terms of Service. If you do not agree with any part of
              these terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Description of Service</h2>
            <p>
              JSON Animation Viewer is a free, client-side web application that allows users to
              preview Lottie JSON animation files directly in their browser. The Service processes
              all animation data locally on your device without uploading, storing, or transmitting
              your files to any server.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Use of the Service</h2>
            <p>You agree to use the Service only for lawful purposes. You shall not:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Use the Service in any way that violates applicable laws or regulations</li>
              <li>Attempt to interfere with, compromise, or disrupt the Service</li>
              <li>
                Use automated systems or software to extract data from the Service (scraping)
              </li>
              <li>Upload files that contain malicious code or are designed to exploit vulnerabilities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Intellectual Property</h2>
            <p>
              The Service, including its original content, features, and functionality, is owned by
              JSON Animation Viewer and is protected by international copyright and other
              intellectual property laws.
            </p>
            <p className="mt-3">
              Any animation files you upload remain your property. We do not claim any ownership
              over user-uploaded content, and as stated in our Privacy Policy, your files are never
              stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Disclaimer of Warranties</h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind,
              either express or implied, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the Service will be uninterrupted, error-free, or secure</li>
              <li>Warranties regarding the accuracy or reliability of any results obtained through the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Limitation of Liability</h2>
            <p>
              In no event shall JSON Animation Viewer, its creators, or contributors be liable for
              any indirect, incidental, special, consequential, or punitive damages arising out of
              or related to your use of the Service. This includes, without limitation, damages for
              loss of profits, data, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Third-Party Content</h2>
            <p>
              The Service may contain links to third-party websites or display advertisements from
              third-party advertising networks. We are not responsible for the content, privacy
              policies, or practices of these third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Modifications to Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue the Service (or any part
              thereof) at any time without prior notice. We shall not be liable to you or any third
              party for any modification, suspension, or discontinuance of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Changes will be
              effective immediately upon posting to this page. Your continued use of the Service
              after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              Republic of Korea, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">11. Contact</h2>
            <p>
              If you have any questions about these Terms of Service, please reach out through our{" "}
              <a
                href="https://github.com/lbo728/json-animation-viewer"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub repository
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
