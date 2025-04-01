import { LinkIcon, MapPinIcon } from "lucide-react";

import { USER } from "@/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";

import { IntroItem } from "./intro-item";
import { EmailItem } from "./email-item";
import { JobItem } from "./job-item";

export function Overview() {
  return (
    <Panel>
      <h3 className="sr-only">Overview</h3>
      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        {USER.address && (
          <IntroItem icon={<MapPinIcon />} content={USER.address} />
        )}

        {USER.email && <EmailItem email={USER.email} />}

        {USER.website && (
          <IntroItem
            icon={<LinkIcon />}
            content={urlToName(USER.website)}
            href={USER.website}
          />
        )}
      </PanelContent>
    </Panel>
  );
}
