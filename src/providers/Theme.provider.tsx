"use client";

import type { PropsWithChildren } from "react";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";

export default function ThemeProvider({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <NextUIProvider className="min-h-full w-full" navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
