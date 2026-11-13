import type { NextConfig } from "next";

// GitHub Pages serves this project from /<repository-name>/.
// Local development and future custom-domain builds use the site root.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages
    ? {
        basePath: "/this-is-the-one-2",
      }
    : {}),
};

export default nextConfig;
