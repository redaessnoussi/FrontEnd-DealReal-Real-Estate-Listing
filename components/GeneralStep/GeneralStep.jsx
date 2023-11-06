import React, { useState } from "react";
import ButtonLg from "components/design/Buttons/ButtonLg";
import style from "styles/main.module.scss";

function GeneralStep({ handleFormData, moveToNextStep }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [purpose, setPurpose] = useState("for-sale");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [garage, setGarage] = useState(true);
  const [garageSize, setGarageSize] = useState("");

  const handleNextStep = () => {
    handleFormData({
      title,
      description,
      bedrooms,
      bathrooms,
      propertySize,
      yearBuilt,
      category,
      garage,
      garageSize,
      price,
      purpose,
    });
    moveToNextStep();
  };

  return (
    <>
      {/* Property Title */}
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
      {/* Property Description */}
      <div className="mb-6">
        <label
          htmlFor="property-description"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Property Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`block w-full ${style.input_default}`}
          id="input-propertyDescription"
          aria-describedby="propertyDescription"
          placeholder=""
        />
      </div>

      {/* Property Category */}
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
      {/* Property Pricing */}
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
          placeholder="Property price"
        />
      </div>

      {/* bedrooms and bathrooms */}
      <div className="mb-6 flex justify-between">
        {/* bedrooms */}
        <div className="w-6/12 mr-6">
          <label
            htmlFor="property-bedrooms"
            className="mb-2 inline-block text-title-800 font-bold"
          >
            Bedrooms
          </label>
          <input
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            type="text"
            className={`block w-full ${style.input_default}`}
            id="input-propertyBedrooms"
            aria-describedby="propertyBedrooms"
            placeholder="Bedrooms"
          />
        </div>
        {/* bathrooms */}
        <div className="w-6/12">
          <label
            htmlFor="property-bathrooms"
            className="mb-2 inline-block text-title-800 font-bold"
          >
            Bathrooms
          </label>
          <input
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            type="text"
            className={`block w-full ${style.input_default}`}
            id="input-propertyBathrooms"
            aria-describedby="propertyBathrooms"
            placeholder="Bathrooms"
          />
        </div>
      </div>

      {/* property size and year built */}
      <div className="mb-6 flex justify-between">
        {/* property size */}
        <div className="w-6/12 mr-6">
          <label
            htmlFor="property-size"
            className="mb-2 inline-block text-title-800 font-bold"
          >
            Property Size
          </label>
          <input
            value={propertySize}
            onChange={(e) => setPropertySize(e.target.value)}
            type="text"
            className={`block w-full ${style.input_default}`}
            id="input-propertySize"
            aria-describedby="propertySize"
            placeholder="Size (sqft)"
          />
        </div>
        {/* year built */}
        <div className="w-6/12">
          <label
            htmlFor="year-built"
            className="mb-2 inline-block text-title-800 font-bold"
          >
            Year Built
          </label>
          <input
            value={yearBuilt}
            onChange={(e) => setYearBuilt(e.target.value)}
            type="text"
            className={`block w-full ${style.input_default}`}
            id="input-yearBuilt"
            aria-describedby="yearBuilt"
            placeholder="Year built"
          />
        </div>
      </div>

      {/* property garage */}
      <div className="mb-6 flex justify-between">
        <div className="w-6/12 mr-6">
          <label className="block text-title-800 font-bold mb-2">Garage</label>
          <div>
            <label className="mr-6">
              <input
                type="radio"
                value="garageYes"
                checked={garage === true}
                onChange={() => setGarage(true)}
              />
              Available
            </label>
            <label>
              <input
                type="radio"
                value="garageNo"
                checked={garage === false}
                onChange={() => setGarage(false)}
              />
              Not Available
            </label>
          </div>
        </div>
        {/* Listing Type */}
        <div className="w-6/12">
          <label className="block text-title-800 font-bold mb-2">
            Listing Type
          </label>
          <div>
            <label className="mr-6">
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
      </div>

      {/* Garage Size */}
      <div className="mb-6">
        <label
          htmlFor="garage-size"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Garage Size
        </label>
        <input
          value={garageSize}
          onChange={(e) => setGarageSize(e.target.value)}
          type="text"
          className={`block w-full ${style.input_default}`}
          id="input-garageSize"
          aria-describedby="garageSize"
          placeholder="Garage size (sqft)"
          disabled={garage === false} // Add disabled attribute conditionally
        />
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
