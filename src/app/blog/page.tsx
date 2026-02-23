import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Blog - JSON Animation Viewer",
  description:
    "Articles and tutorials about Lottie animations, JSON animation workflows, and web animation best practices. Learn how to create, optimize, and implement Lottie animations.",
  alternates: {
    canonical: "/blog",
  },
};

const posts = [
  {
    slug: "what-is-lottie",
    title: "What is Lottie Animation? A Complete Guide",
    description:
      "Everything you need to know about the Lottie animation format: its history, how it works under the hood, and why it has become the standard for lightweight web and mobile animations.",
    date: "2025-02-20",
  },
  {
    slug: "json-animation-tutorial",
    title: "JSON Animation Tutorial: From After Effects to Web",
    description:
      "A practical walkthrough of the complete Lottie workflow, from designing animations in After Effects to exporting with Bodymovin and rendering them on the web.",
    date: "2025-02-18",
  },
  {
    slug: "lottie-vs-gif",
    title: "Lottie vs GIF: Why Lottie Animations Are Better",
    description:
      "A detailed comparison of Lottie and GIF formats with real-world benchmarks covering file size, quality, performance, and developer experience.",
    date: "2025-02-15",
  },
  {
    slug: "best-lottie-resources",
    title: "Best Lottie Animation Resources for Developers",
    description:
      "A curated collection of free Lottie animation libraries, tools, plugins, and communities to help you find and create animations for your projects.",
    date: "2025-02-12",
  },
  {
    slug: "how-to-create-lottie-animation",
    title: "How to Create Lottie Animations: Step-by-Step",
    description:
      "A beginner-friendly guide to creating your first Lottie animation, covering design principles, tool setup, export settings, and implementation tips.",
    date: "2025-02-10",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block transition-colors"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
        <p className="text-gray-400 mb-12 text-lg">
          Tutorials, guides, and insights about Lottie animations and JSON animation workflows.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors"
            >
              <time className="text-sm text-gray-500 block mb-2" dateTime={post.date}>{post.date}</time>
              <h2 className="text-xl font-semibold mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-400 mb-3">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                Read more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
