import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import BlogPostJsonLd from '@/components/BlogPostJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata.howToCreateLottie'});
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === 'en' ? '/blog/how-to-create-lottie-animation' : `/${locale}/blog/how-to-create-lottie-animation`,
      languages: { en: '/blog/how-to-create-lottie-animation', ko: '/ko/blog/how-to-create-lottie-animation' },
    },
    openGraph: {
      type: "article",
      publishedTime: "2025-02-10T00:00:00Z",
    },
  };
}

export default async function HowToCreateLottieAnimationPage({params}: {params: Promise<{locale: string}>}) {
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
            { name: "How to Create Lottie Animations", href: "/blog/how-to-create-lottie-animation" },
          ]}
        />
        <BlogPostJsonLd
          title="How to Create Lottie Animations: Step-by-Step"
          description="A beginner-friendly guide to creating Lottie animations from scratch. Learn design principles, tool setup, animation techniques, export settings, and web implementation."
          datePublished="2025-02-10T00:00:00Z"
          dateModified="2025-02-10T00:00:00Z"
          slug="how-to-create-lottie-animation"
          locale={locale}
        />

        <Link
          href="/blog"
          className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block transition-colors"
        >
          &larr; {tc("backToBlog")}
        </Link>

        <article>
          <time dateTime="2025-02-10" className="text-sm text-gray-500 block mb-4">February 10, 2025</time>
          <h1 className="text-4xl font-bold text-white mb-6">
            How to Create Lottie Animations: Step-by-Step
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
            <section>
              <p>
                Creating your first Lottie animation can feel intimidating if you&apos;ve never
                worked with motion design tools before. The good news is that you don&apos;t need to
                be a professional animator to create effective Lottie animations. Simple shapes,
                clean movements, and thoughtful timing go a long way.
              </p>
              <p className="mt-3">
                This guide takes you from zero to a working Lottie animation. We&apos;ll cover the
                design principles that make animations effective, walk through the tool setup, build
                a simple animation step by step, export it as a Lottie JSON file, and integrate it
                into a web page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Design Principles for Lottie Animations
              </h2>
              <p>
                Before opening any software, it helps to understand what makes a good Lottie
                animation. These principles apply whether you&apos;re creating a loading spinner or
                an elaborate onboarding illustration.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-3">
                <li>
                  <strong className="text-white">Keep it purposeful:</strong> Every animation should
                  serve a function. Loading indicators tell users something is happening. Success
                  animations confirm an action completed. Transition animations guide attention from
                  one state to another. If an animation doesn&apos;t serve a clear purpose, it&apos;s
                  visual noise.
                </li>
                <li>
                  <strong className="text-white">Simplicity wins:</strong> The best UI animations
                  are subtle. A gentle fade, a smooth slide, a soft bounce. Overly complex
                  animations distract from the content and slow down the interface. They also produce
                  larger JSON files and consume more CPU during rendering.
                </li>
                <li>
                  <strong className="text-white">Timing matters more than complexity:</strong> A
                  simple circle that scales up with the right easing curve feels more polished than
                  a complex illustration with linear timing. Spend time on your easing curves. Ease
                  in for elements entering the screen. Ease out for elements leaving. Use ease
                  in-out for elements that move within the viewport.
                </li>
                <li>
                  <strong className="text-white">Design for loops:</strong> Most Lottie animations
                  loop continuously. Make sure the last frame transitions smoothly back to the first
                  frame. Abrupt jumps between the end and start of a loop are jarring and
                  unprofessional.
                </li>
                <li>
                  <strong className="text-white">Think about file size:</strong> Every layer, path,
                  and keyframe adds to the JSON file size. Use the minimum number of layers needed.
                  Simplify complex paths. Remove keyframes that don&apos;t contribute to the visual
                  result.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Choosing Your Tool
              </h2>
              <p>
                You have several options for creating Lottie animations, each suited to different
                skill levels and needs:
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                Adobe After Effects (Professional)
              </h3>
              <p>
                After Effects is the most powerful option. It gives you complete control over every
                aspect of the animation: complex path morphing, masks, mattes, expressions, and
                multi-layer compositions. The learning curve is steep, but the creative possibilities
                are virtually unlimited. You&apos;ll need an Adobe Creative Cloud subscription.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                LottieFiles Editor (Beginner-Friendly)
              </h3>
              <p>
                The LottieFiles browser-based editor is the easiest way to start. It provides a
                visual interface for creating simple animations without installing any software. You
                can create shape animations, color transitions, and basic motion paths. The editor
                exports directly to Lottie JSON format. It&apos;s free and works in any modern
                browser.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                Figma + Plugins (Designer-Friendly)
              </h3>
              <p>
                If you already work in Figma, several plugins can convert your designs to Lottie
                animations. The LottieFiles Figma plugin handles basic transitions between frames.
                The Motion plugin offers more control with keyframe editing. This approach works well
                for simple animations where the design already exists in Figma.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                Rive (Interactive Animations)
              </h3>
              <p>
                Rive is a dedicated animation tool with a focus on interactive, state-based
                animations. It has its own runtime format but can export to Lottie JSON for standard
                animations. The interface is more approachable than After Effects, and the free tier
                is generous for individual developers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Building Your First Animation in After Effects
              </h2>
              <p>
                Let&apos;s walk through creating a simple loading animation: a circle that pulses
                (scales up and down) with a smooth easing curve. This is a practical animation
                you&apos;d actually use in a real project.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                1. Create a New Composition
              </h3>
              <p>
                Open After Effects and create a new composition (Composition &gt; New Composition).
                Set the width and height to 200x200 pixels. Set the frame rate to 30 fps. Set the
                duration to 1 second (1:00). This gives you a compact, loopable animation canvas.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                2. Draw a Circle
              </h3>
              <p>
                Select the Ellipse Tool from the toolbar. Hold Shift and draw a circle in the center
                of the composition. In the layer properties, set the size to 100x100 pixels and
                center it at position 100, 100 (the center of your 200x200 canvas). Set the fill
                color to your brand color and remove the stroke.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                3. Add Scale Keyframes
              </h3>
              <p>
                With the circle layer selected, press S to reveal the Scale property. Move the
                playhead to frame 0 and click the stopwatch icon next to Scale to create a keyframe
                at 100%. Move the playhead to frame 15 (the halfway point of your 1-second
                animation) and change the scale to 120%. Move to frame 30 (the end) and set scale
                back to 100%.
              </p>
              <p className="mt-3">
                You now have a circle that grows to 120% and shrinks back to 100% over one second.
                But the motion feels mechanical because it uses linear interpolation.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                4. Apply Easing
              </h3>
              <p>
                Select all three keyframes (click the first, then Shift-click the last). Right-click
                and choose Keyframe Assistant &gt; Easy Ease. This applies a smooth acceleration and
                deceleration to the motion. The circle now pulses with a natural, organic feel
                instead of a robotic linear movement.
              </p>
              <p className="mt-3">
                For even more control, open the Graph Editor (click the graph icon in the timeline).
                Here you can adjust the speed curves manually. Pull the handles to create a more
                pronounced ease-in or ease-out. Experiment until the motion feels right.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                5. Add Opacity Animation (Optional)
              </h3>
              <p>
                To make the pulse more visually interesting, add a subtle opacity change. Press T to
                reveal the Opacity property. Set keyframes at frame 0 (80% opacity), frame 15 (100%
                opacity), and frame 30 (80% opacity). Apply Easy Ease to these keyframes too. The
                circle now brightens as it grows and dims as it shrinks, creating a breathing effect.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                6. Preview the Loop
              </h3>
              <p>
                Press the spacebar to preview the animation. Watch it loop several times. Check that
                the transition from the last frame back to the first frame is smooth. Since we set
                the same values at frame 0 and frame 30, the loop should be seamless. If you notice
                a slight jump, adjust the keyframe values until the loop is perfectly smooth.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Exporting with Bodymovin
              </h2>
              <p>
                With your animation complete, it&apos;s time to export it as a Lottie JSON file.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-3">
                <li>
                  Open the Bodymovin panel: Window &gt; Extensions &gt; Bodymovin
                </li>
                <li>
                  Select your composition from the list
                </li>
                <li>
                  Click the gear icon to open render settings
                </li>
                <li>
                  Set the export mode to &quot;Standard&quot;
                </li>
                <li>
                  Choose a destination folder and filename (e.g., &quot;pulse-loader.json&quot;)
                </li>
                <li>
                  Click Render
                </li>
              </ul>
              <p className="mt-3">
                The export takes a few seconds. Bodymovin creates a JSON file containing all the
                animation data. For our simple pulse animation, the file should be around 2 to 5 KB.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Validating Your Animation
              </h2>
              <p>
                Before integrating the animation into your project, validate it. Open our{" "}
                <Link href="/" className="text-blue-400 hover:underline">
                  JSON Animation Viewer
                </Link>{" "}
                and drag your exported JSON file onto the viewer. Check that:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>The animation plays correctly and matches what you see in After Effects</li>
                <li>The loop is smooth with no visible jump at the restart point</li>
                <li>Colors are accurate</li>
                <li>The dimensions match your composition size (200x200 in our example)</li>
                <li>The animation speed feels right</li>
              </ul>
              <p className="mt-3">
                If anything looks off, go back to After Effects, make adjustments, and re-export.
                This iteration cycle is fast. Bodymovin exports take only a few seconds, and the
                viewer shows results instantly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Implementing on the Web
              </h2>
              <p>
                With a validated JSON file, you&apos;re ready to add the animation to your website.
                The simplest approach uses the lottie-web library:
              </p>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm mt-3">
                <code className="text-green-400">npm install lottie-web</code>
              </pre>
              <p className="mt-3">
                Create a container element and initialize the animation:
              </p>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm mt-3">
                <code className="text-green-400">{`import lottie from 'lottie-web';

const animation = lottie.loadAnimation({
  container: document.getElementById('loader'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/animations/pulse-loader.json'
});`}</code>
              </pre>
              <p className="mt-3">
                Place the JSON file in your public directory so the browser can fetch it. The
                animation starts playing automatically when the page loads. The SVG renderer produces
                crisp output at any size, and the animation loops continuously until you stop it
                programmatically.
              </p>
              <p className="mt-3">
                For React projects, the lottie-react package provides a cleaner integration:
              </p>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm mt-3">
                <code className="text-green-400">{`import Lottie from 'lottie-react';
import pulseLoader from './pulse-loader.json';

function LoadingSpinner() {
  return (
    <Lottie
      animationData={pulseLoader}
      loop={true}
      style={{ width: 48, height: 48 }}
    />
  );
}`}</code>
              </pre>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Optimizing Your Animation
              </h2>
              <p>
                Even a well-designed animation can benefit from optimization. Here are techniques to
                reduce file size and improve performance:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-3">
                <li>
                  <strong className="text-white">Remove unnecessary precision:</strong> Bodymovin
                  exports coordinates with many decimal places. Rounding to 2 or 3 decimal places
                  rarely affects visual quality but can reduce file size by 10 to 20 percent.
                </li>
                <li>
                  <strong className="text-white">Simplify paths:</strong> Complex vector paths with
                  many anchor points produce larger JSON. In After Effects, use the Simplify
                  Keyframes script or manually reduce anchor points on paths that don&apos;t need
                  fine detail.
                </li>
                <li>
                  <strong className="text-white">Merge layers:</strong> If multiple layers move
                  together as a unit, merge them into a single shape layer. Fewer layers means less
                  JSON data and faster rendering.
                </li>
                <li>
                  <strong className="text-white">Use the LottieFiles Optimizer:</strong> Upload your
                  JSON file to the LottieFiles optimizer tool. It automatically strips unnecessary
                  data and simplifies the file structure. Typical reductions range from 20 to 60
                  percent.
                </li>
                <li>
                  <strong className="text-white">Enable server compression:</strong> Configure your
                  web server to serve JSON files with gzip or brotli compression. This reduces
                  transfer size by 60 to 80 percent on top of any file-level optimization.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Common Mistakes to Avoid
              </h2>
              <p>
                Learning from others&apos; mistakes saves time. Here are the most common pitfalls
                when creating Lottie animations:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-3">
                <li>
                  <strong className="text-white">Using After Effects effects:</strong> Blur, glow,
                  drop shadow, and other effects don&apos;t export to Lottie. Recreate these looks
                  using shape layers and opacity instead.
                </li>
                <li>
                  <strong className="text-white">Embedding raster images:</strong> Adding PNG or JPG
                  images to your composition defeats the purpose of Lottie. The images get embedded
                  as base64 data, inflating the JSON file and losing the vector advantage. Use
                  vector shapes exclusively.
                </li>
                <li>
                  <strong className="text-white">Ignoring the loop point:</strong> If your animation
                  loops, the transition from the last frame to the first must be seamless. Test the
                  loop by watching it play for at least 10 cycles.
                </li>
                <li>
                  <strong className="text-white">Over-animating:</strong> Not everything needs to
                  move. Subtle animations are more effective than busy ones. A gentle pulse is better
                  than a spinning, bouncing, color-changing extravaganza.
                </li>
                <li>
                  <strong className="text-white">Skipping validation:</strong> Always preview your
                  exported JSON in a Lottie player before integrating it. What looks right in After
                  Effects might render differently in lottie-web due to unsupported features.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Beyond the Basics
              </h2>
              <p>
                Once you&apos;re comfortable with simple animations, explore more advanced
                techniques:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong className="text-white">Path morphing:</strong> Animate one shape
                  transforming into another. Great for icon transitions (hamburger to close, play to
                  pause).
                </li>
                <li>
                  <strong className="text-white">Trim paths:</strong> Animate the drawing of a path
                  from start to end. Perfect for signature animations, line art reveals, and
                  progress indicators.
                </li>
                <li>
                  <strong className="text-white">Masks and mattes:</strong> Use masks to reveal or
                  hide parts of an animation. Useful for wipe transitions and spotlight effects.
                </li>
                <li>
                  <strong className="text-white">Parenting:</strong> Link layers so child layers
                  inherit the parent&apos;s transforms. This creates complex hierarchical animations
                  with minimal keyframes.
                </li>
                <li>
                  <strong className="text-white">Expressions:</strong> Use JavaScript-like
                  expressions in After Effects to create procedural animations. Note that not all
                  expressions export to Lottie, so test thoroughly.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Next Steps
              </h2>
              <p>
                You now have the knowledge to create, export, validate, and implement Lottie
                animations. Start with simple animations and gradually increase complexity as you
                get comfortable with the tools and workflow.
              </p>
              <p className="mt-3">
                For more resources, check out our{" "}
                <Link
                  href="/blog/best-lottie-resources"
                  className="text-blue-400 hover:underline"
                >
                  curated list of Lottie resources
                </Link>{" "}
                for free animations, tools, and learning materials. Read our{" "}
                <Link
                  href="/blog/json-animation-tutorial"
                  className="text-blue-400 hover:underline"
                >
                  JSON animation tutorial
                </Link>{" "}
                for a deeper dive into the export workflow. And use our{" "}
                <Link href="/" className="text-blue-400 hover:underline">
                  JSON Animation Viewer
                </Link>{" "}
                to preview your animations during development.
              </p>
            </section>
          </div>
        </article>

        <aside className="mt-12 pt-8 border-t border-gray-700">
          <h2 className="text-lg font-semibold text-white mb-4">Related Posts</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/json-animation-tutorial" className="text-blue-400 hover:text-blue-300 transition-colors">
                JSON Animation Tutorial: From After Effects to Web
              </Link>
            </li>
            <li>
              <Link href="/blog/best-lottie-resources" className="text-blue-400 hover:text-blue-300 transition-colors">
                Best Lottie Animation Resources for Developers
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
