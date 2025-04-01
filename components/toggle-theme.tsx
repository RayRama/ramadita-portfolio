"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";

import { useTheme } from "next-themes";
import { useCallback } from "react";

import { Button } from "@/components/ui/button";

import { META_THEME_COLORS } from "@/config/site";
import { useMetaColor } from "@/hooks/use-meta-color";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const { setMetaColor } = useMetaColor();

  const handleToggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
    setMetaColor(
      theme === "dark" ? META_THEME_COLORS.light : META_THEME_COLORS.dark
    );
  }, [theme, setTheme, setMetaColor]);

  return (
    <Button variant="outline" size="icon" onClick={handleToggleTheme}>
      <MoonStarIcon className="hidden [html.dark_&]:block" />
      <SunIcon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
