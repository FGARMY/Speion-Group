import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://speion-group.vercel.app';
const SITE_NAME = 'Speion';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

/**
 * Reusable SEO Head component.
 * Renders unique <title>, <meta>, <link rel="canonical">, OG, Twitter,
 * breadcrumb schema, and optional page-specific JSON-LD per page.
 */
const SEO = ({
  title,
  description,
  path = '/',
  type = 'website',
  image = DEFAULT_IMAGE,
  schema = null,
  breadcrumbs = null,
  keywords = '',
}) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  // Auto-generate BreadcrumbList schema
  const breadcrumbSchema = breadcrumbs ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': crumb.name,
      'item': `${SITE_URL}${crumb.path}`,
    })),
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="author" content="Speion Group" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Page-specific JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
