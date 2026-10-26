import SEOHero from "../SEOComponents/SEOHero/SEOHero.component";
import SEOStartingPoint from "../SEOComponents/SEOStartingPoint/SEOStartingPoint.component";
import SEOStrategy from "../SEOComponents/SEOStrategy/SEOStrategy.component";
import SEOPerformance from "../SEOComponents/SEOPerformance/SEOPerformance.component";
import SEOQueries from "../SEOComponents/SEOQueries/SEOQueries.component";
import SEOPages from "../SEOComponents/SEOPages/SEOPages.component";
import SEOTimeline from "../SEOComponents/SEOTimeline/SEOTimeline.component";
import SEOTechnical from "../SEOComponents/SEOTechnical/SEOTechnical.component";
import SEOFindings from "../SEOComponents/SEOFindings/SEOFindings.component";
import CSNavigation from "../Components/CSNavigation/CSNavigation.component";
import { data } from "./seo.js";

export default function YodaSeoCaseStudy() {
  return (
    <main>
      <CSNavigation
        project="Yoda Safety Services"
        items={[
          {
            label: "Development",
            href: "/case-study/yoda-safety-services",
          },
          {
            label: "SEO",
            href: "/case-study/yoda-seo",
          },
        ]}
      />
      <SEOHero data={data} />
      <SEOStartingPoint data={data.startingPoint} />
      <SEOStrategy data={data.seoWork} />
      <SEOPerformance data={data.searchConsole} />
      <SEOQueries data={data.searchConsole} />
      <SEOPages data={data.searchConsole} />
      <SEOTechnical data={data.technicalCheckpoints} />
      <SEOTimeline data={data.milestones} />
      <SEOFindings data={data.findings} />
    </main>
  );
}
