// Static export for GitHub Pages.
// NEXT_PUBLIC_BASE_PATH is set by the GitHub Actions workflow (e.g. "/verse-share-marketing").
// Locally it is empty, so `npm run dev` works at http://localhost:3000.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
