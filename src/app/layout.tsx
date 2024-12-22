import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";

import Providers from "@/providers";
import { cn } from "@nextui-org/react";

import "@/globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-latest.js" />
      </head>

      <body className={cn(GeistSans.className, "notranslate")}>
        <Providers>{children}</Providers>
      </body>

      {/* <GoogleTagManager gtmId="GTM-WS2SZG36" />
      <GoogleAnalytics gaId="G-RF2M0L8FZL" /> */}
    </html>
  );
}
