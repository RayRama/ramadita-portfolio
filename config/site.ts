import { USER } from "@/data/user";

export const SITE_INFO = {
  name: USER.displayName,
  description: USER.bio,
  url: USER.website || process.env.APP_URL,
  ogImage: USER.ogImage,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#fff",
  dark: "#09090b",
};

export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/rayrama/ramadita-portfolio";
