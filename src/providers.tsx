"use client";

import { Toaster } from "sonner";
import { QueryProvider } from "./providers/Query.provider";
import ThemeProvider from "./providers/Theme.provider";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Toaster theme="light" position="top-center" richColors={true} />
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}
