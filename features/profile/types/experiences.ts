export type Experience = {
  company: string;
  companyLogo?: string;
  companyUrl?: string;
  positions: ExperiencePosition[];
  current?: boolean;
};

export type ExperiencePosition = {
  id: string;
  title: string;
  year: string;
  employmentType?: string;
  description?: string;
  icon?: ExperiencePositionIcon;
  skills?: string[];
  expanded?: boolean;
};

export type ExperiencePositionIcon =
  | "code"
  | "research"
  | "education"
  | "business"
  | "school"
  | "idea";
