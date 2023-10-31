import React, { useState, useEffect } from "react";
import UploadMedia from "../UploadMedia/UploadMedia";
import LocationStep from "../LocationStep/LocationStep";
import GeneralStep from "../GeneralStep/GeneralStep";
import axios from "axios";

function StepsSection({ steps }) {
  const stepsCount = steps.length;
  const [locationDataReceived, setLocationDataReceived] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [propertyData, setPropertyData] = useState({
    purpose: "",
    category: "",
    price: "",
    title: "",
    location: {
      country: "",
      city: "",
      area: "",
      street: "",
    },
    images: [
      {
        url: "",
      },
    ],
  });

  const handleFormData = (data) => {
    setPropertyData({ ...propertyData, ...data });

    // Check if location data is received
    if (data.location) {
      setLocationDataReceived(true);
    }
  };

  const submitListing = async () => {
    // Create FormData object to send data
    const formData = new FormData();

    propertyData.images.forEach((imageObj) => {
      console.log("2");
      console.log(imageObj.url);
      // Append each image URL as a separate field
      formData.append("images[]", imageObj.url);
    });

    // Append other form data
    formData.append("purpose", propertyData.purpose);
    formData.append("category", propertyData.category);
    formData.append("price", propertyData.price);
    formData.append("title", propertyData.title);

    formData.append("location[country]", propertyData.location.country);
    formData.append("location[city]", propertyData.location.city);
    formData.append("location[area]", propertyData.location.area);
    formData.append("location[street]", propertyData.location.street);

    try {
      // Make an API request to upload images and other data
      await axios.post(
        "https://deal-real-real-estate-listing.vercel.app/api/add-property",
        formData
      );

      // Handle success, e.g., redirect to a success page
      console.log("added succusfuly");
    } catch (error) {
      // Handle error, e.g., display an error message
      console.log(error);
    }
  };

  useEffect(() => {
    if (locationDataReceived) {
      submitListing();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationDataReceived]);

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

  // Render the appropriate step based on currentStep
  let stepComponent;
  /* General Section */
  switch (currentStep) {
    case 0:
      stepComponent = (
        <GeneralStep
          handleFormData={handleFormData}
          moveToNextStep={moveToNextStep}
        />
      );
      break;
      {
        /* Media Section */
      }
    case 1:
      stepComponent = (
        <UploadMedia
          handleFormData={handleFormData}
          moveToNextStep={moveToNextStep}
        />
      );
      break;
      {
        /* Location Section */
      }

    case 2:
      stepComponent = (
        <LocationStep
          handleFormData={handleFormData}
          moveToNextStep={moveToNextStep}
        />
      );
      break;
    default:
      stepComponent = null;
  }

  return (
    <>
      {/* steps section */}
      <div className="bg-primary-700 p-4 rounded-lg flex md:justify-between items-center gap-y-4 flex-wrap justify-around">
        {steps.map((step, key) => (
          <Steps key={key} count={key} step={step} />
        ))}
      </div>
      <div className="py-8 md:px-20">{stepComponent}</div>
    </>
  );
}

export default StepsSection;
