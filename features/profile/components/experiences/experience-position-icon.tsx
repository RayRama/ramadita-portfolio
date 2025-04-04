import {
  BookOpenIcon,
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  GraduationCapIcon,
  LightbulbIcon,
  SchoolIcon,
  LucideProps,
} from "lucide-react";

import { ExperiencePositionIcon } from "../../types/experiences";

const iconMap: Record<
  ExperiencePositionIcon,
  React.ComponentType<LucideProps>
> = {
  code: CodeXmlIcon,
  research: BookOpenIcon,
  education: GraduationCapIcon,
  business: BriefcaseBusinessIcon,
  school: SchoolIcon,
  idea: LightbulbIcon,
};

export function ExperienceIcon({
  icon,
  ...props
}: {
  icon: ExperiencePositionIcon | undefined;
} & LucideProps) {
  const IconComponent = icon ? iconMap[icon] : BriefcaseBusinessIcon;

  return <IconComponent {...props} />;
}
