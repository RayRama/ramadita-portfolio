import { cn } from "@/lib/cn";

export function Hero() {
  return (
    <div
      className={cn(
        "aspect-[2/1] border-x border-grid select-none relative",
        "screen-line-before screen-line-after after:-bottom-px",
        "bg-zinc-950/0.75 bg-[image:radial-gradient(var(--pattern-foreground)_1px,_transparent_0)] bg-[size:8px_8px] [--pattern-foreground:var(--color-zinc-950)]/5 sm:bg-[size:10px_10px] dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
      )}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="mb-4 font-heading text-3xl md:text-4xl font-medium tracking-tight text-center">
          Hello World!
        </h2>
        {/* <p className="max-w-2xl text-muted-foreground text-center">
          &quot;Cogito, ergo sum&quot; - René Descartes
        </p> */}
      </div>
    </div>
  );
}
