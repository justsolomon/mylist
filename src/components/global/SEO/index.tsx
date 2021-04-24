import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  /** Prefix of the page name. Usually the name of the path */
  prefix: string;

  /** Meta description of the page */
  description: string;
}

function SEO({
  prefix,
  description = "Create, edit and share reviews on courses. Check out reviews posted by others and upvote relevant ones.",
}: SEOProps) {
  const seo = {
    description,
    image: "/assets/images/og-image.jpeg",
    url: "https://courserate.netlify.app",
    title: `${prefix} | CourseRate`,
    twitterUsername: "@gbsolomon1",
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
}

export default SEO;
