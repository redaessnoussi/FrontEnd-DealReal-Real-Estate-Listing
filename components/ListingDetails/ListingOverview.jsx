import React from "react";
import {
  MdOutlineBathroom,
  MdOutlineBedroomParent,
  MdOutlineGarage,
  MdOutlineHouse,
} from "react-icons/md";

export default function ListingOverview({
  style,
  bedrooms,
  bathrooms,
  garage,
  prSize,
  numberWithCommas,
}) {
  const propertySize = numberWithCommas(prSize);
  return (
    <>
      <h4 className="text-title-800 font-bold mb-6">Overview</h4>
      <div className={`${style.row} justify-between gap-y-4 mb-10`}>
        <p className="text-title-800 flex items-center">
          <MdOutlineBedroomParent className="h-6 w-6 mr-1" />
          {bedrooms ? bedrooms + " Bedrooms" : "N/A"}
        </p>
        <p className="text-title-800 flex items-center">
          <MdOutlineBathroom className="h-6 w-6 mr-1" />
          {bathrooms ? bathrooms + " Bathrooms" : "N/A"}
        </p>
        <p className="text-title-800 flex items-center">
          <MdOutlineGarage className="h-6 w-6 mr-1" />
          {garage ? "1" + " Garage" : "N/A"}
        </p>
        <p className="text-title-800 flex items-center">
          <MdOutlineHouse className="h-6 w-6 mr-1" />
          {propertySize ? propertySize + " sqft" : "N/A"}
        </p>
      </div>
    </>
  );
}
