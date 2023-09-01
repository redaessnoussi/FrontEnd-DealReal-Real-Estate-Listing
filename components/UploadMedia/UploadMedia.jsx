import Image from "next/image";
import React, { useState } from "react";
import ButtonLg from "../design/Buttons/ButtonLg";

function UploadMedia({ moveToNextStep }) {
  const [selectedImages, setSelectedImages] = useState([]); // To store selected images

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imagesArray = Array.from(files);

    setSelectedImages(imagesArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Upload selectedImages to your backend or storage service
    // You can use FormData to send images to the server
    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append("images", image);
    });

    // Now you can make an API request to upload images
    // Example using Axios:
    // axios.post("/api/upload", formData);
  };

  return (
    <div>
      <h2>Upload Images</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          multiple
          onChange={handleImageChange}
          accept="image/*"
        />
      </form>
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
          type={`submit`}
          onClick={() => moveToNextStep()} // Move to the next step
          className={`bg-secondary-500 border-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 text-white`}
        >
          Next Step
        </ButtonLg>
      </div>
    </div>
  );
}

export default UploadMedia;
