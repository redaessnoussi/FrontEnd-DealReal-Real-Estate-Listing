import { useState } from "react";
import UploadMedia from "../UploadMedia/UploadMedia";
import LocationStep from "../LocationStep/LocationStep";
import GeneralStep from "../GeneralStep/GeneralStep";

function StepsSection({ steps }) {
  const stepsCount = steps.length;
  const [currentStep, setCurrentStep] = useState(0);
  const [category, setcategory] = useState("");
  const [dropdown, setdropdown] = useState(false);

  console.log(currentStep);

  const Steps = ({ step, count }) => (
    <>
      <div className="md:px-2 lg:px-4 w-5/12 md:w-auto">
        <div className="bg-white lg:px-10 md:px-6 p-2 rounded-lg">
          <span className="text-primary-700 font-semibold">
            {count + 1}. {step}
          </span>
        </div>
      </div>
      {count < stepsCount - 1 && (
        <div className="flex-auto hidden md:block">
          <span className="block border-t-2"></span>
        </div>
      )}
    </>
  );

  // Function to move to the next step
  const moveToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const rentalSetup = (type) => {
    setrentalType(type);
    setdropdown(!dropdown);
  };

  return (
    <>
      {/* steps section */}
      <div className="bg-primary-700 p-4 rounded-lg flex md:justify-between items-center gap-y-4 flex-wrap justify-around">
        {steps.map((step, key) => (
          <Steps key={key} count={key} step={step} />
        ))}
      </div>
      <div className="py-8 md:px-20">
        {/* General Section */}
        {currentStep === 0 && ( // Conditionally render Media section
          <GeneralStep moveToNextStep={moveToNextStep} />
        )}

        {/* Media Section */}
        {currentStep === 1 && ( // Conditionally render Media section
          <UploadMedia moveToNextStep={moveToNextStep} />
        )}

        {/* Location Section */}

        {currentStep === 2 && ( // Conditionally render Location section
          <LocationStep moveToNextStep={moveToNextStep} />
        )}
      </div>
    </>
  );
}

export default StepsSection;
