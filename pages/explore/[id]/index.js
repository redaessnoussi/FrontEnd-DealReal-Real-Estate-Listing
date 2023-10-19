import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { listingsAPI } from "../../../data/listingsAPI";
import GoogleMaps from "../../../components/googleMap/googleMap";
import style from "../../../styles/main.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlinePhone, MdPhoneAndroid } from "react-icons/md";
import Image from "next/image";
import NewestListing from "../../../components/home/NewestListing/NewestListing";
import ButtonLg from "../../../components/design/Buttons/ButtonLg";

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
        {/* location with marker */}
        <div className={`${style.row} mb-10`}>
          <MarkerLocation />
          <p>
            {listingDetail[0].location.area}, {listingDetail[0].location.city}
          </p>
        </div>
        {/* multiple listing image */}
        <div className="w-full mb-8 h-[558px]">
          <Image
            src={listingDetail[0].images[0].url}
            layout="responsive"
            width={1200}
            height={548}
            alt="First Image"
            className="rounded-lg object-cover"
          />
        </div>

        <div className={`${style.row} justify-between gap-y-4 mb-8`}>
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
        <div className={`${style.row} justify-between`}>
          <div className="w-7/12">
            {/* listing description and details */}
            <h4 className="text-title-800 font-bold mb-6">Description</h4>
            <p className="mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* lisiting overview */}
            <h4 className="text-title-800 font-bold mb-6">Overview</h4>
            <div className={`${style.row} justify-between gap-y-4 mb-10`}>
              <p className="text-title-800">4 Bedrooms</p>
              <p className="text-title-800">3 Bathrooms</p>
              <p className="text-title-800">1 Garage</p>
              <p className="text-title-800">3,000 sqft</p>
            </div>
            {/* listing details */}
            <h4 className="text-title-800 font-bold mb-6">Details</h4>
            <div className={`${style.row} justify-between mb-10`}>
              <div className="w-6/12">
                <p className="text-title-800 font-bold">
                  Property ID{" "}
                  <span className="text-body-800 font-normal">AGS1234</span>
                </p>
                <parent className="text-title-800 font-bold">
                  Price{" "}
                  <span className="text-body-800 font-normal">$ 250,000</span>
                </parent>
                <p className="text-title-800 font-bold">
                  Property Size{" "}
                  <span className="text-body-800 font-normal">3000 sqft</span>
                </p>
                <p className="text-title-800 font-bold">
                  Bedroom <span className="text-body-800 font-normal">4</span>
                </p>
                <p className="text-title-800 font-bold">
                  Bathroom <span className="text-body-800 font-normal">3</span>
                </p>
              </div>
              <div className="w-6/12">
                <p className="text-title-800 font-bold">
                  Garage <span className="text-body-800 font-normal">1</span>
                </p>
                <p className="text-title-800 font-bold">
                  Garage Size{" "}
                  <span className="text-body-800 font-normal">200 sqft</span>
                </p>
                <p className="text-title-800 font-bold">
                  Year Built{" "}
                  <span className="text-body-800 font-normal">2001</span>
                </p>
                <p className="text-title-800 font-bold">
                  Category{" "}
                  <span className="text-body-800 font-normal">House</span>
                </p>
                <p className="text-title-800 font-bold">
                  Property Status{" "}
                  <span className="text-body-800 font-normal">Sale</span>
                </p>
              </div>
            </div>
            <h4 className="font-bold text-slate-700 mb-6">Address</h4>
          </div>
          <div className="w-5/12">
            <h3>Reservation Card</h3>
          </div>
        </div>
      </div>
      {/* listing address on the map */}
      <div className="bg-green-200 h-96 relative flex justify-center mb-10">
        <GoogleMaps properties={listingDetail} />
      </div>
      {/* contact information */}
      <div className="container mx-auto px-7 py-7">
        <h4 className="text-title-800 font-bold mb-6">Contact Information</h4>
        {/* media object */}
        <div className={`${style.row} items-center`}>
          {/* image rounded */}
          <div className="mr-3 flex items-center">
            <Image
              src="/images/agency-logo.jpeg"
              width={96}
              height={96}
              layout="fixed"
              alt="avatar"
              className="rounded-full object-cover"
            />
          </div>
          {/* body */}
          <div className="flex-1">
            <h5 className="text-title-800 font-bold mb-2">
              Grand House Real Estate
            </h5>
            <div className="flex">
              <MdOutlinePhone className="mr-2 w-6 h-6" />
              <p className="mr-4">+90 8989787 898</p>
              <MdPhoneAndroid className="mr-2 w-6 h-6" />
              <p>+90 8989787 898</p>
            </div>
          </div>
          <ButtonLg
            type={`button`}
            className="bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 border-secondary-500 text-white"
          >
            Call Agency
          </ButtonLg>
        </div>
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
