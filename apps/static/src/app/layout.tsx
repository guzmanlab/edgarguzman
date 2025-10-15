import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

type RootLayoutProps = React.PropsWithChildren;

const inter = Inter({
  subsets: ["latin"],
});

export function viewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: [
      {
        media: "(prefers-color-scheme: light)",
        color: "white",
      },
      {
        media: "(prefers-color-scheme: dark)",
        color: "black",
      },
    ],
  };
}

export function metadata(): Metadata {
  return {
    title: {
      template: "%s : Edgar Guzman",
      default: "Edgar Guzman",
    },
    description: "electronic commerce infrastructure in a monorepo",
    keywords: [
      "open-source",
      "typescript",
      "eslint",
      "commerce",
      "nextjs",
      "postgresql",
      "prettier",
      "prisma",
      "tailwindcss",
      "trpc",
      "next-auth",
      "zod",
      "turborepo",
    ],
    icons: [
      {
        rel: "icon",
        url: "/images/ed-guz.svg",
      },
    ],
    authors: [
      {
        name: "Edgar Guzman",
      },
    ],
    creator: "Edgar Guzman",
    // metadataBase: new URL(""),
    openGraph: {
      title: "Edgar Guzman",
      description: "electronic commerce infrastructure in a monorepo",
      url: "https://edgarguzman.co",
      siteName: "Edgar Guzman",
      images: [
        {
          url: "/images/opengraph-image.svg",
          width: 1200,
          height: 630,
          alt: "Edgar Guzman",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Edgar Guzman",
      description: "electronic commerce infrastructure in a monorepo",
      images: ["/images/opengraph-image.svg"],
    },
    appleWebApp: {
      title: "Edgar Guzman",
      statusBarStyle: "default",
    },
  };
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
