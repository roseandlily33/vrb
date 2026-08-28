// "use client";
// import React, { useState } from "react";
// import ProcessCircuit from "../case-study/[project]/Components/Extras/ProcessBar/ProcessCircuit";
// import { PROCESS_STEPS } from "./processSteps";
// import ProcessStepsMobile from "./ProcessStepsMobile";
import Expect from "./Expect/Expect.component";
import Tools from "./Tools/Tools.component";
import CTA4 from "../Components/CTA/CTA4/CTA4.component";
import ProcessFaq from "./Faq/ProcessFaq.component";
import Steps from "./Steps/Steps.component";

const ProcessInner = () => {
  // const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      <Steps />
      <Expect />
      <ProcessFaq />
      <Tools />
      <CTA4 />
    </>
  );
};

export default ProcessInner;
