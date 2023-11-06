import Image from "next/image";
import React, { useState } from "react";
import ButtonLg from "components/design/Buttons/ButtonLg";
import { storage } from "../../firebase/storage"; // Import the Firebase storage instance
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function UploadMedia({ handleFormData, moveToNextStep }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    setSelectedImages(Array.from(files));
  };

  async function handleNextStep() {
    try {
      const uploadedImages = [];

      // Iterate through selected images and upload each one individually
      for (const image of selectedImages) {
        console.log("hada front end");
        console.log(image);

        const fileName = `${Date.now()}-${image.name}`;
        const storageRef = ref(storage, `/images/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        // Await the completion of each upload task
        await uploadTask;

        // Get the download URL for the uploaded image
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        uploadedImages.push(downloadURL);
        console.log("File available at:", downloadURL);
      }

      console.log(uploadedImages);

      // Handle the form data with the uploaded image URLs
      handleFormData({
        images: uploadedImages.map((url) => ({ url })),
      });

      moveToNextStep();
    } catch (error) {
      console.error("Error during image upload:", error);
    }
  }

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
