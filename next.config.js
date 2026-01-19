const withPWA = require('next-pwa')

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'DoBrasil — Produtos, Culinária e Experiências do Brasil em Portugal',
    siteDescription: 'Descubra produtos autênticos, kits culinários e experiências brasileiras em Portugal.',
    siteKeywords: 'produtos do brasil, culinária brasileira, experiências no brasil, brasileiros em portugal',
    siteUrl: 'https://notioncapture.vercel.app',
    siteImagePreviewUrl: '/images/preview.png'
  },
})
