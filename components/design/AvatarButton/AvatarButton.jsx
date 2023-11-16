import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import LoginForm from "components/design/AvatarButton/LoginForm/LoginForm";
import RegisterForm from "components/design/AvatarButton/RegisterForm/RegisterForm";
import ButtonLg from "components/design/Buttons/ButtonLg";

function AvatarButton({ src, className, style }) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const modalStyles = {
    overlay: {
      backgroundColor: "#2229",
      zIndex: "100",
      display: "flex",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      maxWidth: "39.5rem",
      width: "39.5rem",
      position: "relative",
      maxHeight: "94vh",
      borderRadius: ".8rem",
      inset: "unset",
      boxSizing: "content-box",
      padding: "20px",
      overflow: "auto",
    },
  };

  // function that will open the modal
  const openModal = () => {
    setmodalIsOpen(true);
  };

  // function that will close the modal
  const closeModal = () => {
    setmodalIsOpen(false);
  };

  useEffect(() => {
    // Set the App element for react-modal
    Modal.setAppElement("body");
  }, []);

  return (
    <>
      <button
        className={"flex flex-col justify-center p-2 " + className}
        type="button"
        onClick={openModal} // Open the modal when the button is clicked
      >
        <Image
          src={src}
          width="56"
          height="56"
          alt="avatar"
          className="rounded-full object-cover"
        />
      </button>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal} // Close the modal when the overlay or close button is clicked
        contentLabel="Login/Register Modal"
        style={modalStyles}
      >
        <div>
          {showLogin ? (
            <>
              <LoginForm style={style} />
              <ButtonLg
                type={`button`}
                onClick={() => setShowLogin(false)}
                className="bg-primary-700 border-primary-700 text-white hover:bg-primary-800 hover:border-primary-800 w-full justify-center mb-4"
              >
                Don&apos;t have an account?
              </ButtonLg>
            </>
          ) : (
            <>
              <RegisterForm style={style} />
              <ButtonLg
                type={`button`}
                onClick={() => setShowLogin(true)}
                className="bg-primary-700 border-primary-700 text-white hover:bg-primary-800 hover:border-primary-800 w-full justify-center mb-4"
              >
                Already have an account?
              </ButtonLg>
            </>
          )}
          <button onClick={() => setmodalIsOpen(false)}>Close Modal</button>
        </div>
      </Modal>
    </>
  );
}

export default AvatarButton;
