import { useState } from "react";
import style from "../../styles/main.module.scss";
import ButtonLg from "../design/Buttons/ButtonLg";

function StepsSection({ steps }) {
  const stepsCount = steps.length;
  const [category, setcategory] = useState("");
  const [status, setstatus] = useState("");
  const [yearlyTax, setYearlyTax] = useState("");
  const [rentalType, setrentalType] = useState("Monthly");
  const [dropdown, setdropdown] = useState(false);

  const Steps = ({ step, count }) => (
    <>
      <div className="md:px-2 lg:px-4 w-5/12 md:w-auto">
        <div className="bg-white lg:px-10 md:px-6 p-2 rounded-lg">
          <span className="text-primary-700 font-semibold">
            {count + 1}. {step}
          </span>
        </div>
      </div>
      {count < stepsCount - 1 && (
        <div className="flex-auto hidden md:block">
          <span className="block border-t-2"></span>
        </div>
      )}
    </>
  );

  return (
    <>
      {/* steps section */}
      <div className="bg-primary-700 p-4 rounded-lg flex md:justify-between items-center gap-y-4 flex-wrap justify-around">
        {steps.map((step, key) => (
          <Steps key={key} count={key} step={step} />
        ))}
      </div>
      <div className="py-8 md:px-20">
        {/* General Section */}
        <form>
          {/* Property Title */}
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
          {/* Property Description */}
          <div className="mb-6">
            <label
              htmlFor="property-description"
              className="mb-2 inline-block text-title-800 font-bold"
            >
              Description
            </label>
            <textarea
              placeholder="Add Description"
              name="propertyDescription"
              className={`block w-full ${style.input_textaria}`}
              id="input-propertyDescription"
              rows="5"
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
              defaultValue={category}
              onChange={(e) => setcategory(e.target.value)}
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
          {/* Property Listed In */}
          <div className="mb-6">
            <label
              htmlFor="property-listed"
              className="mb-2 inline-block text-title-800 font-bold"
            >
              Listed In
            </label>
            <input
              type="text"
              className={`block w-full ${style.input_default}`}
              id="input-propertyListed"
              aria-describedby="propertyListed"
              placeholder=""
            />
          </div>
          {/* Property Status */}
          <div className="mb-6">
            <label
              htmlFor="property-description"
              className="mb-2 inline-block text-title-800 font-bold"
            >
              Property Status
            </label>
            <select
              defaultValue={status}
              onChange={(e) => setstatus(e.target.value)}
              className={style.input_select}
              aria-label="property status"
            >
              <option value="active">Active</option>
              <option value="sold">Sold</option>
            </select>
          </div>
          {/* Property Listed In */}
          <div className="mb-6">
            <label
              htmlFor="salesPrice"
              className="mb-2 inline-block text-title-800 font-bold"
            >
              Property Sales Price
            </label>
            <input
              type="text"
              className={`block w-full ${style.input_default}`}
              id="input-salesPrice"
              aria-describedby="salesPrice"
              placeholder="Add sales price"
            />
          </div>
          {/* Property Rental Price */}
          <div className="mb-6">
            <label
              htmlFor="rentalPrice"
              className="mb-2 inline-block text-title-800 font-bold"
            >
              Property Rental Price
            </label>
            <div className={`${style.input_group} mb-3`}>
              <input
                type="text"
                className={`${style.form_control}`}
                aria-label="Text input with dropdown button"
                placeholder="Select property category"
              />
              <button
                onClick={() => setdropdown(!dropdown)}
                className={`${style.input_group_btn}`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {rentalType}
              </button>
              {dropdown && (
                <ul className={`${style.dropdown_menu_end}`}>
                  <li onClick={() => setrentalType("Monthly")}>
                    <a className={`${style.dropdown_item}`} role="button">
                      Monthly
                    </a>
                  </li>
                  <li onClick={() => setrentalType("Yearly")}>
                    <a className={`${style.dropdown_item}`} role="button">
                      Yearly
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          {/* Property Status */}
          <div className="mb-6">
            <label
              htmlFor="property-description"
              className="mb-2 inline-block text-title-800 font-bold"
            >
              Yearly Tax Rate
            </label>
            <select
              defaultValue={yearlyTax}
              onChange={(e) => setYearlyTax(e.target.value)}
              className={style.input_select}
              aria-label="yearly tax rate"
            >
              <option value="" disabled>
                Add property tax
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          {/* Next Button */}
          <div className={`flex justify-end`}>
            <ButtonLg
              className={`bg-secondary-500 border-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 text-white`}
            >
              Next Step
            </ButtonLg>
          </div>
        </form>
      </div>
    </>
  );
}

export default StepsSection;
