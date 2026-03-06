import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import BlogPostJsonLd from '@/components/BlogPostJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata.bestLottieResources'});
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === 'en' ? '/blog/best-lottie-resources' : `/${locale}/blog/best-lottie-resources`,
      languages: { en: '/blog/best-lottie-resources', ko: '/ko/blog/best-lottie-resources' },
    },
    openGraph: {
      type: "article",
      publishedTime: "2025-02-12T00:00:00Z",
    },
  };
}

export default async function BestLottieResourcesPage({params}: {params: Promise<{locale: string}>}) {
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
            { name: "Best Lottie Resources", href: "/blog/best-lottie-resources" },
          ]}
        />
        <BlogPostJsonLd
          title="Best Lottie Animation Resources for Developers"
          description="A curated list of the best Lottie animation resources: free animation libraries, design tools, player libraries, optimization tools, and community platforms for developers."
          datePublished="2025-02-12T00:00:00Z"
          dateModified="2025-02-12T00:00:00Z"
          slug="best-lottie-resources"
          locale={locale}
        />

        <Link
          href="/blog"
          className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block transition-colors"
        >
          &larr; {tc("backToBlog")}
        </Link>

        <article>
          <time dateTime="2025-02-12" className="text-sm text-gray-500 block mb-4">February 12, 2025</time>
          <h1 className="text-4xl font-bold text-white mb-6">
            Best Lottie Animation Resources for Developers
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
            <section>
              <p>
                Building a project that needs animations? You don&apos;t have to create everything
                from scratch. The Lottie ecosystem has grown into a rich collection of free animation
                libraries, creation tools, player libraries, and community platforms. This guide
                covers the best resources available, organized by what you need them for.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Free Animation Libraries
              </h2>
              <p>
                These platforms offer ready-to-use Lottie animations that you can download and drop
                into your project. Most provide free tiers with generous selections.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">LottieFiles</h3>
              <p>
                <a
                  href="https://lottiefiles.com"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LottieFiles
                </a>{" "}
                is the largest Lottie animation marketplace and community. It hosts over 100,000
                animations created by designers worldwide. The free tier gives you access to
                thousands of animations for personal and commercial use. Each animation has a preview
                player, customizable colors, and multiple download formats (JSON, dotLottie, GIF).
              </p>
              <p className="mt-3">
                What makes LottieFiles especially useful is its built-in editor. You can change
                colors, adjust speed, and trim animations directly in the browser before downloading.
                This saves time when you need an animation that almost fits your design but needs
                minor tweaks. The platform also provides an optimization tool that reduces file sizes
                without visible quality loss.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">IconScout</h3>
              <p>
                <a
                  href="https://iconscout.com/lottie-animations"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IconScout
                </a>{" "}
                offers a curated collection of Lottie animations alongside their icon and
                illustration library. Their animations tend to be polished and consistent in style,
                which is helpful when you need multiple animations that look like they belong
                together. The free selection is smaller than LottieFiles but the quality is
                consistently high.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Lordicon</h3>
              <p>
                <a
                  href="https://lordicon.com"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lordicon
                </a>{" "}
                specializes in animated icons. Their library contains over 1,500 animated icons in a
                consistent flat design style. Each icon comes with multiple animation triggers (hover,
                click, loop, morph) and customizable colors. The free tier includes a generous
                selection, and the animations are specifically designed for UI use cases like
                navigation, actions, and status indicators.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">useAnimations</h3>
              <p>
                <a
                  href="https://useanimations.com"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  useAnimations
                </a>{" "}
                is a collection of micro-animations built specifically for UI interactions. Think
                hamburger menu toggles, loading states, social media icons, and action buttons. All
                animations are free and open source under the MIT license. The library provides React
                and Vue components for easy integration, plus raw Lottie JSON files for other
                frameworks.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">LottieFlow</h3>
              <p>
                LottieFlow offers a smaller but carefully curated set of free Lottie animations
                focused on common web patterns: hero sections, feature highlights, testimonials, and
                call-to-action elements. The animations are designed to work well on landing pages
                and marketing sites. Each animation comes with suggested implementation patterns and
                responsive sizing guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Creation and Design Tools
              </h2>
              <p>
                When you need custom animations that match your brand, these tools help you create
                them from scratch or modify existing ones.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                Adobe After Effects + Bodymovin
              </h3>
              <p>
                The original and most powerful Lottie creation workflow. After Effects gives you full
                control over every aspect of the animation: complex path animations, masks, mattes,
                expressions, and multi-layer compositions. The Bodymovin plugin exports your work as
                Lottie JSON. This combination handles the widest range of animation complexity, but
                it requires an Adobe Creative Cloud subscription and After Effects expertise.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">LottieFiles Editor</h3>
              <p>
                The LottieFiles platform includes a browser-based animation editor. It&apos;s not as
                powerful as After Effects, but it handles simple animations well: shape morphing,
                color transitions, basic path animations, and text effects. The editor is free to use
                and requires no software installation. It&apos;s a good starting point for developers
                who want to create simple animations without learning After Effects.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Haiku Animator</h3>
              <p>
                Haiku Animator (now part of Diez) is a standalone desktop application for creating
                animations that export to multiple formats including Lottie. Its timeline-based
                interface is more approachable than After Effects for developers who are comfortable
                with code but new to motion design. Haiku also supports importing designs from
                Figma and Sketch.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Figma Plugins</h3>
              <p>
                Several Figma plugins can convert designs and simple animations to Lottie format.
                LottieFiles has an official Figma plugin that exports frames and simple transitions.
                The Motion plugin supports more complex animations with keyframe control. These
                plugins are useful when your design workflow is centered on Figma and you want to
                avoid switching to After Effects for simple animations.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Rive</h3>
              <p>
                <a
                  href="https://rive.app"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rive
                </a>{" "}
                (formerly Flare) is a dedicated animation tool that supports Lottie export alongside
                its own runtime format. Rive&apos;s strength is interactive animations with state
                machines, where the animation responds to user input in real time. The free tier is
                generous for individual developers. While Rive&apos;s native format offers more
                features, the Lottie export covers standard animation needs well.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Player Libraries by Platform
              </h2>
              <p>
                You need a player library to render Lottie animations in your application. Here are
                the best options for each platform:
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Web</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">lottie-web:</strong> The official player by Airbnb.
                  Supports SVG, Canvas, and HTML rendering. Most feature-complete but also the
                  largest (~250 KB minified).
                </li>
                <li>
                  <strong className="text-white">@lottiefiles/lottie-player:</strong> A web
                  component wrapper that works with any framework. Includes built-in controls and
                  theming.
                </li>
                <li>
                  <strong className="text-white">lottie-react:</strong> A React-specific wrapper
                  around lottie-web with hooks for playback control.
                </li>
                <li>
                  <strong className="text-white">vue-lottie:</strong> Vue.js component for Lottie
                  animations with reactive props for playback control.
                </li>
                <li>
                  <strong className="text-white">@dotlottie/player-component:</strong> Supports the
                  newer dotLottie format with smaller file sizes and bundled assets.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Mobile</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">lottie-ios:</strong> Native iOS player using Core
                  Animation. Maintained by Airbnb.
                </li>
                <li>
                  <strong className="text-white">lottie-android:</strong> Native Android player.
                  Also maintained by Airbnb.
                </li>
                <li>
                  <strong className="text-white">lottie-react-native:</strong> React Native bridge
                  for both iOS and Android.
                </li>
                <li>
                  <strong className="text-white">lottie (Flutter):</strong> Flutter package that
                  renders Lottie animations using the Skia engine.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Optimization and Testing Tools
              </h2>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                LottieFiles Optimizer
              </h3>
              <p>
                Upload a Lottie JSON file and the optimizer strips unnecessary data, simplifies
                paths, and reduces precision where it won&apos;t affect visual quality. Typical
                reductions range from 20% to 60% depending on the animation. The tool is free and
                runs in the browser.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                JSON Animation Viewer
              </h3>
              <p>
                Our own{" "}
                <Link href="/" className="text-blue-400 hover:underline">
                  JSON Animation Viewer
                </Link>{" "}
                lets you preview any Lottie file instantly by dragging it into the browser. It&apos;s
                useful for quick validation during development: check that an animation plays
                correctly, verify dimensions, and test at different sizes. Everything runs locally,
                so your files stay private.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                Lottie Editor by LottieFiles
              </h3>
              <p>
                Beyond basic preview, the LottieFiles editor lets you inspect individual layers,
                modify colors, adjust timing, and test interactivity. It&apos;s particularly useful
                for making last-minute adjustments without going back to After Effects.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                Bodymovin Compatibility Checker
              </h3>
              <p>
                Before exporting from After Effects, the Bodymovin plugin includes a compatibility
                checker that flags features in your composition that won&apos;t translate to Lottie.
                Running this check before export saves time by catching issues early rather than
                discovering them during testing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Learning Resources
              </h2>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Documentation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    href="https://airbnb.io/lottie/"
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Lottie Documentation
                  </a>{" "}
                  covers the format specification, supported features, and platform-specific guides.
                </li>
                <li>
                  <a
                    href="https://lottiefiles.com/blog"
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LottieFiles Blog
                  </a>{" "}
                  publishes tutorials, case studies, and best practices regularly.
                </li>
                <li>
                  The{" "}
                  <a
                    href="https://github.com/airbnb/lottie-web"
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    lottie-web GitHub repository
                  </a>{" "}
                  has detailed API documentation and examples in the wiki.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Our Guides</h3>
              <p>
                We&apos;ve written several in-depth articles to help you get started:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/blog/what-is-lottie" className="text-blue-400 hover:underline">
                    What is Lottie Animation? A Complete Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/json-animation-tutorial"
                    className="text-blue-400 hover:underline"
                  >
                    JSON Animation Tutorial: From After Effects to Web
                  </Link>
                </li>
                <li>
                  <Link href="/blog/lottie-vs-gif" className="text-blue-400 hover:underline">
                    Lottie vs GIF: Why Lottie Animations Are Better
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/how-to-create-lottie-animation"
                    className="text-blue-400 hover:underline"
                  >
                    How to Create Lottie Animations: Step-by-Step
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Community and Support
              </h2>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">GitHub</h3>
              <p>
                The official Lottie repositories on GitHub are active and well-maintained. Issues are
                a good place to report bugs, ask questions, and find workarounds for known
                limitations. The lottie-web repository alone has over 30,000 stars and an active
                contributor community.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">LottieFiles Community</h3>
              <p>
                The LottieFiles platform has a community section where designers and developers share
                work, ask questions, and collaborate. It&apos;s a good place to find inspiration,
                get feedback on your animations, and connect with other people working with Lottie.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Stack Overflow</h3>
              <p>
                The &quot;lottie&quot; tag on Stack Overflow has thousands of questions and answers
                covering common implementation issues, platform-specific quirks, and optimization
                techniques. If you&apos;re stuck on a specific problem, chances are someone has
                already asked about it there.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Putting It All Together
              </h2>
              <p>
                The Lottie ecosystem gives you everything you need to add professional animations to
                your projects. Start by browsing free animation libraries for ready-made assets. Use
                our{" "}
                <Link href="/" className="text-blue-400 hover:underline">
                  JSON Animation Viewer
                </Link>{" "}
                to preview and validate files. When you need custom animations, pick the creation
                tool that fits your skill level and workflow. Integrate with the appropriate player
                library for your platform, optimize for production, and ship.
              </p>
              <p className="mt-3">
                The barrier to entry has never been lower. With free animations, free tools, and
                open-source player libraries, you can add polished, performant animations to any
                project without spending a dollar.
              </p>
            </section>
          </div>
        </article>

        <aside className="mt-12 pt-8 border-t border-gray-700">
          <h2 className="text-lg font-semibold text-white mb-4">Related Posts</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/how-to-create-lottie-animation" className="text-blue-400 hover:text-blue-300 transition-colors">
                How to Create Lottie Animations: Step-by-Step
              </Link>
            </li>
            <li>
              <Link href="/blog/what-is-lottie" className="text-blue-400 hover:text-blue-300 transition-colors">
                What is Lottie Animation? A Complete Guide
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
