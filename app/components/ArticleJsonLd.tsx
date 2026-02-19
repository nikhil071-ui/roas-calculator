type ArticleJsonLdProps = {
  headline: string;
  description: string;
  url: string;
  publishedDate?: string;
  modifiedDate?: string;
  authorName?: string;
  wordCount?: number;
  readTimeMinutes?: number;
};

export default function ArticleJsonLd({
  headline,
  description,
  url,
  publishedDate = "2026-02-18",
  modifiedDate = "2026-02-18",
  authorName = "ROAS Tools Editorial Team",
  wordCount,
  readTimeMinutes,
}: ArticleJsonLdProps) {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    ...(wordCount ? { wordCount } : {}),
    ...(readTimeMinutes ? { timeRequired: `PT${readTimeMinutes}M` } : {}),
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "ROAS Tools",
      logo: {
        "@type": "ImageObject",
        url: "https://roas-calculator.tech/icon.svg",
      },
    },
    mainEntityOfPage: url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  );
}
