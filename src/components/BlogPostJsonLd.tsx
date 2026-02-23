interface BlogPostJsonLdProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  slug: string;
}

export default function BlogPostJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  slug,
}: BlogPostJsonLdProps) {
  const url = `https://json-animation-viewer.vercel.app/blog/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: "lbo728",
      url: "https://github.com/lbo728",
    },
    publisher: {
      "@type": "Organization",
      name: "JSON Animation Viewer",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: "https://json-animation-viewer.vercel.app/og-image.png",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
