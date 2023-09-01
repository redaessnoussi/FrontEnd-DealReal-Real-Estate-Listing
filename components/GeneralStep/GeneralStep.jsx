import React from "react";
import ButtonLg from "../design/Buttons/ButtonLg";
import style from "../../styles/main.module.scss";

function GeneralStep({
  category,
  setCategory,
  price,
  setPrice,
  location,
  setLocation,
  moveToNextStep,
}) {
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
          <option value="villa">Villa</option>
          <option value="office">Office</option>
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
          type="text"
          className={`block w-full ${style.input_default}`}
          id="input-propertyPricing"
          aria-describedby="propertyPricing"
          placeholder=""
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="property-location"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Location
        </label>
        <input
          type="text"
          className={`block w-full ${style.input_default}`}
          id="input-propertyLocation"
          aria-describedby="propertyLocation"
          placeholder=""
        />
      </div>
      <div className={`flex justify-end`}>
        <ButtonLg
          type={`submit`}
          onClick={moveToNextStep} // Move to the next step
          className={`bg-secondary-500 border-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 text-white`}
        >
          Next Step
        </ButtonLg>
      </div>
    </>
  );
}

export default GeneralStep;
