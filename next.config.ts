import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// ─── Content Security Policy ─────────────────────────────────────────
// Each directive controls what the browser is allowed to load.
// See inline comments below for beginner-friendly explanations.
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://i.pravatar.cc;
    font-src 'self';
    connect-src 'self' https://*.supabase.co https://vitals.vercel-insights.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, "").replace(/\s{2,}/g, " ").trim(),
          },
          {
            // Prevent your site from being embedded in iframes (clickjacking protection)
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            // Stop browsers from guessing (MIME-sniffing) file types
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Control how much URL info is sent when navigating to other sites
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Disable browser features you don't use (camera, microphone, etc.)
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            // Force HTTPS for 1 year — browsers will refuse HTTP connections entirely
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
