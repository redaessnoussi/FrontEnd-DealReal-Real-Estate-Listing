import React, { useEffect, useState } from "react";
import { firebaseStorage } from "../../../../firebase/firebaseStorage"; // Import the Firebase storage instance
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";
import ButtonLg from "components/design/Buttons/ButtonLg";
// require("dotenv").config();

function RegisterForm({ style }) {
  // for registration
  const [repeatPassword, setrepeatPassword] = useState("");
  const [avatarFile, setAvatarFile] = useState({});
  const apiURL = process.env.API_URL;

  // for user data
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullName: "",
    role: "client",
    agencyName: "", // Only applicable to agents
    avatar: [
      {
        url: "",
      },
    ],
    createdAt: "",
  });
  // for errors
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
    avatar: "",
  });

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    setAvatarFile(file);
  };

  // Function checks form inputs and post to backend
  const registerUser = async () => {
    // Initialize errors object
    const errors = {};

    // Basic check for empty required fields
    if (!userData.fullName) {
      errors.fullName = "Full Name is required";
    }

    if (!userData.email) {
      errors.email = "Email is required";
    }

    if (!userData.password) {
      errors.password = "Password is required";
    }

    if (!repeatPassword) {
      errors.repeatPassword = "Repeat Password is required";
    }

    // Update state with errors
    setErrors(errors);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(userData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
      console.error("Invalid email format");
      return;
    }

    // Password validation
    if (userData.password !== repeatPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Passwords do not match",
      }));
      console.error("Passwords do not match");
      // Handle the error or display a message to the user
      return;
    }

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      return;
    }

    uploadAvatar();
  };

  useEffect(() => {
    if (userData.avatar[0].url) {
      appendData(userData.avatar[0].url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.avatar]);

  const uploadAvatar = async () => {
    // append avatar file
    if (avatarFile.name) {
      const fileName = `${Date.now()}-${avatarFile.name}`;
      const storageRef = ref(firebaseStorage, `/avatar/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, avatarFile);

      // Await the completion of the upload task
      await uploadTask;

      // Get the download URL for the uploaded image
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

      // Use the callback function to access the updated state
      setUserData({
        ...userData,
        avatar: [{ url: downloadURL }],
      });
    }
  };

  const appendData = async (downloadURL) => {
    // Create FormData object to send data
    const formData = new FormData();

    // append data for registration
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("fullName", userData.fullName);
    formData.append("role", userData.role);
    formData.append("agencyName", userData.agencyName);

    // Append the avatar URL directly, not the entire array
    formData.append("avatar", downloadURL);

    console.log(userData.avatar);
    // Continue with the rest of your logic, such as sending data
    sendData(formData);
  };

  const sendData = async () => {
    try {
      const response = await axios.post(`${apiURL}/api/register`, userData);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  // Update the onChange handlers to update userData
  const handleChange = (field, value) => {
    setUserData((prevUserData) => ({ ...prevUserData, [field]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  return (
    <form>
      {/* User full name name */}
      <div className="mb-6">
        <label
          htmlFor="fullName"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Full Name
        </label>
        <input
          value={userData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          type="text"
          className={`block w-full ${style.input_default}`}
          id="input-fullName"
          aria-describedby="fullName"
          placeholder="Full Name*"
          required
        />
        {errors.fullName && (
          <div className="text-red-500">{errors.fullName}</div>
        )}
      </div>

      {/* User E-mail */}
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Email
        </label>
        <input
          value={userData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          type="email"
          className={`block w-full ${style.input_default}`}
          id="register-email"
          aria-describedby="email"
          placeholder="Email*"
        />
        {errors.email && <div className="text-red-500">{errors.email}</div>}
      </div>

      {/* Password */}
      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Password
        </label>
        <input
          value={userData.password}
          onChange={(e) => handleChange("password", e.target.value)}
          type="password"
          className={`block w-full ${style.input_default}`}
          id="register-password"
          aria-describedby="password"
          placeholder="Enter Password*"
        />
        {errors.password && (
          <div className="text-red-500">{errors.password}</div>
        )}
      </div>

      {/* Repeat Password */}
      <div className="mb-6">
        <label
          htmlFor="repeatPassword"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Confirmation
        </label>
        <input
          value={repeatPassword}
          onChange={(e) => setrepeatPassword(e.target.value)}
          type="password"
          className={`block w-full ${style.input_default}`}
          id="input-repeatPassword"
          aria-describedby="repeatPassword"
          placeholder="Confirm Password*"
        />
        {errors.repeatPassword && (
          <div className="text-red-500">{errors.repeatPassword}</div>
        )}
      </div>

      {/* Role */}
      <div className="mb-6">
        <label
          htmlFor="role"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Role
        </label>
        <select
          value={userData.role}
          onChange={(e) => handleChange("role", e.target.value)}
          className={`block w-full ${style.input_default}`}
          id="input-role"
        >
          <option value="client">Client</option>
          <option value="agent">Agent</option>
        </select>
      </div>

      {/* Agency Name (Only applicable to agents) */}
      {userData.role === "agent" && (
        <div className="mb-6">
          <label
            htmlFor="agencyName"
            className="mb-2 inline-block text-title-800 font-bold"
          >
            Agency Name
          </label>
          <input
            value={userData.agencyName}
            onChange={(e) => handleChange("agencyName", e.target.value)}
            type="text"
            className={`block w-full ${style.input_default}`}
            id="input-agencyName"
            aria-describedby="agencyName"
            placeholder="Agency Name"
          />
        </div>
      )}

      {/* Avatar */}
      <div className="mb-6">
        <label
          htmlFor="avatar"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Avatar
        </label>

        <input
          type="file"
          onChange={(e) => handleAvatarChange(e)}
          className={`block w-full ${style.input_default}`}
          id="input-avatar"
          accept="image/*"
        />
      </div>

      <ButtonLg
        type={`button`}
        onClick={registerUser}
        className="bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 border-secondary-500 text-white w-full justify-center mb-4"
      >
        Register
      </ButtonLg>
    </form>
  );
}

export default RegisterForm;
