import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  LightbulbIcon,
} from "lucide-react";

import { IntroItem } from "./intro-item";

function getJobIcon(title: string) {
  if (/(developer|engineer)/gi.test(title)) {
    return <CodeXmlIcon className="size-4" />;
  }
  if (/(lead|manager)/gi.test(title)) {
    return <LightbulbIcon className="size-4" />;
  }
  return <BriefcaseBusinessIcon className="size-4" />;
}

export function JobItem({
  title,
  company,
  website,
}: {
  title: string;
  company: string;
  website?: string;
}) {
  return (
    <IntroItem
      icon={getJobIcon(title)}
      content={
        <>
          {title} @
          <a
            href={website}
            className="ml-0.5 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {company}
          </a>
        </>
      }
    />
  );
}
