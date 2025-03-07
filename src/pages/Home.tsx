import { useState } from "react";
import AddOns from "../components/addons/AddOns";
import PersonalInfo from "../components/personalinfo/PersonalInfo";
import SelectPlan from "../components/selectplan/SelectPlan";
import Sidebar from "../components/sidebar/Sidebar";
import Summary from "../components/summary/Summary";

const Home: React.FC = () => {

  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }
  return (
    <div className="flex justify-center items-center w-screen h-screen ">

      <div className="flex bg-white rounded-2xl shadow-lg gap-x-16 w-[375px] h-full md:w-[1000px] md:h-[600px] p-12">
        <Sidebar currentStep={currentStep} />

        <div className="flex-1 w-full  p-8">
          {currentStep === 1 && <PersonalInfo nextStep={nextStep}/>}
          {currentStep === 2 && <SelectPlan nextStep={nextStep} prevStep={prevStep}/>}
          {currentStep === 3 && <AddOns nextStep={nextStep} prevStep={prevStep}/>}
          {currentStep === 4 && <Summary prevStep={prevStep}/>}
        </div>


      </div>
    </div>
  );
};

export default Home;
