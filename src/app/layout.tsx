import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Mooca Redes - Redes de Proteção em São Paulo | Instalação 24h",
  description:
    "Redes de proteção para janelas, sacadas e pets em São Paulo e ABC. Instalação em 24h, 5 anos de garantia, material certificado INMETRO. Orçamento grátis!",
  keywords: [
    "redes de proteção",
    "redes de proteção são paulo",
    "redes de proteção mooca",
    "redes de proteção abc",
    "proteção janelas",
    "proteção sacadas",
    "proteção pets",
    "redes certificadas inmetro",
    "instalação redes proteção",
    "orçamento redes proteção",
    "segurança infantil",
    "proteção crianças",
    "redes invisíveis",
    "garantia 5 anos",
    "santo andré redes",
    "são bernardo redes",
    "tatuapé redes proteção",
  ],
  authors: [{ name: "Mooca Redes" }],
  creator: "Mooca Redes",
  publisher: "Mooca Redes",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.moocaredes.com.br",
    siteName: "Mooca Redes",
    title: "Mooca Redes - Redes de Proteção em São Paulo | Instalação 24h",
    description:
      "Redes de proteção para janelas, sacadas e pets em São Paulo e ABC. Instalação em 24h, 5 anos de garantia, material certificado INMETRO. Orçamento grátis!",
    images: [
      {
        url: "/images/logo.png",
        width: 400,
        height: 400,
        alt: "Mooca Redes - Redes de Proteção em São Paulo",
      },
      {
        url: "/images/logo.png",
        width: 400,
        height: 400,
        alt: "Logo Mooca Redes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mooca Redes - Redes de Proteção em São Paulo",
    description:
      "Redes de proteção com instalação em 24h e 5 anos de garantia. Atendemos São Paulo e ABC. Orçamento grátis!",
    images: ["/images/logo.png"],
    creator: "@moocaredes",
  },
  alternates: {
    canonical: "https://www.moocaredes.com.br",
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "São Paulo",
    "geo.position": "-23.5505;-46.6333",
    ICBM: "-23.5505, -46.6333",
    "business:contact_data:street_address": "Região da Mooca",
    "business:contact_data:locality": "São Paulo",
    "business:contact_data:region": "SP",
    "business:contact_data:postal_code": "03101",
    "business:contact_data:country_name": "Brasil",
    "business:contact_data:phone_number": "+5511963403041",
    "business:contact_data:website": "https://www.moocaredes.com.br",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mooca Redes",
  description: "Empresa especializada em redes de proteção para janelas, sacadas e pets em São Paulo e ABC Paulista",
  url: "https://www.moocaredes.com.br/",
  telephone: "+5511963403041",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5505,
    longitude: -46.6333,
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-14:00"],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -23.5505,
      longitude: -46.6333,
    },
    geoRadius: "50000",
  },
  areaServed: [
    "São Paulo",
    "Santo André",
    "São Bernardo do Campo",
    "São Caetano do Sul",
    "Diadema",
    "Mauá",
    "Ribeirão Pires",
    "Rio Grande da Serra",
  ],
  priceRange: "$$",
  image: "https://www.moocaredes.com.br/images/logo.png",
  logo: "https://www.moocaredes.com.br/images/logo.png",
  sameAs: ["https://wa.me/5511963403041"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Redes de Proteção",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Redes de Proteção para Janelas",
          description: "Instalação de redes de proteção certificadas para janelas residenciais",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Redes de Proteção para Sacadas",
          description: "Proteção completa para sacadas e varandas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Redes de Proteção para Pets",
          description: "Redes especiais para proteção de animais domésticos",
        },
      },
    ],
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Maria Silva",
      },
      reviewBody: "Excelente serviço! A instalação foi rápida e o resultado ficou perfeito.",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "5",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#552020" />
        <meta name="msapplication-TileColor" content="#552020" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo.png" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://static.hotjar.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Hotjar Tracking Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:6369111,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TBXM61GVP9" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TBXM61GVP9');
          `}
        </Script>
      </body>
    </html>
  )
}
