/** @type {import('next').NextConfig} */
const repo = process.env.GITHUB_REPO_NAME || "Edtech-platform-test-netflixdesign"
const basePath = process.env.NODE_ENV === "production" ? `/${repo}` : ""

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
