import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQ - JSON Animation Viewer",
  description:
    "Frequently asked questions about JSON Animation Viewer, Lottie animations, JSON animation files, and how to preview them in your browser.",
  alternates: {
    canonical: "/faq",
  },
};


const faqItems = [
  {
    question: "What is JSON Animation Viewer?",
    answer: "JSON Animation Viewer is a free, browser-based tool that lets you preview Lottie JSON animation files instantly. You can drag and drop a .json file onto the viewer or click to select one from your device. No installation, no sign-up, and no file uploads to any server."
  },
  {
    question: "What is a Lottie animation?",
    answer: "Lottie is an open-source animation format originally developed by Airbnb. Animations are created in tools like Adobe After Effects and exported as lightweight JSON files using the Bodymovin plugin."
  },
  {
    question: "Is my animation data safe?",
    answer: "Yes, completely. JSON Animation Viewer processes your files entirely within your browser using client-side JavaScript. Your animation files are never uploaded to any server."
  },
  {
    question: "What file formats are supported?",
    answer: "JSON Animation Viewer supports standard Lottie JSON files with the .json extension exported from Adobe After Effects using the Bodymovin plugin, LottieFiles, Haiku Animator, and Figma plugins."
  },
  {
    question: "Is JSON Animation Viewer free?",
    answer: "Yes, completely free with no hidden costs. There are no premium tiers, no usage limits, and no feature gates."
  },
];

function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FaqJsonLd />
      <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block transition-colors"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
          <p>
            Got questions about JSON Animation Viewer or Lottie animations in general? Here are
            answers to the most common questions we receive.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              What is JSON Animation Viewer?
            </h2>
            <p>
              JSON Animation Viewer is a free, browser-based tool that lets you preview Lottie JSON
              animation files instantly. You can drag and drop a .json file onto the viewer or click
              to select one from your device. The animation plays immediately, and you can adjust its
              size using a built-in slider. No installation, no sign-up, and no file uploads to any
              server. Everything runs locally in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              What is a Lottie animation?
            </h2>
            <p>
              Lottie is an open-source animation format originally developed by Airbnb. Animations
              are created in tools like Adobe After Effects and exported as lightweight JSON files
              using the Bodymovin plugin. These JSON files describe every frame, layer, shape, and
              keyframe of the animation in a structured data format. Lottie players (like lottie-web
              for browsers or lottie-ios/lottie-android for mobile) read this data and render the
              animation in real time. The result is smooth, scalable, vector-based animation that
              looks crisp on any screen size and loads much faster than traditional GIFs or video
              files.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Is my animation data safe?
            </h2>
            <p>
              Yes, completely. JSON Animation Viewer processes your files entirely within your
              browser using client-side JavaScript. Your animation files are never uploaded to any
              server. There&apos;s no backend, no database, and no cloud storage involved. When you
              close the browser tab, your animation data is gone from memory. This makes the tool
              safe for previewing proprietary animations, client work, and confidential design
              assets. You can verify this yourself by checking the network tab in your browser&apos;s
              developer tools while using the viewer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              What file formats are supported?
            </h2>
            <p>
              JSON Animation Viewer supports standard Lottie JSON files with the .json extension.
              These are typically exported from Adobe After Effects using the Bodymovin plugin, but
              any tool that outputs valid Lottie JSON data will work. This includes animations from
              LottieFiles, Haiku Animator, and various Figma-to-Lottie plugins. The viewer does not
              currently support dotLottie (.lottie) files, which are a compressed container format.
              If you have a .lottie file, you&apos;ll need to extract the JSON from it first using a
              tool like the LottieFiles converter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Why isn&apos;t my animation loading?
            </h2>
            <p>
              There are a few common reasons an animation might fail to load:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong className="text-white">Invalid JSON:</strong> The file might contain syntax
                errors. Open it in a text editor and check for missing commas, brackets, or
                malformed data. Running the file through a JSON validator can help identify issues.
              </li>
              <li>
                <strong className="text-white">Not a Lottie file:</strong> Not every .json file is a
                Lottie animation. The file needs to contain Lottie-specific data structures (layers,
                assets, animation properties). A regular JSON configuration file won&apos;t render as
                an animation.
              </li>
              <li>
                <strong className="text-white">External assets:</strong> Some Lottie animations
                reference external image assets that aren&apos;t embedded in the JSON file. If the
                animation was exported without embedding images, those assets won&apos;t be available
                in the viewer and parts of the animation may appear blank.
              </li>
              <li>
                <strong className="text-white">Unsupported features:</strong> Certain After Effects
                features don&apos;t translate well to Lottie. Complex expressions, 3D layers, and
                some blend modes may not render correctly in any Lottie player, including this
                viewer.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Can I use this on my phone or tablet?
            </h2>
            <p>
              Yes. JSON Animation Viewer is fully responsive and works on mobile devices and tablets.
              The interface adapts to smaller screens, and you can tap the file select button to
              choose a JSON file from your device&apos;s storage. Drag and drop also works on
              devices that support it. Performance depends on your device&apos;s processing power,
              but most modern smartphones handle Lottie animations smoothly since the format is
              designed to be lightweight.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              How do I create a Lottie animation?
            </h2>
            <p>
              The most common workflow starts in Adobe After Effects. Design your animation using
              shapes, paths, and keyframes, then install the Bodymovin plugin to export it as a
              Lottie JSON file. There are also alternative tools: LottieFiles has a browser-based
              editor, Haiku Animator provides a standalone application, and several Figma plugins can
              convert designs to Lottie format. For a detailed walkthrough, check out our blog post
              on{" "}
              <Link
                href="/blog/how-to-create-lottie-animation"
                className="text-blue-400 hover:underline"
              >
                how to create Lottie animations step by step
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              What are the advantages of Lottie over GIF?
            </h2>
            <p>
              Lottie animations outperform GIFs in almost every measurable way. File sizes are
              typically 5 to 10 times smaller because Lottie uses vector data instead of rasterized
              frames. Lottie animations scale to any resolution without losing quality, while GIFs
              become pixelated when enlarged. You can control Lottie animations programmatically
              (play, pause, reverse, change speed, respond to user interactions), which isn&apos;t
              possible with GIFs. Lottie also supports transparency without the file size penalty
              that comes with transparent GIFs. The only area where GIFs still have an edge is
              universal support: GIFs work everywhere without any library, while Lottie requires a
              player library. Read our detailed{" "}
              <Link href="/blog/lottie-vs-gif" className="text-blue-400 hover:underline">
                Lottie vs GIF comparison
              </Link>{" "}
              for more.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Is JSON Animation Viewer free?
            </h2>
            <p>
              Yes, completely free with no hidden costs. There are no premium tiers, no usage limits,
              and no feature gates. You can preview as many animations as you want, as often as you
              want. The project is also open source, so you can inspect the code, contribute
              improvements, or fork it for your own use. Visit our{" "}
              <a
                href="https://github.com/lbo728/json-animation-viewer"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub repository
              </a>{" "}
              to see the source code.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Can I embed the viewer in my own website?
            </h2>
            <p>
              JSON Animation Viewer is an open-source project licensed under the MIT License. You&apos;re
              free to fork the repository and adapt it for your own needs. However, the viewer
              isn&apos;t designed as an embeddable widget. If you want to display Lottie animations
              on your own website, consider using the lottie-web library directly. It gives you full
              control over playback, styling, and interaction. For React projects, libraries like
              lottie-react or @lottiefiles/react-lottie-player provide convenient component wrappers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Where can I find free Lottie animations?
            </h2>
            <p>
              Several platforms offer free Lottie animations for personal and commercial use.{" "}
              <a
                href="https://lottiefiles.com"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LottieFiles
              </a>{" "}
              is the largest marketplace with thousands of free animations. IconScout, Lordicon, and
              useAnimations also provide free Lottie files. Always check the license terms before
              using an animation in a commercial project. Some animations require attribution, while
              others are fully free under permissive licenses. For a curated list, see our blog post
              on{" "}
              <Link
                href="/blog/best-lottie-resources"
                className="text-blue-400 hover:underline"
              >
                the best Lottie animation resources for developers
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Still have questions?
            </h2>
            <p>
              If your question isn&apos;t answered here, feel free to open an issue on our{" "}
              <a
                href="https://github.com/lbo728/json-animation-viewer/issues"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Issues page
              </a>
              . We read every issue and respond as quickly as we can. You can also browse existing
              issues to see if someone else has already asked the same question.
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}
