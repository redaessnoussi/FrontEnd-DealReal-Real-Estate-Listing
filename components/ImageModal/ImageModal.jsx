// import ButtonLg from "components/design/Buttons/ButtonLg";
import Image from "next/image";
import React from "react";
import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, selectedImage }) => {
  return (
    <div className="relative">
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
            inset: "0",
            width: "80%",
            maxHeight: "90vh",
            padding: "0",
            border: "0",
          },
        }}
      >
        <Image
          src={selectedImage}
          layout="responsive"
          width={822}
          height={522}
          alt="Selected Property"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Modal>
    </div>
  );
};

export default ImageModal;
