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
  {
    slug: "image-compression-technical",
    title: "Image Compression Technical Guide: Quality vs File Size",
    description:
      "Technical breakdown of image compression settings, file-size targets, and quality tradeoffs.",
    publishedDate: "2024-11-08",
    modifiedDate: "2026-02-27",
    readTimeMinutes: 10,
    wordCount: 1600,
  },
  {
    slug: "pdf-compression-guide",
    title: "PDF Compression Guide: Keep Files Under Upload Limits",
    description:
      "How to create and compress PDFs for strict upload portals without breaking readability.",
    publishedDate: "2024-11-12",
    modifiedDate: "2026-02-27",
    readTimeMinutes: 9,
    wordCount: 1450,
  },
  {
    slug: "currency-exchange-guide",
    title: "Currency Exchange Guide: Rates, Spreads, and Transfer Fees",
    description:
      "Practical guide to live FX rates, hidden spread costs, and smarter international transfers.",
    publishedDate: "2024-11-20",
    modifiedDate: "2026-02-27",
    readTimeMinutes: 8,
    wordCount: 1320,
  },
];

export function getBlogPostBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
