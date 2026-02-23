import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import BlogPostJsonLd from '@/components/BlogPostJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata.jsonAnimationTutorial'});
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/blog/json-animation-tutorial`,
      languages: { en: '/en/blog/json-animation-tutorial', ko: '/ko/blog/json-animation-tutorial' },
    },
    openGraph: {
      type: "article",
      publishedTime: "2025-02-18T00:00:00Z",
    },
  };
}

export default async function JsonAnimationTutorialPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const tc = await getTranslations('common');

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Breadcrumb
          items={[
            { name: locale === "ko" ? "홈" : "Home", href: "/" },
            { name: locale === "ko" ? "블로그" : "Blog", href: "/blog" },
            { name: "JSON Animation Tutorial", href: "/blog/json-animation-tutorial" },
          ]}
        />
        <BlogPostJsonLd
          title="JSON Animation Tutorial: From After Effects to Web"
          description="A practical tutorial on creating Lottie JSON animations. Learn the complete workflow from designing in After Effects to exporting with Bodymovin and rendering on the web."
          datePublished="2025-02-18T00:00:00Z"
          dateModified="2025-02-18T00:00:00Z"
          slug="json-animation-tutorial"
          locale={locale}
        />

        <Link
          href="/blog"
          className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block transition-colors"
        >
          &larr; {tc("backToBlog")}
        </Link>

        <article>
          <time dateTime="2025-02-18" className="text-sm text-gray-500 block mb-4">February 18, 2025</time>
          <h1 className="text-4xl font-bold text-white mb-6">
            JSON Animation Tutorial: From After Effects to Web
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
            <section>
              <p>
                Getting a Lottie animation from a designer&apos;s After Effects project onto a live
                website involves several steps. Each step has its own set of tools, settings, and
                potential pitfalls. This tutorial walks through the entire pipeline: designing the
                animation, installing the export plugin, configuring export settings, and rendering
                the final JSON file in a web browser.
              </p>
              <p className="mt-3">
                By the end, you&apos;ll understand the complete workflow and be able to take any
                After Effects animation and display it on a webpage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Prerequisites
              </h2>
              <p>
                Before starting, make sure you have the following:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Adobe After Effects (any recent version works, CC 2019 or later recommended)</li>
                <li>A web browser (Chrome, Firefox, Safari, or Edge)</li>
                <li>A code editor (VS Code, Sublime Text, or similar)</li>
                <li>Basic familiarity with HTML and JavaScript</li>
                <li>Node.js installed if you plan to use a build tool or framework</li>
              </ul>
              <p className="mt-3">
                You don&apos;t need to be an After Effects expert. Even a simple shape animation is
                enough to follow along with this tutorial.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Step 1: Design Your Animation in After Effects
              </h2>
              <p>
                Open After Effects and create a new composition. For web animations, a composition
                size of 200x200 to 800x800 pixels works well. Set the frame rate to 24 or 30 fps.
                Keep the duration short, typically 1 to 5 seconds, since Lottie animations often
                loop continuously.
              </p>
              <p className="mt-3">
                Create your animation using shape layers. Shape layers translate cleanly to Lottie
                because they&apos;re vector-based. Draw rectangles, ellipses, paths, and polylines.
                Apply transforms like position, scale, rotation, and opacity. Add keyframes to
                animate these properties over time.
              </p>
              <p className="mt-3">
                A few design guidelines will save you trouble later:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong className="text-white">Stick to shape layers:</strong> They export
                  cleanly. Text layers work too, but convert them to shapes first for best results.
                </li>
                <li>
                  <strong className="text-white">Avoid effects:</strong> Most After Effects effects
                  (blur, glow, drop shadow) don&apos;t export to Lottie. Use shape-based techniques
                  instead.
                </li>
                <li>
                  <strong className="text-white">Keep it simple:</strong> Fewer layers means smaller
                  file sizes and better performance. Merge paths where possible.
                </li>
                <li>
                  <strong className="text-white">Use pre-compositions sparingly:</strong> They work
                  in Lottie but add complexity. Flatten your composition when you can.
                </li>
                <li>
                  <strong className="text-white">Name your layers:</strong> Descriptive layer names
                  make the exported JSON easier to debug and modify.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Step 2: Install the Bodymovin Plugin
              </h2>
              <p>
                Bodymovin is the bridge between After Effects and Lottie. It reads your composition
                and converts it into a JSON file that Lottie players can render.
              </p>
              <p className="mt-3">
                To install Bodymovin, open After Effects and go to Window &gt; Extensions &gt; Find
                Extensions on Exchange. Search for &quot;Bodymovin&quot; and install it. Alternatively,
                you can download it directly from the{" "}
                <a
                  href="https://github.com/airbnb/lottie-web"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lottie-web GitHub repository
                </a>{" "}
                and install it manually through the ZXP installer.
              </p>
              <p className="mt-3">
                After installation, access Bodymovin through Window &gt; Extensions &gt; Bodymovin.
                A panel opens showing your available compositions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Step 3: Configure Export Settings
              </h2>
              <p>
                In the Bodymovin panel, select the composition you want to export. Click the gear
                icon next to it to open the render settings. These settings control the output
                quality and file size:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-3">
                <li>
                  <strong className="text-white">Export Mode:</strong> Choose &quot;Standard&quot;
                  for a regular JSON file. The &quot;Demo&quot; option generates an HTML preview
                  file alongside the JSON, which can be useful for testing.
                </li>
                <li>
                  <strong className="text-white">Glyphs:</strong> If your animation contains text,
                  enable this to include font data. For best compatibility, convert text to shapes
                  before exporting.
                </li>
                <li>
                  <strong className="text-white">Assets:</strong> If your animation uses images,
                  you can embed them as base64 data inside the JSON or export them as separate
                  files. Embedding increases JSON size but makes the animation self-contained.
                </li>
                <li>
                  <strong className="text-white">Segments:</strong> You can split the animation into
                  named segments for programmatic control. This is useful when a single composition
                  contains multiple animation states (like idle, hover, and active).
                </li>
                <li>
                  <strong className="text-white">Extra Compositions:</strong> Enable this if your
                  main composition references other compositions that should be included in the
                  export.
                </li>
              </ul>
              <p className="mt-3">
                For most web animations, the default settings work fine. Set the destination folder,
                give your file a descriptive name, and click Render.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Step 4: Validate the Exported JSON
              </h2>
              <p>
                Before integrating the animation into your project, validate it. Open the exported
                JSON file and check that it&apos;s well-formed. You can use our{" "}
                <Link href="/" className="text-blue-400 hover:underline">
                  JSON Animation Viewer
                </Link>{" "}
                to preview the animation instantly. Drag the file onto the viewer and confirm that
                it plays correctly, loops smoothly, and matches what you see in After Effects.
              </p>
              <p className="mt-3">
                Common issues to watch for during validation:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Missing layers or shapes that didn&apos;t export</li>
                <li>Incorrect colors (especially if you used expressions for color values)</li>
                <li>Timing differences between After Effects and the Lottie render</li>
                <li>Blank areas where external image assets should appear</li>
                <li>Unexpectedly large file sizes (check for embedded raster images)</li>
              </ul>
              <p className="mt-3">
                If something looks wrong, go back to After Effects, adjust the problematic layers,
                and re-export. The iteration cycle is fast since Bodymovin exports take only a few
                seconds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Step 5: Add the Animation to Your Website
              </h2>
              <p>
                Now it&apos;s time to render the animation on a webpage. The standard approach uses
                the lottie-web library. Install it via npm:
              </p>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm mt-3">
                <code className="text-green-400">npm install lottie-web</code>
              </pre>
              <p className="mt-3">
                Create an HTML container for the animation and initialize the player in JavaScript:
              </p>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm mt-3">
                <code className="text-green-400">{`import lottie from 'lottie-web';

const container = document.getElementById('animation');

lottie.loadAnimation({
  container: container,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/animations/my-animation.json'
});`}</code>
              </pre>
              <p className="mt-3">
                The &quot;renderer&quot; option controls how the animation is drawn. SVG is the
                default and works well for most animations. Canvas rendering can be faster for
                complex animations with many elements. HTML rendering uses DOM elements and is the
                lightest option but supports fewer features.
              </p>
              <p className="mt-3">
                Place your JSON file in your project&apos;s public or static assets directory so the
                browser can fetch it. The &quot;path&quot; option points to the file&apos;s URL
                relative to your site root.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Step 6: Control Playback Programmatically
              </h2>
              <p>
                One of Lottie&apos;s biggest advantages is programmatic control. The loadAnimation
                function returns an animation instance with methods you can call:
              </p>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm mt-3">
                <code className="text-green-400">{`const anim = lottie.loadAnimation({ ... });

// Playback controls
anim.play();
anim.pause();
anim.stop();

// Speed control (1 = normal, 2 = double speed)
anim.setSpeed(1.5);

// Direction (1 = forward, -1 = reverse)
anim.setDirection(-1);

// Jump to a specific frame
anim.goToAndStop(30, true);

// Play a specific segment (frames 10 to 40)
anim.playSegments([10, 40], true);`}</code>
              </pre>
              <p className="mt-3">
                You can also listen for events. The &quot;complete&quot; event fires when a
                non-looping animation finishes. The &quot;loopComplete&quot; event fires at the end
                of each loop cycle. The &quot;enterFrame&quot; event fires on every frame, giving
                you fine-grained control for syncing animations with other UI elements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Using Lottie with React
              </h2>
              <p>
                If you&apos;re building with React, several wrapper libraries simplify integration.
                The lottie-react package provides a declarative component:
              </p>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm mt-3">
                <code className="text-green-400">{`import Lottie from 'lottie-react';
import animationData from './animation.json';

function MyComponent() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      style={{ width: 300, height: 300 }}
    />
  );
}`}</code>
              </pre>
              <p className="mt-3">
                The @lottiefiles/react-lottie-player package is another popular option with
                additional features like built-in controls and theming support. Both libraries wrap
                lottie-web internally, so the rendering quality is identical.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Optimizing for Production
              </h2>
              <p>
                Before deploying, optimize your animation for the best user experience:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-3">
                <li>
                  <strong className="text-white">Minimize the JSON:</strong> Run the file through a
                  JSON minifier to strip whitespace and reduce file size. Tools like LottieFiles
                  Optimizer can also remove unnecessary data without affecting the animation.
                </li>
                <li>
                  <strong className="text-white">Enable gzip compression:</strong> Configure your
                  web server to serve JSON files with gzip or brotli compression. This typically
                  reduces transfer size by 60 to 80 percent.
                </li>
                <li>
                  <strong className="text-white">Lazy load animations:</strong> If the animation is
                  below the fold, load it only when the user scrolls near it. Use Intersection
                  Observer to trigger the load.
                </li>
                <li>
                  <strong className="text-white">Choose the right renderer:</strong> SVG is best for
                  simple animations. Canvas handles complex animations with many elements more
                  efficiently. Test both and measure performance on target devices.
                </li>
                <li>
                  <strong className="text-white">Respect reduced motion:</strong> Check the
                  prefers-reduced-motion media query and either pause the animation or show a static
                  frame for users who prefer less motion.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Troubleshooting Common Issues
              </h2>
              <p>
                Even with a clean workflow, you might run into problems. Here are the most frequent
                issues and their solutions:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-3">
                <li>
                  <strong className="text-white">Animation doesn&apos;t play:</strong> Check the
                  browser console for errors. The most common cause is an incorrect file path. Make
                  sure the JSON file is accessible at the URL you specified.
                </li>
                <li>
                  <strong className="text-white">Missing elements:</strong> Some After Effects
                  features aren&apos;t supported by Bodymovin. Check the Bodymovin compatibility
                  list and replace unsupported features with shape-based alternatives.
                </li>
                <li>
                  <strong className="text-white">Performance issues:</strong> If the animation
                  stutters, try switching from SVG to Canvas renderer. Also check if the animation
                  has too many layers or overly complex paths that could be simplified.
                </li>
                <li>
                  <strong className="text-white">Large file size:</strong> Look for embedded raster
                  images in the JSON. Remove them and use vector shapes instead. Also check for
                  unnecessary keyframes that can be removed without affecting the animation.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Next Steps
              </h2>
              <p>
                You now have the complete workflow for getting Lottie animations from After Effects
                to the web. To go deeper, explore our other guides:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <Link href="/blog/what-is-lottie" className="text-blue-400 hover:underline">
                    What is Lottie Animation? A Complete Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog/lottie-vs-gif" className="text-blue-400 hover:underline">
                    Lottie vs GIF: Why Lottie Animations Are Better
                  </Link>
                </li>
                <li>
                  <Link href="/blog/best-lottie-resources" className="text-blue-400 hover:underline">
                    Best Lottie Animation Resources for Developers
                  </Link>
                </li>
              </ul>
              <p className="mt-3">
                And don&apos;t forget to use our{" "}
                <Link href="/" className="text-blue-400 hover:underline">
                  JSON Animation Viewer
                </Link>{" "}
                to quickly preview any Lottie file during your development process.
              </p>
            </section>
          </div>
        </article>

        <aside className="mt-12 pt-8 border-t border-gray-700">
          <h2 className="text-lg font-semibold text-white mb-4">Related Posts</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/what-is-lottie" className="text-blue-400 hover:text-blue-300 transition-colors">
                What is Lottie Animation? A Complete Guide
              </Link>
            </li>
            <li>
              <Link href="/blog/how-to-create-lottie-animation" className="text-blue-400 hover:text-blue-300 transition-colors">
                How to Create Lottie Animations: Step-by-Step
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
