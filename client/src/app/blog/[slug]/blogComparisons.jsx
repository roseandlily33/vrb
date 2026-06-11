import { comparisonExamples } from "../data/tooMuchVsTooLittle";

import CTAExamples from "../examples/CTA/CTAExamples";
import ContentExamples from "../examples/Content/Content";
import WhitespaceExamples from "../examples/Whitespace/whitespace";
import NavigationExamples from "../examples/Navigation/NavigationExample";
import AnimationExamples from "../examples/Animations/AnimationExamples";
import FormFieldExamples from "../examples/FormFields/FormFieldExample";
import ColourExamples from "../examples/Colours/Colours";

export default function BlogComparisonExample({ id }) {
  console.log('id', id);
  const example = comparisonExamples.find((example) => example.id === id);
  console.log('example', example);
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

    default:
      return null;
  }
}
