import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - JSON Animation Viewer",
  description:
    "Learn how JSON Animation Viewer handles your data. We process everything locally in your browser — no data is uploaded or stored on our servers.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block transition-colors"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: February 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to JSON Animation Viewer (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting
              your privacy. This Privacy Policy explains how we handle information when you use our
              website at{" "}
              <a
                href="https://json-animation-viewer.vercel.app"
                className="text-blue-400 hover:underline"
              >
                json-animation-viewer.vercel.app
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Data Processing</h2>
            <p>
              <strong className="text-white">All processing happens locally in your browser.</strong>{" "}
              When you upload a JSON animation file to our tool, the file is read and rendered
              entirely on your device using JavaScript. Your animation data is never uploaded to our
              servers, stored in any database, or transmitted to any third party.
            </p>
            <p className="mt-3">
              We do not have a backend server or database. JSON Animation Viewer is a static
              client-side web application hosted on Vercel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong className="text-white">Usage Analytics:</strong> Basic, anonymized analytics
                data such as page views, browser type, device type, and approximate geographic
                location (country level). This data is collected through standard web analytics and
                does not identify individual users.
              </li>
              <li>
                <strong className="text-white">Cookies:</strong> We may use cookies for analytics
                and advertising purposes. You can control cookie preferences through your browser
                settings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Advertising (Google AdSense)</h2>
            <p>
              We may display advertisements through Google AdSense or similar advertising networks.
              These third-party vendors may use cookies and similar technologies to serve ads based
              on your prior visits to this and other websites.
            </p>
            <p className="mt-3">
              Google&apos;s use of advertising cookies enables it and its partners to serve ads based on
              your visit to our site and/or other sites on the Internet. You may opt out of
              personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong className="text-white">Vercel:</strong> Hosting and content delivery
              </li>
              <li>
                <strong className="text-white">Google AdSense:</strong> Advertising (may use cookies)
              </li>
              <li>
                <strong className="text-white">Google Search Console:</strong> Website performance monitoring
              </li>
            </ul>
            <p className="mt-3">
              Each of these services has its own privacy policy governing data collection and usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Data Retention</h2>
            <p>
              Since we do not collect personal data or store user files, there is no user data to
              retain. Analytics data is retained only as long as necessary for improving our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Disable cookies through your browser settings</li>
              <li>Opt out of personalized advertising</li>
              <li>Use our tool without providing any personal information</li>
              <li>Contact us with any privacy-related concerns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Children&apos;s Privacy</h2>
            <p>
              Our service is not directed at children under the age of 13. We do not knowingly
              collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our{" "}
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
