import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  /** Prefix of the page name. Usually the name of the path */
  prefix: string;

  /** Pathname of the page */
  path: string;

  /** Meta description of the page */
  description?: string;
  ogImageUrl?: string;
  twitterImageUrl?: string;
}

function SEO({
  prefix,
  path,
  ogImageUrl,
  twitterImageUrl,
  description = "Organize your work into blah blah",
}: SEOProps) {
  const seo = {
    description,
    ogImage: ogImageUrl
      ? ogImageUrl
      : "https://res.cloudinary.com/dazqhyrh7/image/upload/f_auto,q_auto:low,w_1200,h_630/v1619983877/mylist_landing_hero.jpg",
    twitterImage: twitterImageUrl
      ? twitterImageUrl
      : "https://res.cloudinary.com/dazqhyrh7/image/upload/f_auto,q_auto:low,w_800,h_418/v1619983877/mylist_landing_hero.jpg",
    url: `https://mylist-app.netlify.app${path}`,
    title: `${prefix} | MyList`,
    twitterUsername: "@gbsolomon1",
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.ogImage} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.twitterImage} />
    </Helmet>
  );
}

export default SEO;
