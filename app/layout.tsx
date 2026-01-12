import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Not critical, load later
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "AAC Glass Films | Premium Glass Film Services in Hyderabad",
    template: "%s | AAC Glass Films",
  },
  description:
    "Transform your space with AAC Glass Films. Expert glass film installation in Hyderabad & Telangana. Frosted, decorative, safety films. Call 9908119150.",
  metadataBase: new URL("https://aacglassfilms.com"),
  alternates: {
    canonical: "/",
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
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aacglassfilms.com",
    siteName: "AAC Glass Films",
    title: "AAC Glass Films | Premium Glass Film Services in Hyderabad",
    description:
      "Transform your space with AAC Glass Films. Expert glass film installation in Hyderabad & Telangana. Frosted, decorative, safety films.",
    images: [
      {
        url: "/services/images/Modernofficewithfrostedpartitions.png",
        width: 1200,
        height: 630,
        alt: "AAC Glass Films - Professional Glass Film Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAC Glass Films | Premium Glass Film Services in Hyderabad",
    description:
      "Transform your space with AAC Glass Films. Expert glass film installation in Hyderabad & Telangana.",
    images: ["/services/images/Modernofficewithfrostedpartitions.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external services */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        
        {/* Favicon */}
        <link rel="icon" href="/AAglassfilmlogo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/AAglassfilmlogo.jpeg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
