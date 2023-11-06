import React from "react";

export default function ListingInfos({
  style,
  listingDetail,
  numberWithCommas,
  capitalizeFirstLetter,
}) {
  const listingPrice = listingDetail[0].price;
  const propertySize = listingDetail[0].propertySize;
  const bedrooms = listingDetail[0].bedrooms;
  const bathrooms = listingDetail[0].bathrooms;
  const garage = listingDetail[0].garage;
  const garageSize = listingDetail[0].garageSize;
  const yearBuilt = listingDetail[0].yearBuilt;
  const category = listingDetail[0].category;
  const purpose = listingDetail[0]?.purpose;
  const formatedPrice = numberWithCommas(listingPrice);
  const formatedSize = numberWithCommas(propertySize);
  const formatedGarageSize = garageSize ? numberWithCommas(garageSize) : null;
  const formatedCategory = capitalizeFirstLetter(category);

  return (
    <>
      <h4 className="text-title-800 font-bold mb-6">Details</h4>
      <div className={`${style.row} justify-between mb-10`}>
        <div className="w-6/12">
          <p className="text-title-800 font-bold">
            Property ID:{" "}
            <span className="text-body-800 ml-1 font-normal">AGS1234</span>
          </p>
          <p className="text-title-800 font-bold">
            Price:{" "}
            <span className="text-body-800 ml-1 font-normal">
              $ {formatedPrice ? formatedPrice : "N/A"}
            </span>
          </p>
          <p className="text-title-800 font-bold">
            Property Size:{" "}
            <span className="text-body-800 ml-1 font-normal">
              {formatedSize ? formatedSize + " sqft" : "N/A"}
            </span>
          </p>
          <p className="text-title-800 font-bold">
            Bedroom:{" "}
            <span className="text-body-800 ml-1 font-normal">
              {bedrooms ? bedrooms : "N/A"}
            </span>
          </p>
          <p className="text-title-800 font-bold">
            Bathroom:{" "}
            <span className="text-body-800 ml-1 font-normal">
              {bathrooms ? bathrooms : "N/A"}
            </span>
          </p>
        </div>
        <div className="w-6/12">
          <p className="text-title-800 font-bold">
            Garage:{" "}
            <span className="text-body-800 ml-1 font-normal">
              {garage ? "1" : "N/A"}
            </span>
          </p>
          <p className="text-title-800 font-bold">
            Garage Size:{" "}
            <span className="text-body-800 ml-1 font-normal">
              {formatedGarageSize ? formatedGarageSize + " sqft" : "N/A"}
            </span>
          </p>
          <p className="text-title-800 font-bold">
            Year Built:{" "}
            <span className="text-body-800 ml-1 font-normal">
              {yearBuilt ? yearBuilt : "N/A"}
            </span>
          </p>
          <p className="text-title-800 font-bold">
            Category:{" "}
            <span className="text-body-800 ml-1 font-normal">
              {formatedCategory ? formatedCategory : "N/A"}
            </span>
          </p>
          <p className="text-title-800 font-bold">
            Property Status:{" "}
            <span className="text-body-800 ml-1 font-normal">
              {purpose === "for-sale" ? "Sale" : "Rent"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
