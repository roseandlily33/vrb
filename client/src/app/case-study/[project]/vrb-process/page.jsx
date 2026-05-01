import React from "react";
import { eachPageList } from "./pageList";
import CTA4 from "../../../Components/CTA/CTA4/CTA4.component";
import EachPage from "./EachPage/EachPage.component";
import ProcessHero from "./ProcessHero/ProcessHero.component";
import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";

const VRBProcess = () => {
  return (
    <main>
      <Breadcrumbs current="VRB Process" />
      <ProcessHero />
      {eachPageList.map((page, index) => (
        <EachPage key={index} page={page} index={index} />
      ))}
      <CTA4 />
    </main>
  );
};

export default VRBProcess;
