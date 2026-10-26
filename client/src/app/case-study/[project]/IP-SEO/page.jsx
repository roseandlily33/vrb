import SEOHero from "../SEOComponents/SEOHero/SEOHero.component";
import SEOStartingPoint from "../SEOComponents/SEOStartingPoint/SEOStartingPoint.component";
import SEOStrategy from "../SEOComponents/SEOStrategy/SEOStrategy.component";
import SEOPerformance from "../SEOComponents/SEOPerformance/SEOPerformance.component";
import SEOQueries from "../SEOComponents/SEOQueries/SEOQueries.component";
import SEOPages from "../SEOComponents/SEOPages/SEOPages.component";
import SEOTimeline from "../SEOComponents/SEOTimeline/SEOTimeline.component";
import SEOTechnical from "../SEOComponents/SEOTechnical/SEOTechnical.component";
import SEOFindings from "../SEOComponents/SEOFindings/SEOFindings.component";
import { data } from "./seo.js";

export default function IPSeoCaseStudy() {
  return (
    <main>
       <CSNavigation
        project="Inspection Pal"
        items={[
          {
            label: "Development",
            href: "/case-study/inspection-pal",
          },
          {
            label: "SEO",
            href: "/case-study/ip-seo",
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
