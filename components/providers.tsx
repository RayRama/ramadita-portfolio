"use client";

import { AppProgressProvider } from "@bprogress/next";
import { ThemeProvider } from "next-themes";
import { Provider as JotaiProvider } from "jotai";

import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="ramadita.theme"
      >
        <AppProgressProvider
          color="#2563eb"
          options={{
            showSpinner: false,
          }}
          height="2px"
          delay={500}
        >
          {children}
        </AppProgressProvider>
        <Toaster />
      </ThemeProvider>
    </JotaiProvider>
  );
}
