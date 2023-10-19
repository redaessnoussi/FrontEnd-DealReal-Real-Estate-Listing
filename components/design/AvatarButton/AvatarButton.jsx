import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "react-modal";

function AvatarButton({ src, className }) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

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
      >
        {/* Your login/register form goes here */}

        {/* Login Form */}
        <h2>Login</h2>
        {/* Add your login form fields here */}
        <form>
          {/* Username and Password fields */}
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
        {/* End of Login Form */}
        {/* Add your form fields, buttons, and logic */}
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </>
  );
}

export default AvatarButton;
