import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"
import { brandDescription, defaultKeywords, defaultOgImage, siteUrl } from "@/lib/seo"

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Bergs & Mark",
      url: siteUrl,
      logo: `${siteUrl}/favicon-512x512.png`,
      slogan: "Performance marketing agency for ambitious brands",
      foundingDate: "2023-01-01",
      founder: { "@type": "Person", name: "Atul Sahu", jobTitle: "Founder & Strategy Director" },
      knowsAbout: [
        "digital marketing agency India",
        "online presence management",
        "branding & marketing experts",
        "SEO services",
        "performance marketing agency",
      ],
      sameAs: [
        "https://www.linkedin.com/company/bergsnmark/about/?viewAsMember=true",
        "https://www.instagram.com/atulwn/",
        "https://x.com/atulvjd",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9301703738",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Bergs & Mark",
      image: `${siteUrl}/modern-digital-marketing-office-with-team-working.jpg`,
      url: siteUrl,
      telephone: "+91-9301703738",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "MG Road",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560001",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: "12.9716", longitude: "77.5946" },
      areaServed: { "@type": "AdministrativeArea", name: "India" },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Bergs & Mark",
      alternateName: "Bergs & Mark Digital Marketing Agency India",
      description: brandDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Bergs & Mark | Performance marketing agency in India",
      description: brandDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: defaultOgImage,
        width: 1200,
        height: 630,
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      serviceType: "Digital marketing, SEO services, branding, and online presence management",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: { "@type": "ContactPoint", telephone: "+91-9301703738" },
        serviceUrl: `${siteUrl}/contact`,
      },
      audience: { "@type": "Audience", audienceType: "Founders, CMOs, marketing leaders" },
      category: "Marketing",
      offers: {
        "@type": "Offer",
        url: `${siteUrl}/services`,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
        { "@type": "ListItem", position: 3, name: "Contact", item: `${siteUrl}/contact` },
        { "@type": "ListItem", position: 4, name: "About", item: `${siteUrl}/about` },
        { "@type": "ListItem", position: 5, name: "Work", item: `${siteUrl}/work` },
      ],
    },
  ],
} as const

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Bergs & Mark | Digital Marketing Agency India", template: "%s | Bergs & Mark" },
  description: brandDescription,
  keywords: defaultKeywords,
  applicationName: "Bergs & Mark",
  authors: [{ name: "Bergs & Mark", url: siteUrl }],
  creator: "Bergs & Mark",
  publisher: "Bergs & Mark",
  alternates: { canonical: siteUrl },
  themeColor: "#0f172a",
  viewport: { width: "device-width", initialScale: 1 },
  openGraph: {
    title: "Bergs & Mark | Performance Marketing Agency in India",
    description: brandDescription,
    url: siteUrl,
    siteName: "Bergs & Mark",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Bergs & Mark digital marketing agency team in India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bergs & Mark | Performance Marketing Agency in India",
    description: brandDescription,
    creator: "@bergsnmark",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" as="image" href="/professional-team-working-on-laptop-in-modern-offi.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <SmoothScrollProvider>
          <Navigation />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
