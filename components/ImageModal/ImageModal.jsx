import Image from "next/image";
import React from "react";
import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, selectedImage }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <Image src={selectedImage} layout="fill" alt="Selected Property" />
    </Modal>
  );
};

export default ImageModal;
