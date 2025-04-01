import { Slot } from "@radix-ui/react-slot";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleList<T>({
  items,
  maxItems = 3,
  keyExtractor,
  renderItem,
}: {
  items: T[];
  maxItems?: number;
  keyExtractor?: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
}) {
  return (
    <Collapsible>
      {items.slice(0, maxItems).map((item, index) => (
        <Slot
          key={
            typeof keyExtractor === "function"
              ? keyExtractor(item)
              : index.toString()
          }
          className="border-b border-grid"
        >
          {renderItem(item)}
        </Slot>
      ))}

      <CollapsibleContent>
        {items.slice(maxItems).map((item, index) => (
          <Slot
            key={
              typeof keyExtractor === "function"
                ? keyExtractor(item)
                : index + maxItems
            }
            className="border-b border-grid"
          >
            {renderItem(item)}
          </Slot>
        ))}
      </CollapsibleContent>

      <CollapsibleTrigger asChild>
        <Button className="group/collapsible-trigger mx-auto -mt-px flex">
          <ChevronDownIcon className="group-[&[data-state=open]]/collapsible-trigger:rotate-180" />

          <span className="hidden group-[&[data-state=closed]]/collapsible-trigger:block">
            Show more {items.length - maxItems}
          </span>

          <span className="hidden group-[&[data-state=open]]/collapsible-trigger:block">
            Show less {items.length - maxItems}
          </span>
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
