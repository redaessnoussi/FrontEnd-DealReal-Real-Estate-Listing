import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { listingsAPI } from "../../../data/listingsAPI";
import GoogleMaps from "../../../components/googleMap/googleMap";
import style from "../../../styles/main.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import {
  MdOutlineBathroom,
  MdOutlineBedroomParent,
  MdOutlineGarage,
  MdOutlineHouse,
  MdOutlinePhone,
  MdPhoneAndroid,
} from "react-icons/md";
import Image from "next/image";
import NewestListing from "../../../components/home/NewestListing/NewestListing";
import ButtonLg from "../../../components/design/Buttons/ButtonLg";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import ButtonSm from "../../../components/design/Buttons/ButtonSm";

export default function ListingDetails({ listingDetail, properties }) {
  const [listings, setListings] = useState(properties.properties);
  const [fetched, setfetched] = useState(listings.length);
  const [listingPurpose, setListingPurpose] = useState("for-sale");
  const router = useRouter();
  const { id } = router.query;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

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
  console.log("Listing Data:", listingDetail);

  return (
    <>
      <div className="container mx-auto px-7 py-7">
        {/* listings cards */}

        {/* title with social media sharing buttons */}
        <div className={`${style.row} justify-between gap-y-4 mb-3`}>
          <h3 className="text-title-800 font-bold">{listingDetail[0].title}</h3>
          {/* social media buttons */}
          <ul className="flex">
            <li className="mr-2">
              <ButtonSm
                roundedBtn={true}
                type={`button`}
                className="bg-primary-700 hover:bg-primary-800 hover:border-primary-800 border-primary-700 text-white"
              >
                <FaFacebook className="h-6 w-6" />
              </ButtonSm>
            </li>
            <li className="mr-2">
              <ButtonSm
                roundedBtn={true}
                type={`button`}
                className="bg-primary-700 hover:bg-primary-800 hover:border-primary-800 border-primary-700 text-white"
              >
                <FaInstagram className="h-6 w-6" />
              </ButtonSm>
            </li>
            <li>
              <ButtonSm
                roundedBtn={true}
                type={`button`}
                className="bg-primary-700 hover:bg-primary-800 hover:border-primary-800 border-primary-700 text-white"
              >
                <FaPinterest className="h-6 w-6" />
              </ButtonSm>
            </li>
          </ul>
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
              <p className="text-title-800 flex items-center">
                {" "}
                <MdOutlineBedroomParent className="h-6 w-6 mr-1" /> 4 Bedrooms
              </p>
              <p className="text-title-800 flex items-center">
                {" "}
                <MdOutlineBathroom className="h-6 w-6 mr-1" /> 3 Bathrooms
              </p>
              <p className="text-title-800 flex items-center">
                <MdOutlineGarage className="h-6 w-6 mr-1" />1 Garage
              </p>
              <p className="text-title-800 flex items-center">
                <MdOutlineHouse className="h-6 w-6 mr-1" />
                3,000 sqft
              </p>
            </div>
            {/* listing details */}
            <h4 className="text-title-800 font-bold mb-6">Details</h4>
            <div className={`${style.row} justify-between mb-10`}>
              <div className="w-6/12">
                <p className="text-title-800 font-bold">
                  Property ID:{" "}
                  <span className="text-body-800 ml-1 font-normal">
                    AGS1234
                  </span>
                </p>
                <p className="text-title-800 font-bold">
                  Price:{" "}
                  <span className="text-body-800 ml-1 font-normal">
                    $ 250,000
                  </span>
                </p>
                <p className="text-title-800 font-bold">
                  Property Size:{" "}
                  <span className="text-body-800 ml-1 font-normal">
                    3000 sqft
                  </span>
                </p>
                <p className="text-title-800 font-bold">
                  Bedroom:{" "}
                  <span className="text-body-800 ml-1 font-normal">4</span>
                </p>
                <p className="text-title-800 font-bold">
                  Bathroom:{" "}
                  <span className="text-body-800 ml-1 font-normal">3</span>
                </p>
              </div>
              <div className="w-6/12">
                <p className="text-title-800 font-bold">
                  Garage:{" "}
                  <span className="text-body-800 ml-1 font-normal">1</span>
                </p>
                <p className="text-title-800 font-bold">
                  Garage Size:{" "}
                  <span className="text-body-800 ml-1 font-normal">
                    200 sqft
                  </span>
                </p>
                <p className="text-title-800 font-bold">
                  Year Built:{" "}
                  <span className="text-body-800 ml-1 font-normal">2001</span>
                </p>
                <p className="text-title-800 font-bold">
                  Category:{" "}
                  <span className="text-body-800 ml-1 font-normal">House</span>
                </p>
                <p className="text-title-800 font-bold">
                  Property Status:{" "}
                  <span className="text-body-800 ml-1 font-normal">Sale</span>
                </p>
              </div>
            </div>
            <h4 className="font-bold text-slate-700 mb-6">Address</h4>
          </div>
          <div className="w-4/12">
            {/* reservation card */}
            <div className={`${style.card}`}>
              {/* card header */}
              {/* card title */}
              <div className={`${style.card_header} flex justify-between`}>
                <h4 className="text-title-800 font-semibold">
                  <div className="flex">
                    <span className="mr-2">د.إ</span>
                    {`${numberWithCommas(listingDetail[0].price)}`}
                  </div>
                  {/* review */}
                </h4>
                <ul className={`flex items-center`}>
                  <li className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-star-800"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </li>
                  <li>
                    <span className="text-title-800 mr-1 font-semibold">
                      4.8
                    </span>
                  </li>
                  <span>(120 Review)</span>
                </ul>
              </div>
              {/* card body */}
              <div className={`${style.card_body}`}>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="text-title-800 font-semibold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={style.input_default}
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="text-title-800 font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={style.input_default}
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="date"
                      className="text-title-800 font-semibold mb-2"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className={style.input_default}
                      placeholder="Select"
                    />
                  </div>
                  <ButtonLg
                    type={`button`}
                    className="bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 border-secondary-500 text-white w-full justify-center mb-4"
                  >
                    Reserve
                  </ButtonLg>
                  <p className="text-center">
                    Certain reservations may also require a security deposit.
                  </p>
                </form>
              </div>
            </div>
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
