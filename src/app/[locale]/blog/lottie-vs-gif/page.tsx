import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import BlogPostJsonLd from '@/components/BlogPostJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata.lottieVsGif'});
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/blog/lottie-vs-gif`,
      languages: { en: '/en/blog/lottie-vs-gif', ko: '/ko/blog/lottie-vs-gif' },
    },
    openGraph: {
      type: "article",
      publishedTime: "2025-02-15T00:00:00Z",
    },
  };
}

export default async function LottieVsGifPage({params}: {params: Promise<{locale: string}>}) {
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
            { name: "Lottie vs GIF", href: "/blog/lottie-vs-gif" },
          ]}
        />
        <BlogPostJsonLd
          title="Lottie vs GIF: Why Lottie Animations Are Better"
          description="A detailed comparison of Lottie and GIF animation formats. Compare file sizes, rendering quality, performance, interactivity, and developer experience with real-world benchmarks."
          datePublished="2025-02-15T00:00:00Z"
          dateModified="2025-02-15T00:00:00Z"
          slug="lottie-vs-gif"
          locale={locale}
        />

        <Link
          href="/blog"
          className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block transition-colors"
        >
          &larr; {tc("backToBlog")}
        </Link>

        <article>
          <time dateTime="2025-02-15" className="text-sm text-gray-500 block mb-4">February 15, 2025</time>
          <h1 className="text-4xl font-bold text-white mb-6">
            Lottie vs GIF: Why Lottie Animations Are Better
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
            <section>
              <p>
                GIFs have been the default animation format on the web for over three decades. They
                work everywhere, require no special libraries, and everyone knows how to use them.
                But GIFs come with serious limitations that become painful as web performance
                standards rise and user expectations grow.
              </p>
              <p className="mt-3">
                Lottie, the JSON-based animation format created by Airbnb, addresses nearly every
                shortcoming of GIFs while adding capabilities that GIFs never had. This article
                breaks down the comparison across every dimension that matters: file size, visual
                quality, performance, interactivity, accessibility, and developer experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                File Size: The Most Dramatic Difference
              </h2>
              <p>
                File size is where Lottie wins most convincingly. A GIF stores every frame as a
                complete rasterized image. Even with GIF&apos;s built-in LZW compression, a simple
                loading spinner GIF at 200x200 pixels running for 2 seconds at 24 fps might weigh
                150 to 300 KB. A more complex illustration animation can easily reach 1 to 5 MB.
              </p>
              <p className="mt-3">
                The same animation as a Lottie JSON file typically weighs 5 to 30 KB. That&apos;s
                not a typo. Lottie files are often 10 to 50 times smaller than their GIF
                equivalents. The reason is fundamental: Lottie doesn&apos;t store pixel data. It
                stores mathematical descriptions of shapes, paths, and transforms. A circle is
                described by a center point and radius, not by thousands of colored pixels.
              </p>
              <p className="mt-3">
                Here are some real-world comparisons for common animation types:
              </p>
              <div className="overflow-x-auto mt-3">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-2 pr-4 text-white">Animation Type</th>
                      <th className="py-2 pr-4 text-white">GIF Size</th>
                      <th className="py-2 pr-4 text-white">Lottie Size</th>
                      <th className="py-2 text-white">Reduction</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-gray-800">
                      <td className="py-2 pr-4">Loading spinner</td>
                      <td className="py-2 pr-4">180 KB</td>
                      <td className="py-2 pr-4">8 KB</td>
                      <td className="py-2">95%</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-2 pr-4">Checkmark animation</td>
                      <td className="py-2 pr-4">250 KB</td>
                      <td className="py-2 pr-4">12 KB</td>
                      <td className="py-2">95%</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-2 pr-4">Onboarding illustration</td>
                      <td className="py-2 pr-4">1.2 MB</td>
                      <td className="py-2 pr-4">45 KB</td>
                      <td className="py-2">96%</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-2 pr-4">Animated icon set (10 icons)</td>
                      <td className="py-2 pr-4">2.5 MB</td>
                      <td className="py-2 pr-4">80 KB</td>
                      <td className="py-2">97%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Hero section animation</td>
                      <td className="py-2 pr-4">4.8 MB</td>
                      <td className="py-2 pr-4">120 KB</td>
                      <td className="py-2">97%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                These savings compound quickly. A page with five animated elements might load 10 MB
                of GIFs or 200 KB of Lottie files. On a 3G mobile connection, that&apos;s the
                difference between a 30-second wait and a near-instant load.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Visual Quality: Vectors vs Pixels
              </h2>
              <p>
                GIFs are rasterized. Each frame is a grid of pixels at a fixed resolution. Display
                the GIF at its native size and it looks fine. Scale it up for a retina display or a
                larger container and the pixels become visible. Scale it down and you waste bandwidth
                delivering pixels the user never sees.
              </p>
              <p className="mt-3">
                Lottie animations are vector-based. Shapes are defined mathematically, so they render
                at whatever resolution the display requires. A Lottie animation looks equally sharp
                on a 1x desktop monitor, a 2x laptop screen, and a 3x mobile display. There&apos;s
                no need to create multiple versions at different resolutions.
              </p>
              <p className="mt-3">
                GIFs also have a hard limit of 256 colors per frame. This creates visible banding in
                gradients and dithering artifacts in areas with subtle color transitions. Lottie has
                no color limitations. It supports full 24-bit color, gradients, opacity, and blend
                modes without any quality compromise.
              </p>
              <p className="mt-3">
                Another quality factor is frame rate. GIFs typically run at 10 to 15 fps to keep
                file sizes manageable. Higher frame rates multiply the file size proportionally.
                Lottie animations commonly run at 24 or 30 fps with negligible impact on file size,
                since adding more frames only adds more keyframe data points, not more pixel grids.
                The result is noticeably smoother motion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Performance and Rendering
              </h2>
              <p>
                GIF rendering is straightforward but inefficient. The browser decodes each frame,
                stores it in memory, and displays them in sequence. A large GIF can consume
                significant memory because every frame is a full bitmap. A 500x500 pixel GIF with
                60 frames uses roughly 60 MB of uncompressed memory (500 &times; 500 &times; 4
                bytes &times; 60 frames).
              </p>
              <p className="mt-3">
                Lottie rendering works differently. The player calculates each frame on the fly using
                the mathematical descriptions in the JSON. Memory usage is minimal because only the
                current frame&apos;s render state exists at any time. CPU usage depends on the
                complexity of the animation, but for typical UI animations, it&apos;s negligible on
                modern devices.
              </p>
              <p className="mt-3">
                On the web, lottie-web offers three rendering modes. SVG rendering creates DOM
                elements that the browser&apos;s compositor can hardware-accelerate. Canvas rendering
                draws directly to a bitmap context, which is faster for complex animations with many
                overlapping elements. HTML rendering uses standard DOM elements and CSS transforms,
                offering the lightest footprint for simple animations.
              </p>
              <p className="mt-3">
                One area where GIFs have a slight edge is initial parse time. A GIF starts
                displaying immediately as frames decode. A Lottie animation needs to parse the JSON
                and build its internal representation before the first frame renders. For small
                animations this difference is imperceptible (under 10ms), but very large Lottie files
                with thousands of keyframes might show a brief delay on slower devices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Interactivity: Where GIFs Can&apos;t Compete
              </h2>
              <p>
                This is where the comparison becomes one-sided. GIFs have zero interactivity. They
                play from start to finish in a loop. You can&apos;t pause them, reverse them, change
                their speed, or jump to a specific frame. The only control you have is whether to
                display the GIF or not.
              </p>
              <p className="mt-3">
                Lottie animations are fully programmable. Through the player API, you can:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Play, pause, and stop the animation at any point</li>
                <li>Control playback speed (slow motion, fast forward, or anything in between)</li>
                <li>Play the animation in reverse</li>
                <li>Jump to any specific frame or time</li>
                <li>Play only a segment of the animation (frames 10 to 30, for example)</li>
                <li>Sync the animation progress to scroll position</li>
                <li>Trigger animations based on user interactions (hover, click, focus)</li>
                <li>Listen for playback events (loop complete, animation end, frame enter)</li>
                <li>Dynamically change colors and properties at runtime</li>
              </ul>
              <p className="mt-3">
                These capabilities open up design patterns that are impossible with GIFs. A button
                can play a hover animation forward when the cursor enters and reverse it when the
                cursor leaves. A progress indicator can sync its animation to actual download
                progress. An onboarding flow can play different segments based on which step the user
                is on.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Transparency Support
              </h2>
              <p>
                GIFs support transparency, but only binary transparency: each pixel is either fully
                opaque or fully transparent. There&apos;s no partial transparency (alpha channel).
                This creates jagged edges around curved shapes and makes it impossible to smoothly
                blend an animation over a complex background. Workarounds like matte colors help but
                lock the animation to a specific background color.
              </p>
              <p className="mt-3">
                Lottie supports full alpha transparency. Elements can be any opacity from 0% to
                100%, and opacity can be animated over time. Animations blend smoothly over any
                background, whether it&apos;s a solid color, a gradient, an image, or even another
                animation. This makes Lottie animations far more versatile in real-world layouts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Accessibility
              </h2>
              <p>
                Neither format is inherently accessible, but Lottie provides better tools for
                building accessible experiences. Since Lottie animations are rendered as SVG or
                Canvas elements, you can add ARIA labels, roles, and descriptions. You can also
                detect the prefers-reduced-motion media query and respond by pausing the animation
                or showing a static frame.
              </p>
              <p className="mt-3">
                GIFs are opaque to assistive technology. Screen readers see them as images and can
                only read the alt text. There&apos;s no way to pause a GIF through standard browser
                APIs (the image element doesn&apos;t expose playback controls). Users who are
                sensitive to motion have no way to stop a GIF animation without disabling images
                entirely.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Developer Experience
              </h2>
              <p>
                Working with GIFs is simple. Drop the file into your project, reference it in an
                img tag, and you&apos;re done. No libraries, no configuration, no build steps. This
                simplicity is GIF&apos;s strongest advantage and the reason it persists despite its
                technical limitations.
              </p>
              <p className="mt-3">
                Lottie requires a player library. On the web, that means adding lottie-web (about
                250 KB minified, 70 KB gzipped) or a lighter alternative like lottie-light. For
                React projects, wrapper libraries like lottie-react simplify integration. The setup
                takes a few minutes, but once configured, adding new animations is as easy as
                dropping in a JSON file.
              </p>
              <p className="mt-3">
                The Lottie ecosystem also provides better tooling for the design-to-development
                workflow. Designers export directly from After Effects. Developers preview with tools
                like our{" "}
                <Link href="/" className="text-blue-400 hover:underline">
                  JSON Animation Viewer
                </Link>
                . LottieFiles provides a platform for sharing, customizing, and optimizing
                animations. The entire pipeline is more structured than the typical GIF workflow of
                screen recording and manual optimization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                When GIFs Still Make Sense
              </h2>
              <p>
                Despite Lottie&apos;s advantages, there are situations where GIFs remain the
                practical choice:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong className="text-white">Email:</strong> Most email clients don&apos;t
                  support JavaScript, so Lottie can&apos;t run. GIFs are the only animated format
                  that works reliably in email.
                </li>
                <li>
                  <strong className="text-white">Chat and messaging:</strong> Platforms like Slack,
                  Discord, and iMessage support GIFs natively. Lottie support in messaging apps is
                  limited.
                </li>
                <li>
                  <strong className="text-white">Photographic animations:</strong> If your animation
                  contains photographic or video-like content, GIF (or better, WebP/AVIF) is more
                  appropriate since Lottie is designed for vector graphics.
                </li>
                <li>
                  <strong className="text-white">Zero-dependency requirement:</strong> If you
                  absolutely cannot add any JavaScript library, GIFs work without dependencies.
                </li>
                <li>
                  <strong className="text-white">Documentation and README files:</strong> GitHub
                  READMEs and documentation sites render GIFs inline without any setup.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                The Verdict
              </h2>
              <p>
                For web and mobile application development, Lottie is the better choice in almost
                every scenario. The file size savings alone justify the switch, and the added
                benefits of vector quality, interactivity, and programmatic control make it a
                strictly superior format for UI animations.
              </p>
              <p className="mt-3">
                GIFs still have their place in contexts where universal compatibility matters more
                than quality and performance. But for any project where you control the rendering
                environment (your website, your app, your product), Lottie delivers a better
                experience for both developers and users.
              </p>
              <p className="mt-3">
                Ready to try Lottie? Preview any Lottie JSON file instantly with our{" "}
                <Link href="/" className="text-blue-400 hover:underline">
                  JSON Animation Viewer
                </Link>
                , or learn how to create your own animations in our{" "}
                <Link
                  href="/blog/how-to-create-lottie-animation"
                  className="text-blue-400 hover:underline"
                >
                  step-by-step creation guide
                </Link>
                .
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
