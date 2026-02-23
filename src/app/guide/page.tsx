import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "How to Use JSON Animation Viewer - Step-by-Step Guide",
  description:
    "Learn how to preview Lottie JSON animations with JSON Animation Viewer. Step-by-step instructions for uploading, previewing, and adjusting your animations in the browser.",
  alternates: {
    canonical: "/guide",
  },
};

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "How to Use", href: "/guide" }]} />
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block transition-colors"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-6">
          How to Use JSON Animation Viewer
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <p>
              JSON Animation Viewer makes it simple to preview Lottie animation files directly in
              your browser. No software to install, no accounts to create, and no files uploaded to
              any server. Everything runs locally on your device. This guide walks you through every
              feature so you can get the most out of the tool.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Step 1: Open the Viewer
            </h2>
            <p>
              Navigate to the{" "}
              <Link href="/" className="text-blue-400 hover:underline">
                JSON Animation Viewer homepage
              </Link>
              . You&apos;ll see a clean interface with a large drop zone in the center of the screen.
              The viewer is ready to accept your animation file right away. There&apos;s no login
              required and nothing to configure before you start.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Step 2: Load Your Animation File
            </h2>
            <p>
              You have two ways to load a Lottie JSON file into the viewer:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-3">
              <li>
                <strong className="text-white">Drag and Drop:</strong> Grab your .json file from
                your file explorer and drop it directly onto the viewer area. The drop zone will
                highlight when it detects a file being dragged over it, confirming that the viewer
                is ready to receive your animation.
              </li>
              <li>
                <strong className="text-white">Click to Select:</strong> Click the &quot;Select
                File&quot; button to open your system&apos;s file picker. Browse to the location of
                your Lottie JSON file and select it. The animation loads instantly once you confirm
                your selection.
              </li>
            </ul>
            <p className="mt-3">
              Only valid Lottie JSON files are supported. If you try to load a different file type,
              the viewer will let you know that the format isn&apos;t recognized. Make sure your file
              has a .json extension and contains valid Lottie animation data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Step 3: Preview Your Animation
            </h2>
            <p>
              Once your file loads, the animation starts playing automatically. You&apos;ll see it
              rendered in the viewport at its original dimensions. The file name appears above the
              animation so you can confirm you&apos;ve loaded the correct file, which is especially
              helpful when you&apos;re working with multiple animation files during a project.
            </p>
            <p className="mt-3">
              The viewer uses the official lottie-web library from Airbnb to render animations. This
              means what you see in the viewer is exactly what your users will see when the animation
              runs in production. Colors, timing, easing curves, and layer compositions all render
              faithfully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Step 4: Adjust the Animation Size
            </h2>
            <p>
              Below the animation viewport, you&apos;ll find a size slider. Drag it left to shrink
              the animation or right to enlarge it. This lets you test how your animation looks at
              different sizes without editing the source file. The size adjustment happens in real
              time, so you can see the effect immediately.
            </p>
            <p className="mt-3">
              The original dimensions of the animation (width and height in pixels) are displayed
              alongside the viewport. This information is pulled directly from the JSON data and
              tells you the intended render size set by the animator. Knowing these dimensions helps
              you plan CSS layouts and container sizes in your application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Step 5: Check Animation Details
            </h2>
            <p>
              The viewer automatically extracts and displays key metadata from your animation file.
              You can see the original width and height, which tells you the aspect ratio the
              designer intended. This is valuable when you need to set up responsive containers or
              decide on breakpoints for different screen sizes.
            </p>
            <p className="mt-3">
              Pay attention to the animation&apos;s playback behavior. Lottie animations loop by
              default in the viewer, giving you a continuous preview. Watch for any visual glitches,
              unexpected layer ordering, or timing issues that might need fixing in your After
              Effects project before final export.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Step 6: Load a Different Animation
            </h2>
            <p>
              Want to preview another file? Simply drag a new JSON file onto the viewer or click the
              select button again. The previous animation is replaced immediately. There&apos;s no
              limit to how many files you can preview in a session. Since everything runs in your
              browser, switching between files is instant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Tips for Best Results</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-white">Optimize your JSON files:</strong> Large animation
                files with many layers can be slow to parse. Use tools like LottieFiles to optimize
                your animations before previewing. Removing unused layers and simplifying paths can
                dramatically reduce file size.
              </li>
              <li>
                <strong className="text-white">Test at multiple sizes:</strong> Use the size slider
                to check how your animation looks at both small and large dimensions. Animations
                that look great at 500px might lose detail at 50px, or reveal rough edges at
                1000px.
              </li>
              <li>
                <strong className="text-white">Validate your JSON:</strong> If an animation
                doesn&apos;t load, the JSON file might be malformed. Try opening it in a text editor
                to check for syntax errors, or run it through a JSON validator.
              </li>
              <li>
                <strong className="text-white">Check cross-browser rendering:</strong> Open the
                viewer in different browsers to see if your animation renders consistently. While
                lottie-web handles most cross-browser issues, complex animations with masks or
                expressions can sometimes behave differently.
              </li>
              <li>
                <strong className="text-white">Use the viewer during development:</strong> Keep the
                viewer open in a browser tab while you iterate on animations in After Effects. Each
                time you export a new version, drop it into the viewer for a quick check before
                integrating it into your codebase.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Privacy and Security</h2>
            <p>
              Your animation files never leave your device. JSON Animation Viewer processes
              everything locally using JavaScript in your browser. There are no server uploads, no
              analytics tracking your files, and no data stored anywhere. When you close the tab,
              your animation data is gone. This makes the viewer safe for previewing proprietary
              animations and confidential project assets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Supported Formats</h2>
            <p>
              JSON Animation Viewer supports standard Lottie JSON files exported from Adobe After
              Effects using the Bodymovin plugin. It also works with animations created in other
              tools that output the Lottie JSON format, such as Haiku Animator, LottieFiles editor,
              and Figma plugins that export to Lottie. The file must be a valid .json file
              containing Lottie animation data. DotLottie (.lottie) files are not currently
              supported.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Need Help?</h2>
            <p>
              If you run into any issues or have questions about using the viewer, check our{" "}
              <Link href="/faq" className="text-blue-400 hover:underline">
                FAQ page
              </Link>{" "}
              for answers to common questions. You can also visit our{" "}
              <a
                href="https://github.com/lbo728/json-animation-viewer/issues"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Issues page
              </a>{" "}
              to report bugs or request features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Related Resources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <Link href="/blog/what-is-lottie" className="text-blue-400 hover:underline">
                  What is Lottie Animation?
                </Link>{" "}
                — A complete guide to the Lottie format.
              </li>
              <li>
                <Link href="/blog/json-animation-tutorial" className="text-blue-400 hover:underline">
                  JSON Animation Tutorial
                </Link>{" "}
                — From After Effects to Web.
              </li>
              <li>
                <Link href="/about" className="text-blue-400 hover:underline">
                  About JSON Animation Viewer
                </Link>{" "}
                — Learn about our tool and technology.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
