import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadMedia from "components/UploadMedia/UploadMedia";
import LocationStep from "components/LocationStep/LocationStep";
import GeneralStep from "components/GeneralStep/GeneralStep";
import SuccessAdd from "components/SuccessAdd/SuccessAdd";
//require("dotenv").config();

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
    createdAt: "",
    description: "",
    bedrooms: "",
    bathrooms: "",
    garage: true,
    garageSize: "",
    propertySize: "",
    yearBuilt: "",
    specialId: "",
  });
  const apiURL = process.env.API_URL;

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
      console.log(imageObj.url);
      // Append each image URL as a separate field
      formData.append("images[]", imageObj.url);
    });

    // Append other form data
    formData.append("purpose", propertyData.purpose);
    formData.append("category", propertyData.category);
    formData.append("price", propertyData.price);
    formData.append("title", propertyData.title);
    formData.append("description", propertyData.description);
    formData.append("bedrooms", propertyData.bedrooms);
    formData.append("bathrooms", propertyData.bathrooms);
    formData.append("propertySize", propertyData.propertySize);
    formData.append("yearBuilt", propertyData.yearBuilt);
    formData.append("garage", propertyData.garage);
    formData.append("garageSize", propertyData.garageSize);

    formData.append("location[country]", propertyData.location.country);
    formData.append("location[city]", propertyData.location.city);
    formData.append("location[area]", propertyData.location.area);
    formData.append("location[street]", propertyData.location.street);

    try {
      // Make an API request to upload images and other data
      await axios.post(`${apiURL}/api/add-property`, formData);

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

    case 3:
      stepComponent = <SuccessAdd />;
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
