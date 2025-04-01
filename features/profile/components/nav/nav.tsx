import React from "react";

import { cn } from "@/lib/cn";

import { NAV_LINKS } from "../../config/nav";
import { NavItem } from "./nav-item";

export function Nav({
  className,
  activeId,
}: {
  className?: string;
  activeId: string | null;
}) {
  return (
    <nav
      className={cn(
        "flex h-8 items-center gap-3 font-mono text-sm text-muted-foreground",
        className
      )}
    >
      {NAV_LINKS.map(({ label, href }) => {
        const itemId = href?.split("#")[1] ?? "";
        const isActive = activeId === itemId;
        return (
          <NavItem key={href} href={href} isActive={isActive}>
            {label}
          </NavItem>
        );
      })}
    </nav>
  );
}
