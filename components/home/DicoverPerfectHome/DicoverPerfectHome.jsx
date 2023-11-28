import React, { useState } from "react";
import RentSellToggle from "./RentSellToggle/RentSellToggle";
import style from "styles/main.module.scss";

function DicoverPerfectHome({ rentSaleToggle, updateSearchParams }) {
  return (
    <>
      <div
        className={`container ${style.bg_hero} text-center text-white flex flex-col justify-center items-center rounded-lg p-4 md:py-10 lg:py-24`}
      >
        {/* headline */}
        <h1 className="mb-6 font-bold lg:text-6xl md:text-5xl">
          Discover Your Perfect Home
        </h1>
        {/* text */}
        <p className="mb-11 text-xs sm:text-base">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium
        </p>
        {/* rent sell toggle */}
        <RentSellToggle
          className={`lg:w-10/12`}
          rentSaleToggle={rentSaleToggle}
          updateSearchParams={updateSearchParams}
        />
      </div>
    </>
  );
}

export default DicoverPerfectHome;
