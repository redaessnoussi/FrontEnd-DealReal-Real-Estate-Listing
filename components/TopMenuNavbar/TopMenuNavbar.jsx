import BrandName from "../BrandName";
import AvatarButton from "../design/AvatarButton/AvatarButton";
import NavbarTop from "../design/Navbar/NavbarTop";
import navbar from "../../styles/main.module.scss";
import { useEffect, useState } from "react";
import ButtonLg from "../design/Buttons/ButtonLg";
import Link from "next/link";

function TopMenuNavbar() {
  const [isActive, setActive] = useState(false);
  const [classname, setclassname] = useState(null);

  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    isActive ? setclassname(navbar.show) : setclassname(navbar.hide);
  }, [isActive]);

  return (
    <div className="container mx-auto p-7">
      <div className="flex flex-col md:flex-row justify-between md:items-center md:flex-wrap">
        {/* logo + burger menue */}
        <div className="flex flex-row md:w-3/12 lg:w-3/12 mb-4 md:mb-0">
          {/* brand name */}
          <BrandName className="px-4 w-9/12 md:flex-1 md:w-auto text-title-800" />
          {/* mobile menu switch */}
          <button
            className="w-3/12 text-center flex flex-row items-center justify-center md:hidden"
            onClick={toggleClass}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* menu items */}
        <NavbarTop className={"w-6/12 md:w-auto " + isActive && classname}>
          Home Explore Agency Blog About Contact
        </NavbarTop>
        <div className="flex flex-row-reverse md:flex-row md:w-full lg:w-2/12 justify-between lg:justify-end md:mt-5 lg:mt-0 lg:flex-1 items-center">
          {/* user profile image */}
          <AvatarButton
            src="/images/face-2.jpg"
            className="ml-5 md:ml-0 md:mr-5"
          />
          {/* add listing button */}
          <ButtonLg
            type={`button`}
            className="bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 border-secondary-500 text-white"
          >
            <Link href="/add-listing">Add Listing</Link>
          </ButtonLg>
        </div>
      </div>
    </div>
  );
}

export default TopMenuNavbar;
