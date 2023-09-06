import Image from "next/image";
import React, { useState } from "react";
import ButtonLg from "../design/Buttons/ButtonLg";

function UploadMedia({ propertyData, handleFormData, moveToNextStep }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    setSelectedImages(Array.from(files));
  };

  const handleNextStep = () => {
    // Handle image upload logic here, if needed
    handleFormData({ images: selectedImages });
    moveToNextStep();
  };

  return (
    <>
      <h2>Upload Images</h2>
      <input
        type="file"
        multiple
        onChange={handleImageChange}
        accept="image/*"
      />

      <div>
        {selectedImages.map((image, index) => (
          <div key={index} style={{ display: "inline-block", margin: "5px" }}>
            <Image
              src={URL.createObjectURL(image)}
              alt={`Image ${index + 1}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
      {/* Next Step Button */}
      <div className={`flex justify-end`}>
        <ButtonLg
          type={`button`}
          onClick={handleNextStep} // Move to the next step
          className={`bg-secondary-500 border-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 text-white`}
        >
          Next Step
        </ButtonLg>
      </div>
    </>
  );
}

export default UploadMedia;
