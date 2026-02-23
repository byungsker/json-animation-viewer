import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About - JSON Animation Viewer",
  description:
    "JSON Animation Viewer is a free, privacy-focused tool for previewing Lottie JSON animations in your browser. No uploads, no databases — everything runs locally.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block transition-colors"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-6">About JSON Animation Viewer</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">What is JSON Animation Viewer?</h2>
            <p>
              JSON Animation Viewer is a free, browser-based tool designed to help developers,
              designers, and animators preview{" "}
              <strong className="text-white">Lottie JSON animation files</strong> quickly and
              securely. Whether you&apos;re working on a mobile app, a website, or a design project,
              our tool lets you instantly visualize your animations without installing any software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Why We Built This</h2>
            <p>
              Lottie animations have become the standard for adding lightweight, scalable animations
              to digital products. However, previewing these JSON files typically requires dedicated
              software or complex development setups. We created JSON Animation Viewer to solve this
              problem — a simple drag-and-drop tool that works right in your browser.
            </p>
            <p className="mt-3">
              Our goal is to provide the fastest, easiest way to preview Lottie animations with zero
              friction. No sign-ups, no downloads, no configurations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Key Features</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-white">Instant Preview:</strong> Drop your JSON file and see
                the animation play immediately. No loading screens, no waiting.
              </li>
              <li>
                <strong className="text-white">100% Privacy:</strong> Your animation files never
                leave your device. Everything is processed locally in your browser using JavaScript.
                We have no servers, no databases, and no file storage.
              </li>
              <li>
                <strong className="text-white">Size Detection:</strong> Automatically detects and
                displays the original dimensions (width &times; height) of your animation, helping
                you plan your layout.
              </li>
              <li>
                <strong className="text-white">Drag &amp; Drop:</strong> Simply drag your JSON file
                onto the viewer area, or click the button to select a file from your device.
              </li>
              <li>
                <strong className="text-white">Mobile Friendly:</strong> Works on all devices —
                desktop, tablet, and mobile. Preview animations on the go.
              </li>
              <li>
                <strong className="text-white">Free Forever:</strong> JSON Animation Viewer is
                completely free to use with no hidden costs or premium tiers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">What Are Lottie Animations?</h2>
            <p>
              Lottie is an open-source animation format created by Airbnb. It renders animations in
              real time using JSON data exported from tools like Adobe After Effects (via the
              Bodymovin plugin). Lottie animations are:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong className="text-white">Lightweight:</strong> Much smaller than GIFs or video
                files
              </li>
              <li>
                <strong className="text-white">Scalable:</strong> Vector-based, so they look sharp
                at any resolution
              </li>
              <li>
                <strong className="text-white">Interactive:</strong> Can be controlled
                programmatically (play, pause, reverse, etc.)
              </li>
              <li>
                <strong className="text-white">Cross-Platform:</strong> Supported on iOS, Android,
                web, and desktop applications
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Technology</h2>
            <p>JSON Animation Viewer is built with modern web technologies:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong className="text-white">Next.js 15</strong> — React framework for production-grade web apps
              </li>
              <li>
                <strong className="text-white">React 19</strong> — Latest version of the popular UI
                library
              </li>
              <li>
                <strong className="text-white">Lottie-web</strong> — Official Lottie rendering
                library by Airbnb
              </li>
              <li>
                <strong className="text-white">Tailwind CSS</strong> — Utility-first CSS framework
              </li>
              <li>
                <strong className="text-white">TypeScript</strong> — Static type checking for
                reliability
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Open Source</h2>
            <p>
              JSON Animation Viewer is open source. You can view the source code, report issues, or
              contribute on our{" "}
              <a
                href="https://github.com/lbo728/json-animation-viewer"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub repository
              </a>.
              Contributions, bug reports, and feature requests are always welcome.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p>
              Have questions, feedback, or suggestions? Feel free to open an issue on our{" "}
              <a
                href="https://github.com/lbo728/json-animation-viewer/issues"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Issues page
              </a>{" "}
              or reach out through the repository.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Explore More</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <Link href="/guide" className="text-blue-400 hover:underline">
                  How to Use JSON Animation Viewer
                </Link>{" "}
                — Step-by-step guide to previewing your animations.
              </li>
              <li>
                <Link href="/blog" className="text-blue-400 hover:underline">
                  Blog
                </Link>{" "}
                — Tutorials on Lottie animations, workflows, and best practices.
              </li>
              <li>
                <Link href="/faq" className="text-blue-400 hover:underline">
                  FAQ
                </Link>{" "}
                — Answers to frequently asked questions.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
