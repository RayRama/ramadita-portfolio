import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";

import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";

import { USER } from "@/data/user";

import { fontSans, fontMono } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    default: `${USER.displayName} | ${USER.jobTitle}`,
    template: `%s | ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [{ name: USER.displayName, url: SITE_INFO.url }],
  creator: USER.displayName,
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage['ramadita.theme'] === 'dark' || ((!('ramadita.theme' in localStorage) || localStorage['ramadita.theme'] === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
