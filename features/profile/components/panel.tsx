import { Slot } from "@radix-ui/react-slot";
import React from "react";

import { cn } from "@/lib/cn";

function Panel({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="panel"
      className={cn(
        "screen-line-before screen-line-after border-x border-grid",
        className
      )}
      {...props}
    />
  );
}

function PanelHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-header"
      className={cn("screen-line-after px-4", className)}
      {...props}
    />
  );
}

function PanelTitle({
  className,
  asChild,
  ...props
}: React.ComponentProps<"h3"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h3";

  return (
    <Comp
      data-slot="panel-title"
      className={cn("font-heading text-4xl font-medium", className)}
      {...props}
    />
  );
}

function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-content"
      className={cn("p-4", className)}
      {...props}
    />
  );
}

export { Panel, PanelHeader, PanelTitle, PanelContent };
