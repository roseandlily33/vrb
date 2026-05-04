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
      <ProcessHero
        title="Explore the VRB Website Process"
        pageList={eachPageList}
        description="  See how each page of the VRB project was designed and built. Jump to any section below to view details, progress, and visuals for each part of the site."
      />
      {eachPageList.map((page, index) => (
        <EachPage key={index} page={page} index={index} />
      ))}
      <CTA4 />
    </main>
  );
};

export default VRBProcess;
