import type { NextConfig } from "next";

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
        source: "/blog/roas-benchmarks",
        destination: "/blog/roas-benchmarks-2026",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
