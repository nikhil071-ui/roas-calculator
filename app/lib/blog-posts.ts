export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate: string;
  readTimeMinutes: number;
  wordCount: number;
};

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "facebook-ads-case-study",
    title: "Facebook Ads ROAS Case Study: 1.8x -> 5.2x in 90 Days",
    description:
      "Real case study with data: Fashion e-commerce store increased ROAS from 1.8x to 5.2x in 90 days.",
    publishedDate: "2024-10-12",
    modifiedDate: "2026-02-18",
    readTimeMinutes: 12,
    wordCount: 1850,
  },
  {
    slug: "image-compression-technical",
    title: "Image Compression vs Quality: Technical Guide & Lab Test Results",
    description:
      "How JPEG, WebP, and AVIF compression algorithms work with quality and size test results.",
    publishedDate: "2024-09-15",
    modifiedDate: "2026-02-18",
    readTimeMinutes: 10,
    wordCount: 1560,
  },
  {
    slug: "pdf-compression-guide",
    title: "PDF Compression Best Practices: File Size vs Quality",
    description:
      "Practical PDF compression methods with quality trade-offs and tool comparisons.",
    publishedDate: "2024-08-30",
    modifiedDate: "2026-02-18",
    readTimeMinutes: 11,
    wordCount: 1680,
  },
  {
    slug: "currency-exchange-guide",
    title: "Currency Exchange Rates: How They Work & Cost Comparison",
    description:
      "How currency exchange rates work, and where hidden transfer costs typically appear.",
    publishedDate: "2024-11-10",
    modifiedDate: "2026-02-18",
    readTimeMinutes: 13,
    wordCount: 2010,
  },
  {
    slug: "roas-benchmarks-2026",
    title: "ROAS Benchmarks 2026: Updated Channel and Industry Ranges",
    description:
      "Updated benchmark reference for 2026 with practical interpretation across channels.",
    publishedDate: "2026-02-18",
    modifiedDate: "2026-02-18",
    readTimeMinutes: 8,
    wordCount: 1220,
  },
  {
    slug: "payback-period-cash-flow-saas",
    title: "SaaS CAC Payback Period and Cash Flow Planning",
    description:
      "How CAC payback controls cash flow risk and paid growth pacing in SaaS.",
    publishedDate: "2026-02-18",
    modifiedDate: "2026-02-18",
    readTimeMinutes: 9,
    wordCount: 1330,
  },
  {
    slug: "attribution-impact-on-roas",
    title: "Attribution Impact on ROAS: Last-Click vs Data-Driven",
    description:
      "How attribution model choice changes reported ROAS and budget decisions.",
    publishedDate: "2026-02-18",
    modifiedDate: "2026-02-18",
    readTimeMinutes: 8,
    wordCount: 1180,
  },
  {
    slug: "how-to-improve-roas-without-raising-budget",
    title: "How to Improve ROAS Without Raising Budget",
    description:
      "Workflow to improve ROAS through conversion rate, AOV, and traffic quality.",
    publishedDate: "2026-02-18",
    modifiedDate: "2026-02-18",
    readTimeMinutes: 7,
    wordCount: 980,
  },
  {
    slug: "roas-audit-checklist",
    title: "ROAS Audit Checklist: Technical, Funnel, and Profitability",
    description:
      "Checklist for measurement validity, funnel diagnostics, and profitability guardrails.",
    publishedDate: "2026-02-18",
    modifiedDate: "2026-02-18",
    readTimeMinutes: 6,
    wordCount: 860,
  },
  {
    slug: "when-to-scale-or-pause-campaigns",
    title: "When to Scale or Pause Campaigns",
    description:
      "Threshold-based scale/hold/pause decisions using break-even ROAS and payback constraints.",
    publishedDate: "2026-02-18",
    modifiedDate: "2026-02-18",
    readTimeMinutes: 7,
    wordCount: 940,
  },
  {
    slug: "creative-testing-framework-for-roas",
    title: "Creative Testing Framework for ROAS",
    description:
      "Hypothesis-driven ad creative testing to improve return quality and scale winners.",
    publishedDate: "2026-02-18",
    modifiedDate: "2026-02-18",
    readTimeMinutes: 7,
    wordCount: 1010,
  },
];

export function getBlogPostBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
