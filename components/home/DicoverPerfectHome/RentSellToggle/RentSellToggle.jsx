import ButtonMd from "components/design/Buttons/ButtonMd";
import ButtonLg from "components/design/Buttons/ButtonLg";
import style from "styles/main.module.scss";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function RentSellToggle({ className, updateSearchParams, rentSaleToggle }) {
  const router = useRouter(); // Use the useRouter hook to access the router object
  const [active, setactive] = useState(true);
  const [inactive, setinactive] = useState(true);
  const [listingsType, setlistingsType] = useState("villas");
  const [listingsCity, setlistingsCity] = useState("Dubai");
  const [listingPurpose, setListingPurpose] = useState("for-sale");

  const activeClass =
    "bg-primary-700 border-primary-700 text-white hover:bg-primary-800 hover:border-primary-800";
  const inactiveClass =
    "bg-white border-primary-700 hover:border-primary-800 text-primary-700 hover:bg-primary-800 hover:text-white";

  const toggleClass = (target) => {
    setListingPurpose(target);
    rentSaleToggle(target);
    setactive(!active);
    setinactive(!inactive);
  };

  // change listing type value from combobox
  const changeListingType = (val) => {
    setlistingsType(val);
  };

  // change listing city value from combobox
  const changeListingCity = (val) => {
    setlistingsCity(val);
  };

  // listing types options
  const ListingTypes = () => (
    <select
      value={listingsType}
      className={style.input_select}
      onChange={(e) => changeListingType(e.target.value)}
    >
      <option value="villas">Villas</option>
      <option value="apartments">Apartments</option>
      <option value="offices">Offices</option>
      <option value="shops">Shops</option>
      <option value="warehouses">Warehouses</option>
      <option value="factory">Factory</option>
      <option value="labour">Labour camp</option>
      <option value="commercial">Commercial Building</option>
      <option value="other">Other Commercial</option>
    </select>
  );

  const ListingCities = () => (
    <select
      value={listingsCity}
      className={style.input_select}
      onChange={(e) => changeListingCity(e.target.value)}
    >
      <option value="dubai">Dubai</option>
      <option value="abudabi">Abudabi</option>
      <option value="casablanca">Casablanca</option>
    </select>
  );

  const searchListings = () => {
    console.log("search listings");
    updateSearchParams({
      purpose: listingPurpose,
      city: listingsCity,
      category: listingsType,
    });
  };

  return (
    <div
      className={`flex flex-row flex-wrap justify-center ${
        className ? className : ""
      }`}
    >
      {/* rent sell toggle buttons */}
      <div className="flex justify-center shadow-md w-full lg:w-2/6 xl:w-3/12 px-2.5 py-5 bg-white rounded-tl-lg rounded-tr-lg md:w-5/12 text-center">
        <div
          className="w-auto relative"
          onClick={() => toggleClass("for-sale")}
        >
          <ButtonMd
            type={`button`}
            className={`${active ? activeClass : inactiveClass} mr-2`}
          >
            Sell
          </ButtonMd>
        </div>
        <div
          className="w-auto relative"
          onClick={() => toggleClass("for-rent")}
        >
          <ButtonMd
            type={`button`}
            className={`${inactive ? inactiveClass : activeClass}`}
          >
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
            <ListingCities />
          </label>
          {/* Type */}
          <label className="block text-left mr-3 md:flex-1 w-full mb-4 md:mb-0">
            <span className="block text-title-800 font-semibold mb-2 text-sm">
              Type
            </span>
            <ListingTypes />
            {/* <ListingPurpose /> */}
          </label>
          {/* Range */}
          <label className="block text-left mr-3 md:flex-1 w-full mb-4 md:mb-0">
            <span className="block text-title-800 font-semibold mb-2 text-sm">
              Range
            </span>
            <input
              type="text"
              id="range"
              className={style.input_default}
              placeholder="$106 - $948"
            />
          </label>
          {/* Search Button */}
          <ButtonLg
            type="button"
            onClick={() => {
              searchListings();
            }}
            className="bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 border-secondary-500 text-white md:mb-0"
          >
            Search <FiSearch className="w-5 h-5 ml-2" />
          </ButtonLg>
        </form>
      </div>
    </div>
  );
}

export default RentSellToggle;
