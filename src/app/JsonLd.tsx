export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "JSON Animation Viewer",
    url: "https://json-animation-viewer.vercel.app",
    description:
      "Easily preview your JSON animations with our user-friendly JSON Animation Viewer. Drag and drop your JSON files to see them in action instantly!",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Organization",
      name: "JSON Animation Viewer Team",
    },
    screenshot: "https://json-animation-viewer.vercel.app/og-image.png",
    softwareVersion: "1.0",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
