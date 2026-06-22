/** @type {import('next').NextConfig} */

// On GitHub Pages the site is served from https://<user>.github.io/Ferdows-farm/,
// so assets and links need the repo name as a base path. Local dev stays at "/".
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "Ferdows-farm";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // static HTML export for GitHub Pages
  trailingSlash: true, // emit dir/index.html so subpath routing resolves cleanly
  images: { unoptimized: true }, // no Image Optimization server on Pages
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
};

export default nextConfig;
