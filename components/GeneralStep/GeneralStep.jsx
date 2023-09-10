import React, { useState } from "react";
import ButtonLg from "../design/Buttons/ButtonLg";
import style from "../../styles/main.module.scss";

function GeneralStep({ handleFormData, moveToNextStep }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [purpose, setPurpose] = useState("for-sale");

  const handleNextStep = () => {
    handleFormData({ title, category, price, purpose });
    moveToNextStep();
  };

  return (
    <>
      <div className="mb-6">
        <label
          htmlFor="property-title"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Property Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className={`block w-full ${style.input_default}`}
          id="input-propertyTitle"
          aria-describedby="propertyTitle"
          placeholder="Add Listing Title"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="property-description"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={style.input_select}
          aria-label="select property category"
        >
          <option value="" disabled>
            Select property category
          </option>
          <option value="apartments">Apartments</option>
          <option value="townhouses">Townhouses</option>
          <option value="villas">Villas</option>
          <option value="offices">Offices</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="property-pricing"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Price
        </label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          className={`block w-full ${style.input_default}`}
          id="input-propertyPricing"
          aria-describedby="propertyPricing"
          placeholder=""
        />
      </div>
      <div className="mb-6">
        <label className="block text-title-800 font-bold">Listing Type</label>
        <div>
          <label>
            <input
              type="radio"
              value="for-sale"
              checked={purpose === "for-sale"}
              onChange={() => setPurpose("for-sale")}
            />
            For Sale
          </label>
          <label>
            <input
              type="radio"
              value="for-rent"
              checked={purpose === "for-rent"}
              onChange={() => setPurpose("for-rent")}
            />
            For Rent
          </label>
        </div>
      </div>
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

export default GeneralStep;
