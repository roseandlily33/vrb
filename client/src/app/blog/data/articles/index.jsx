import { seoArticles } from "./seoArticles";
import { socialMediaArticles } from "./socialMediaArticles";
import { uxUiDevelopmentArticles } from "./uxUiDevelopmentArticles";
import { webDesignArticles } from "./webDesignArticles";
import { websiteMaintenanceArticles } from "./websiteMaintenanceArticles";
import { websiteRedesignArticles } from "./websiteRedesignArticles";

export {
  seoArticles,
  socialMediaArticles,
  uxUiDevelopmentArticles,
  webDesignArticles,
  websiteMaintenanceArticles,
  websiteRedesignArticles,
};

export const articles = [
  ...websiteRedesignArticles,
  ...webDesignArticles,
  ...uxUiDevelopmentArticles,
  ...seoArticles,
  ...socialMediaArticles,
  ...websiteMaintenanceArticles,
];