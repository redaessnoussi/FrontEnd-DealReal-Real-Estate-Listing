import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { listingsAPI } from "../../../data/listingsAPI";
import GoogleMaps from "../../../components/googleMap/googleMap";
import style from "../../../styles/main.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import Image from "next/image";
import ButtonMd from "../../../components/design/Buttons/ButtonMd";
import NewestListing from "../../../components/home/NewestListing/NewestListing";

export default function ListingDetails({ listingDetail, properties }) {
  const [listings, setListings] = useState(properties.properties);
  const [fetched, setfetched] = useState(listings.length);
  const [listingPurpose, setListingPurpose] = useState("for-sale");
  const router = useRouter();
  const { id } = router.query;

  // console.log(properties);

  const fetchListings = async () => {
    try {
      const properties = await listingsAPI(
        `properties/purpose/${listingPurpose}`
      );
      setListings(properties.properties);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  useEffect(() => {
    // Fetch listings when listingPurpose changes
    fetchListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listingPurpose]);

  const MarkerLocation = () => (
    <HiLocationMarker className="text-primary-700 w-6 h-6" />
  );

  // You can use listing data to display details on the page
  // console.log("Listing Data:", listingDetail);

  return (
    <>
      <div className="container mx-auto px-7 py-7">
        {/* listings cards */}

        {/* title with social media sharing buttons */}
        <div className={`${style.row} justify-between gap-y-4 mb-3`}>
          <h3 className="text-title-800 font-bold">{listingDetail[0].title}</h3>
          <h3>Social Media Buttons</h3>
        </div>
        <div className={`${style.row} mb-8`}>
          <MarkerLocation />
          <p>
            {listingDetail[0].location.area}, {listingDetail[0].location.city}
          </p>
        </div>
        {/* multiple listing image */}
        <div className={`${style.row} justify-between gap-y-4 mb-3`}>
          <Image
            src={listingDetail[0].images[0].url}
            width={296}
            height={255}
            layout="fixed"
            alt={`property__`}
            className="rounded-lg object-cover"
          />
          <Image
            src={listingDetail[0].images[0].url}
            width={296}
            height={255}
            layout="fixed"
            alt={`property__`}
            className="rounded-lg object-cover"
          />
          <Image
            src={listingDetail[0].images[0].url}
            width={296}
            height={255}
            layout="fixed"
            alt={`property__`}
            className="rounded-lg object-cover"
          />
          <Image
            src={listingDetail[0].images[0].url}
            width={296}
            height={255}
            layout="fixed"
            alt={`property__`}
            className="rounded-lg object-cover"
          />
        </div>
        {/* listing description and details */}
        <h4>Description</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* lisiting overview */}
        <h4>Overview</h4>
        <div className={`${style.row} justify-between gap-y-4 mb-3`}>
          <p>4 Bedrooms</p>
          <p>3 Bathrooms</p>
          <p>1 Garage</p>
          <p>3,000 sqft</p>
        </div>
        {/* listing details */}
        <h4>Overview</h4>
        <h5>
          Property ID <span>AGS1234</span>
        </h5>
        <h5>
          Price <span>$ 250,000</span>
        </h5>
        <h5>
          Property Size <span>3000 sqft</span>
        </h5>
        <h5>
          Bedroom <span>4</span>
        </h5>
        <h5>
          Bathroom <span>3</span>
        </h5>
        <h5>
          Garage <span>1</span>
        </h5>
        <h5>
          Garage Size <span>200 sqft</span>
        </h5>
        <h5>
          Year Built <span>2001</span>
        </h5>
        <h5>
          Category <span>House</span>
        </h5>
        <h5>
          Property Status <span>Sale</span>
        </h5>
        <h4>Address</h4>
      </div>
      {/* listing address on the map */}
      <div className="bg-green-200 h-96 relative flex justify-center">
        <GoogleMaps properties={listingDetail} />
      </div>
      {/* contact information */}
      <div className="container mx-auto px-7 py-7">
        <h4>Contact Information</h4>
        <h5>Grand House Real Estate</h5>
        <p>+90 8989787 898</p>
        <p>+90 8989787 898</p>
        <ButtonMd
          type={`button`}
          className="bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 border-secondary-500 text-white"
        >
          Call Agency
        </ButtonMd>
        {/* newest listing */}
        <NewestListing listings={listings} />
      </div>
    </>
  );
}

// Example: Fetching data using getServerSideProps (replace with your data-fetching logic)
export async function getServerSideProps(context) {
  const listingPurpose = "for-sale";
  const { params } = context;
  const { id } = params;

  // Fetch the listing data based on the id
  const listingDetail = await listingsAPI(`properties/id/${id}`);
  const properties = await listingsAPI(
    `properties/purpose/${listingPurpose}?page=1&limit=4`
  );

  return {
    props: {
      listingDetail,
      properties,
    },
  };
}
