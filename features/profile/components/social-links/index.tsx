import React from "react";

import { SOCIAL_LINKS } from "@/features/profile/data/social-links";

import { Panel } from "../panel";
import { SocialLinkItems } from "./social-link-items";

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social Links</h2>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-grid"></div>
          <div className="border-l border-grid"></div>
        </div>

        <div className="grid grid-cols gap-4 grid-cols-2">
          {SOCIAL_LINKS.map((link) => (
            <SocialLinkItems key={link.href} {...link} />
          ))}
        </div>
      </div>
    </Panel>
  );
}
