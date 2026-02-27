import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://pagead2.googlesyndication.com",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://pagead2.googlesyndication.com https://ep1.adtrafficquality.google",
  "img-src 'self' data: blob: https:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://*.list-manage.com https://app.convertkit.com https://*.sibforms.com",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.roas-calculator.tech" }],
        destination: "https://roas-calculator.tech/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "roas-calculator-brown.vercel.app" }],
        destination: "https://roas-calculator.tech/:path*",
        permanent: true,
      },
      {
        source: "/blog/roas-benchmarks",
        destination: "/blog/roas-benchmarks-2026",
        permanent: true,
      },
      {
        source: "/blog/image-compression-technical",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/pdf-compression-guide",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/currency-exchange-guide",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/image-compressor/:path*",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/pdf-converter/:path*",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/currency-converter/:path*",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/compressor/:path*",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/pdf/:path*",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/currency/:path*",
        destination: "/resources",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|css|js|woff|woff2)",
        locale: false,
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
