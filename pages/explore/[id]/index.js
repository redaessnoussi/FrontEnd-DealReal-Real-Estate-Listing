import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { listingsAPI } from "data/listingsAPI";
import GoogleMaps from "components/googleMap/googleMap";
import style from "styles/main.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import Image from "next/image";
import CardReservation from "components/design/Card/CardReservation";
import ListingOverview from "components/ListingDetails/ListingOverview";
import AgencyContact from "components/ListingDetails/AgencyContact";
import ListingInfos from "components/ListingDetails/ListingInfos";
import SocialMediaButtons from "components/design/SocialMediaButtons/SocialMediaButtons";

export default function ListingDetails({ listingDetail, properties }) {
  const [listings, setListings] = useState(properties.properties);
  const [fetched, setfetched] = useState(listings.length);
  const [listingPurpose, setListingPurpose] = useState("for-sale");
  const router = useRouter();
  const { id } = router.query;

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

  // You can use listing data to display details on the page
  console.log("Listing Data:", listingDetail);

  return (
    <>
      <div className="container mx-auto px-7 py-7">
        {/* listings cards */}
        {/* title with social media sharing buttons */}
        <div className={`${style.row} justify-between gap-y-4 mb-3`}>
          <h3 className="text-title-800 font-bold">{listingDetail[0].title}</h3>
          <SocialMediaButtons />
        </div>
        {/* location with marker */}
        <div className={`${style.row} mb-10`}>
          <MarkerLocation />
          <p>
            {listingDetail[0].location.area}, {listingDetail[0].location.city}
          </p>
        </div>
        {/* multiple listing image */}
        {/* thumbnail image */}
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
        {/* slider images */}
        <div className={`${style.row} justify-between gap-y-4 mb-8`}>
          {listingDetail[0].images.map((image, key) => (
            <Image
              src={image.url}
              width={376}
              height={255}
              layout="fixed"
              alt={`property__`}
              className="rounded-lg object-cover"
              key={key}
            />
          ))}
        </div>
        <div className={`${style.row} justify-between`}>
          <div className="w-7/12">
            {/* Listing description and details */}
            {/* Listing description */}
            <h4 className="text-title-800 font-bold mb-6">Description</h4>
            <div className="mb-10">
              {listingDetail[0].description ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: listingDetail[0].description
                      .replace(/\r\n/g, "<br/>")
                      .replace(/•/g, "&#8226;"),
                  }}
                />
              ) : (
                "N/A"
              )}
            </div>
            {/* Lisiting overview */}
            <ListingOverview
              style={style}
              listingDetail={listingDetail}
              numberWithCommas={numberWithCommas}
            />
            {/* Listing details */}
            <ListingInfos
              style={style}
              listingDetail={listingDetail}
              numberWithCommas={numberWithCommas}
              capitalizeFirstLetter={capitalizeFirstLetter}
            />
            <h4 className="font-bold text-slate-700 mb-6">Address</h4>
          </div>
          <div className="w-4/12">
            {/* Reservation card form*/}
            <CardReservation
              style={style}
              listingDetail={listingDetail}
              numberWithCommas={numberWithCommas}
            />
          </div>
        </div>
      </div>
      {/* Listing address on the map */}
      <div className="bg-green-200 h-96 relative flex justify-center mb-10">
        <GoogleMaps properties={listingDetail} />
      </div>
      {/* Agency contact information */}
      <AgencyContact style={style} listings={listings} />
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

function numberWithCommas(x) {
  if (x === undefined) {
    return null;
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const MarkerLocation = () => (
  <HiLocationMarker className="text-primary-700 w-6 h-6" />
);
