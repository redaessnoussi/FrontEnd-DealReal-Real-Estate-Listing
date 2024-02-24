// import ButtonLg from "components/design/Buttons/ButtonLg";
import ButtonMd from "components/design/Buttons/ButtonMd";
import Image from "next/image";
import React from "react";
import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, selectedImage }) => {
  return (
    <>
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Image Modal"
        style={{
          overlay: {
            height: "100%",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2229",
          },
          content: {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            border: "none",
            padding: "1.5rem",
            width: "auto",
            maxWidth: "100%",
            height: "auto",
            maxHeight: "100%",
            inset: "0"
          },
        }}
      >
        {/* modal card container */}
        <div style={{ height: "auto", display: "flex", flex: "1", flexDirection: "column" ,backgroundColor: "white"}}>
          {/* modal image container */}
          <div style={{height: "auto", width: "500px", flex: 1, marginBottom: "1.5rem"}}>
            <Image
              src={selectedImage}
              width={500}
              height={400}
              layout="responsive"
              alt={`property__`}
              className="rounded-lg object-cover"
              priority={false}
            />
         
        </div>
         {/* close modal button */}
         <ButtonMd
            type={`button`}
            onClick={onRequestClose}
            className={`bg-secondary-500 border-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 text-white self-end`}
          >
            Close
          </ButtonMd>
        </div>
      </Modal>
      
    </>
  );
};

export default ImageModal;
