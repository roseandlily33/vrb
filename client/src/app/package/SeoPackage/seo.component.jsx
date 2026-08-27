import WhatIOffer from "./WhatIOffer/WhatIOffer.component";
import ServicesIncluded from "./ServicesIncluded/ServicesIncluded.component";
import FAQSeo from "./FAQSEO/SeoFaq.component";
import DoYouNeedSeo from "./DoYouNeedSeo/DoYouNeedSeo.component";
import MySEOProcess from "./MySEOProcess/MySeoProcess.component";
import AISeo from "./AISEO/AISeo.component";
import WhatYouReceive from './WhatYouRecieve/WhatYouRecieve.component';
import CTA from '../../Components/CTA/CTA.component'

const SEOSection = () => {
  return (
    <>
      <ServicesIncluded />
      <DoYouNeedSeo />
      <WhatIOffer />
      <MySEOProcess />
      <AISeo />
      <WhatYouReceive />
      <FAQSeo />
      <CTA />
    </>
  );
};

export default SEOSection;
