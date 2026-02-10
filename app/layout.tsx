import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://biofert.com.mx";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a5f",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Biofert - Clínica de Fertilidad en CDMX | Consulta desde $499",
    template: "%s | Biofert",
  },
  description:
    "Clínica de fertilidad líder en Ciudad de México. Más de 7,000 familias formadas. Tratamientos de FIV, inseminación artificial y ovodonación. Consulta inicial desde $499 con seminograma incluido.",
  keywords: [
    "clínica de fertilidad",
    "fertilidad CDMX",
    "fertilización in vitro",
    "FIV México",
    "inseminación artificial",
    "ovodonación",
    "tratamiento de fertilidad",
    "reproducción asistida",
    "embarazo",
    "infertilidad",
    "Biofert",
    "clínica fertilidad Roma Sur",
  ],
  authors: [{ name: "Biofert" }],
  creator: "Biofert",
  publisher: "Biofert",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-icon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "Biofert",
    title: "Biofert - Clínica de Fertilidad en CDMX | Consulta desde $499",
    description:
      "Clínica de fertilidad líder en Ciudad de México. Más de 7,000 familias formadas. Tratamientos de FIV, inseminación artificial y ovodonación.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Biofert - Clínica de Fertilidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Biofert_",
    creator: "@Biofert_",
    title: "Biofert - Clínica de Fertilidad en CDMX",
    description:
      "Más de 7,000 familias formadas. Consulta inicial desde $499 con seminograma incluido.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: siteUrl,
  },
  category: "health",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Biofert",
              description: "Clínica de fertilidad líder en Ciudad de México con más de 7,000 familias formadas.",
              url: siteUrl,
              logo: `${siteUrl}/biofert.svg`,
              image: `${siteUrl}/og-image.jpg`,
              telephone: "+52-55-2988-7336",
              email: "contacto@biofert.com.mx",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tlacotalpan 36",
                addressLocality: "Roma Sur",
                addressRegion: "Ciudad de México",
                postalCode: "06760",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 19.4058,
                longitude: -99.1617,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              priceRange: "$$$",
              medicalSpecialty: "Reproductive Medicine",
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Fertilización In Vitro (FIV)",
                  description: "Tratamiento de reproducción asistida de alta complejidad",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Inseminación Artificial",
                  description: "Tratamiento de baja complejidad para lograr el embarazo",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Ovodonación",
                  description: "Tratamiento con óvulos de donante",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "200",
                bestRating: "5",
              },
              sameAs: [
                "https://www.facebook.com/biofert.com.mx",
                "https://www.instagram.com/biofert_/",
                "https://x.com/Biofert_",
                "https://www.tiktok.com/@biofert.reproduccion",
                "https://www.youtube.com/@biofert",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
