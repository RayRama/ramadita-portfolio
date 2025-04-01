export type Experience = {
  company: string;
  companyLogo?: string;
  companyUrl?: string;
  position?: ExperiencePosition[];
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
  | "design"
  | "education"
  | "business"
  | "school"
  | "idea";
