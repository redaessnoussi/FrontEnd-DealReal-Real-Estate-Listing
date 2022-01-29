import ButtonMd from "../../../design/Buttons/ButtonMd";
import ButtonLg from "../../../design/Buttons/ButtonLg";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

function RentSellToggle({ className, rentSaleToggle }) {
  const [active, setactive] = useState(true);
  const [inactive, setinactive] = useState(true);
  const activeClass =
    "bg-primary-700 border-primary-700 text-white hover:bg-primary-800 hover:border-primary-800";
  const inactiveClass =
    "bg-white border-primary-700 hover:border-primary-800 text-primary-700 hover:bg-primary-800 hover:text-white";

  const toggleClass = (target) => {
    if (!target.classList.contains("bg-primary-700")) {
      rentSaleToggle(target);
      setactive(!active);
      setinactive(!inactive);
    }
  };

  return (
    <div
      className={`flex flex-row flex-wrap justify-center ${
        className ? className : ""
      }`}
    >
      {/* rent sell toggle buttons */}
      <div className="flex justify-center shadow-md w-full lg:w-3/12 px-2.5 py-5 bg-white rounded-tl-lg rounded-tr-lg md:w-5/12 text-center">
        <div className="w-auto relative" onClick={(e) => toggleClass(e.target)}>
          <ButtonMd className={`${active ? activeClass : inactiveClass} mr-2`}>
            Sell
          </ButtonMd>
        </div>
        <div className="w-auto relative" onClick={(e) => toggleClass(e.target)}>
          <ButtonMd className={`${inactive ? inactiveClass : activeClass}`}>
            Rent
          </ButtonMd>
        </div>
      </div>
      {/* rent sell toggle inputs */}
      <div className="shadow-md bg-white w-full md:w-11/12 lg:w-10/12 p-5 md:rounded-lg rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg">
        <form className="flex flex-wrap flex-row items-end md:justify-center">
          {/* Location */}
          <label className="block text-left mr-3 md:flex-1 w-full mb-4 md:mb-0">
            <span className="block text-title-800 font-semibold mb-2 text-sm">
              Location
            </span>
            <input
              type="text"
              className="h-12 border-infield-800 outline-none border-2 rounded-lg px-2 text-infield-800 w-full"
              placeholder="$106 - $948"
            />
          </label>
          {/* Type */}
          <label className="block text-left mr-3 md:flex-1 w-full mb-4 md:mb-0">
            <span className="block text-title-800 font-semibold mb-2 text-sm">
              Type
            </span>
            <input
              type="text"
              className="h-12 border-infield-800 outline-none border-2 rounded-lg px-2 text-infield-800 w-full"
              placeholder="$106 - $948"
            />
          </label>
          {/* Range */}
          <label className="block text-left mr-3 md:flex-1 w-full mb-4 md:mb-0">
            <span className="block text-title-800 font-semibold mb-2 text-sm">
              Range
            </span>
            <input
              type="text"
              className="h-12 border-infield-800 outline-none border-2 rounded-lg px-2 text-infield-800 w-full"
              placeholder="$106 - $948"
            />
          </label>
          {/* Search Button */}
          <ButtonLg className="bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 border-secondary-500 text-white md:mb-0">
            Search <FiSearch className="w-5 h-5 ml-2" />
          </ButtonLg>
        </form>
      </div>
    </div>
  );
}

export default RentSellToggle;
