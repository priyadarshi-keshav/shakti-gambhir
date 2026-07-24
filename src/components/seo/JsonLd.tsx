import { services, serviceOptions } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/hero/portrait.jpg`,
    jobTitle: "Zumba Instructor, Pilates Coach & Dance Choreographer",
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: [siteConfig.instagram, siteConfig.facebook].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    image: `${siteConfig.url}/images/hero/hero-bg.jpg`,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    sameAs: [siteConfig.instagram, siteConfig.facebook].filter(Boolean),
  };

  const offerCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `${siteConfig.name} Services`,
    itemListElement: services.map((service) => ({
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            category: serviceOptions.includes(service.title as (typeof serviceOptions)[number])
              ? service.title
              : "Fitness",
          },
        },
      ],
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
    </>
  );
}

export default JsonLd;
