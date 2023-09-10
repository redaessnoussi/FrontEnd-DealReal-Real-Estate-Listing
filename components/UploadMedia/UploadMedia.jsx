import Image from "next/image";
import React, { useState } from "react";
import ButtonLg from "../design/Buttons/ButtonLg";
import { storage } from "../../firebase/storage"; // Import the Firebase storage instance
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function UploadMedia({ handleFormData, moveToNextStep }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    setSelectedImages(Array.from(files));
  };
  // console.log(storage);
  async function handleNextStep() {
    try {
      const uploadedImages = [];

      // Iterate through selected images
      for (const image of selectedImages) {
        const fileName = `${Date.now()}-${image.name}`;
        const storageRef = ref(storage, `/images/${fileName}`);

        // Create an upload task
        const uploadTask = uploadBytesResumable(storageRef, image);

        // Listen for state changes, including progress updates
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Calculate and update progress
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(`Upload is ${progress}% done`);
          },
          (error) => {
            console.error("Error during upload:", error);
          },
          async () => {
            // Upload complete, get the public URL
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            uploadedImages.push(downloadURL);
            console.log("File available at:", downloadURL);

            // Check if all images are uploaded
            if (uploadedImages.length === selectedImages.length) {
              console.log(uploadedImages);
              // Handle the form data with the uploaded image URLs
              handleFormData({
                images: uploadedImages.map((url) => ({ url })),
              });
              moveToNextStep();
            }
          }
        );
      }
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
