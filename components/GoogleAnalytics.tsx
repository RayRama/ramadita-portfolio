"use client";

import Script from "next/script";
// import { useEffect } from "react";

// Menambahkan type definition untuk dataLayer dan gtag
// declare global {
//   interface Window {
//     dataLayer: any[];
//     gtag: (...args: any[]) => void;
//   }
// }

export default function GoogleAnalytics({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) {
  // useEffect(() => {
  //   // Pastikan window tersedia (client-side only)
  //   if (typeof window !== "undefined") {
  //     window.dataLayer = window.dataLayer || [];
  //     window.gtag = function gtag(...args: any[]) {
  //       window.dataLayer.push(arguments);
  //     };
  //     window.gtag("js", new Date());
  //     window.gtag("config", GA_MEASUREMENT_ID);
  //   }
  // }, [GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}
