import Head from "next/head";

export default function SEO({
  title,
  description,
  imagePath = "/images/preview.png",
  path = "",
  noIndex = false,
}) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const siteName = "DoBrasil";

  const defaultTitle =
    process.env.NEXT_PUBLIC_SITE_TITLE ||
    "DoBrasil — Produtos, Culinária e Experiências do Brasil em Portugal";

  const defaultDescription =
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Curadoria de experiências, gastronomia, eventos e produtos do Brasil em Portugal.";

  const metaTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const metaDescription = description || defaultDescription;

  // normaliza url + path
  const canonicalUrl = `${siteUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`.replace(/\/$/, "");

  const ogImage = `${siteUrl.replace(/\/$/, "")}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* PWA / Icons */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />

      {/* Theme color (verde DoBrasil) */}
      <meta name="theme-color" content="#0F3D2E" />
    </Head>
  );
};