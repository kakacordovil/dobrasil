const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: [] },

  env: {
    NEXT_PUBLIC_SITE_TITLE:
      "DoBrasil — Produtos, Culinária e Experiências do Brasil em Portugal",
    NEXT_PUBLIC_SITE_DESCRIPTION:
      "Descubra produtos autênticos, kits culinários e experiências brasileiras em Portugal.",
    NEXT_PUBLIC_SITE_KEYWORDS:
      "produtos do brasil, culinária brasileira, experiências brasileiras, brasileiros em portugal",
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    NEXT_PUBLIC_SITE_IMAGE_PREVIEW_URL: "/images/preview.png",
  },
};

module.exports = withPWA(nextConfig);
