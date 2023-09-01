import React, { useState } from "react";
import ButtonLg from "../design/Buttons/ButtonLg";

function LocationStep({ moveToNextStep }) {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [street, setStreet] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine the parts of the address into a single string
    const location = `${country}, ${city}, ${area}, ${street}`;

    // You can do something with the location data, e.g., store it in state
    console.log("Location:", location);

    // Move to the next step
    moveToNextStep();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="country" className="block text-title-800 font-bold">
            Country
          </label>
          <input
            type="text"
            id="country"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-title-800 font-bold">
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="area" className="block text-title-800 font-bold">
            Area
          </label>
          <input
            type="text"
            id="area"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="street" className="block text-title-800 font-bold">
            Street
          </label>
          <input
            type="text"
            id="street"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <ButtonLg
          type={`submit`}
          onClick={moveToNextStep} // Move to the next step
          className={`bg-secondary-500 border-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 text-white`}
        >
          Next Step
        </ButtonLg>
      </form>
    </div>
  );
}

export default LocationStep;
