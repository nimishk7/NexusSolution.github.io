import React from 'react';
import { Helmet } from 'react-helmet-async';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Manufacturer"],
  "name": "Nexus Solutions",
  "url": "https://nexus-solutions.co.in/",
  "logo": "https://nexus-solutions.co.in/images/logo2.png",
  "image": "https://nexus-solutions.co.in/images/factory_about.png",
  "description": "Nexus Solutions, Sangli — Manufacturer and supplier of DWC Pipes, HDPE Pipelines, Couplers, Spacer Products and STP MBBR Media. 15+ years of infrastructure excellence in Maharashtra.",
  "telephone": ["+919284593597", "+918468837611"],
  "email": "nexussangli24@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Flat No 103, Khadilkar Sankul, Khadilkar Galli, Gaonbhag",
    "addressLocality": "Sangli",
    "addressRegion": "Maharashtra",
    "postalCode": "416416",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "16.856652",
    "longitude": "74.559959"
  },
  "areaServed": {
    "@type": "State",
    "name": "Maharashtra, India"
  },
  "priceRange": "₹₹",
  "openingHours": "Mo-Sa 09:00-18:00",
  "foundingDate": "2024",
  "slogan": "Engineering Durable Pipe Infrastructure",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+919284593597",
      "contactType": "sales",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+918468837611",
      "contactType": "customer support",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }
  ]
};

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Nexus Solutions Product Catalogue",
  "description": "Full range of plastic pipe infrastructure products manufactured and supplied by Nexus Solutions, Sangli.",
  "url": "https://nexus-solutions.co.in/#products",
  "numberOfItems": 5,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "DWC Pipes — Double Wall Corrugated Pipes",
        "description": "Double Wall Corrugated Pipes ideal for robust underground drainage and cable protection networking. Leakproof joints, high flexibility, chemical resistant.",
        "image": "https://nexus-solutions.co.in/images/dwc_pipe.png",
        "brand": { "@type": "Brand", "name": "Nexus Solutions" },
        "manufacturer": { "@type": "Organization", "name": "Nexus Solutions" },
        "category": "Infrastructure Pipes"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "HDPE Pipes — High Density Polyethylene Pipes",
        "description": "Strong high-density polyethylene pipelines suitable for road, stormwater, and sewerage networks. SN 4 and SN 8 Rating.",
        "image": "https://nexus-solutions.co.in/images/hdpe_pipe.png",
        "brand": { "@type": "Brand", "name": "Nexus Solutions" },
        "manufacturer": { "@type": "Organization", "name": "Nexus Solutions" },
        "category": "Infrastructure Pipes"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Couplers and Fittings",
        "description": "Economical and reliable molded bends, tees, and cross fittings for 40mm OD to 300mm ID. Flexible grip, non-flame propagation.",
        "image": "https://nexus-solutions.co.in/images/couplers&fittings.png",
        "brand": { "@type": "Brand", "name": "Nexus Solutions" },
        "manufacturer": { "@type": "Organization", "name": "Nexus Solutions" },
        "category": "Pipe Fittings"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Product",
        "name": "Spacer Products",
        "description": "Tailor-made spacing solutions for organized conduit management and underground wiring. Multi-conduit support, high rigid strength.",
        "image": "https://nexus-solutions.co.in/images/spacer_product3.png",
        "brand": { "@type": "Brand", "name": "Nexus Solutions" },
        "manufacturer": { "@type": "Organization", "name": "Nexus Solutions" },
        "category": "Conduit Management"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Product",
        "name": "STP MBBR Media",
        "description": "High-performance bio-carriers designed to maximize active surface area and biological growth in wastewater treatment. Virgin HDPE material.",
        "image": "https://nexus-solutions.co.in/images/mbbr_media.png",
        "brand": { "@type": "Brand", "name": "Nexus Solutions" },
        "manufacturer": { "@type": "Organization", "name": "Nexus Solutions" },
        "category": "Wastewater Treatment"
      }
    }
  ]
};

const StructuredData = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(localBusinessSchema)}
    </script>
    <script type="application/ld+json">
      {JSON.stringify(productListSchema)}
    </script>
  </Helmet>
);

export default StructuredData;
