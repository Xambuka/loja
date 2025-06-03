/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
  },
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  images: {
    // Suporte para formatos de imagem modernos
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Adicione aqui os padrões para seus domínios de imagens
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/password",
        destination: "/",
        permanent: true,
      },
    ];
  },
};