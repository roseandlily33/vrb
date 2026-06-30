import { comparisonExamples } from "../data/tooMuchVsTooLittle";

import CTAExamples from "../examples/CTA/CTAExamples";
import ContentExamples from "../examples/Content/Content";
import WhitespaceExamples from "../examples/Whitespace/whitespace";
import NavigationExamples from "../examples/Navigation/NavigationExample";
import AnimationExamples from "../examples/Animations/AnimationExamples";
import FormFieldExamples from "../examples/FormFields/FormFieldExample";
import ColourExamples from "../examples/Colours/Colours";
import PricingOptionExamples from "../examples/PricingOptions/PricingOptions";
import TestimonialExample from "../examples/Testimonial/testimonial";
import NotificationExamples from "../examples/Notifications/Notifications";
import HomepageSectionExamples from "../examples/HomepageSections/HomepageSections";
import TrustSignalExamples from "../examples/TrustSignals/TrustSignals";
import SocialProofExamples from "../examples/SocialProof/SocialProof";
import PopupExamples from "../examples/Popups/Popups";
import FeatureExamples from "../examples/Features/Features";

export default function BlogComparisonExample({ id }) {
  // console.log("id", id);
  const example = comparisonExamples.find((example) => example.id === id);
  // console.log("example", example);
  if (!example) return null;

  switch (id) {
    case "cta":
      return <CTAExamples data={example} />;

    case "content":
      return <ContentExamples data={example} />;

    case "whitespace":
      return <WhitespaceExamples data={example} />;

    case "navigation":
      return <NavigationExamples data={example} />;

    case "animations":
      return <AnimationExamples data={example} />;

    case "form-fields":
      return <FormFieldExamples data={example} />;
    case "colours":
      return <ColourExamples data={example} />;
    case "testimonials":
      return <TestimonialExample data={example} />;
    case "pricing-options":
      return <PricingOptionExamples data={example} />;
    case "notifications":
      return <NotificationExamples data={example} />;
    case "homepage-sections":
      return <HomepageSectionExamples data={example} />;
    case "trust-signals":
      return <TrustSignalExamples data={example} />;
    case "social-proof":
      return <SocialProofExamples data={example} />;
    case "popups":
      return <PopupExamples data={example} />;
    case "features":
      return <FeatureExamples data={example} />;

    default:
      return null;
  }
}
