import Image from "next/image";

import { SimpleTooltip } from "@/components/ui/tooltip";

import { TECH_STACK } from "../../data/tech-stack";

export function TechStackContent() {
  return (
    <div className="flex flex-wrap gap-7 select-none items-center justify-center">
      {TECH_STACK.map((tech) => {
        return (
          <SimpleTooltip key={tech.key} content={tech.title}>
            <a
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tech.title}
            >
              {tech.theme ? (
                <>
                  <Image
                    src={`/images/stack-icons/${tech.key}-light.svg`}
                    alt={`${tech.title} (light)`}
                    width={32}
                    height={32}
                    className="hidden [html.light_&]:block"
                  />
                  <Image
                    src={`/images/stack-icons/${tech.key}-dark.svg`}
                    alt={`${tech.title} (dark)`}
                    width={32}
                    height={32}
                    className="hidden [html.dark_&]:block"
                  />
                </>
              ) : (
                <Image
                  src={`/images/stack-icons/${tech.key}.svg`}
                  alt={tech.title}
                  width={32}
                  height={32}
                />
              )}
            </a>
          </SimpleTooltip>
        );
      })}
    </div>
  );
}
