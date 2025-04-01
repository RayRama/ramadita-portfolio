"use client";

import { ChevronUpIcon } from "lucide-react";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function ScrollTop({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 100);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <Button
          key="scroll-top"
          className={cn(
            "fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] z-50 size-10 lg:right-8 lg:bottom-[calc(2rem+env(safe-area-inset-bottom,0px))]",
            className
          )}
          size="icon"
          asChild
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          {...props}
        >
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronUpIcon className="size-6" />
          </motion.button>
        </Button>
      )}
    </AnimatePresence>
  );
}
