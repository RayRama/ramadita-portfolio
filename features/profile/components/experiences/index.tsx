import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React from "react";

import { EXPERIENCES } from "../../data/experience";

import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ExperienceItem } from "./experience-item";

export function Experiences() {
  const defaultValue = EXPERIENCES.flatMap((experience) =>
    experience.positions
      .filter((position) => position.expanded)
      .map((position) => position.id)
  );

  return (
    <Panel id="experience" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>Experiences</PanelTitle>
      </PanelHeader>

      <AccordionPrimitive.Root
        type="multiple"
        defaultValue={defaultValue}
        asChild
      >
        <div className="px-4">
          {EXPERIENCES.map((experience, index) => {
            return <ExperienceItem key={index} experience={experience} />;
          })}
        </div>
      </AccordionPrimitive.Root>
    </Panel>
  );
}
