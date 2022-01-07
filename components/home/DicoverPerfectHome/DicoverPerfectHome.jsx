import React from "react";
import RentSellToggle from "./RentSellToggle/RentSellToggle";

function DicoverPerfectHome() {
  return (
    <>
      <div className="container bg-title-500 mix-blend-overlay text-center text-white flex flex-col justify-center rounded-lg p-4 md:py-10 lg:py-24 lg:px-4">
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
        <RentSellToggle />
      </div>
    </>
  );
}

export default DicoverPerfectHome;
