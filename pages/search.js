import React, { useEffect, useState } from "react";
import { listingsAPI } from "data/listingsAPI";
import { useRouter } from "next/router";
import Head from "next/head";
import style from "styles/main.module.scss";
import LoadingPage from "components/design/LoadingPage/LoadingPage";
import Pagination from "components/Pagination/Pagination";
import LoadingItems from "components/design/LoadingItems/LoadingItems";
import CardCategories from "components/design/Card/CardCategories";
import RentSellToggle from "components/home/DicoverPerfectHome/RentSellToggle/RentSellToggle";
import GoogleMap from "components/googleMap/googleMap";

function Search() {
  const router = useRouter(); // Use the useRouter hook to access the router object
  const [listings, setListings] = useState([]);
  const [listingsArray, setListingsArray] = useState(listings.properties);
  const [purpose, setPurpose] = useState("for-sale");

  const limit = 8; // Specify the limit for properties per page

  const fetchListings = async (purposeData) => {
    try {
      let queryString = "properties/search?";

      if (router.query.purpose) {
        queryString += `purpose=${purposeData}&`;
      }

      if (router.query.city) {
        queryString += `city=${router.query.city}&`;
      }

      if (router.query.category) {
        queryString += `category=${router.query.category}&`;
      }

      if (router.query.page) {
        queryString += `page=${router.query.page || 1}`;
      }
      // Remove the trailing "&" if it exists
      queryString = queryString.replace(/&$/, "");
      const response = await listingsAPI(queryString);
      setListings(response);
      setListingsArray(response.properties);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  // Callback function to update purpose
  const rentSaleToggle = (purpose) => {
    setPurpose(purpose);
  };

  const updateSearchParams = (newParams) => {
    router.push(
      `/search?purpose=${newParams.purpose}&city=${newParams.city}&category=${newParams.category}`
    );
  };

  useEffect(() => {
    // Fetch listings when page changes
    fetchListings(router.query.purpose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    router.query.page,
    router.query.purpose,
    router.query.city,
    router.query.category,
  ]);

  useEffect(() => {
    // Fetch listings when page changes
    fetchListings(purpose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [purpose]);

  useEffect(() => {
    // Update listingsArray when response.properties changes
    setListingsArray(listings.properties);
  }, [listings.properties]);

  return (
    <>
      <Head>
        <title>Deal Real - Explore Listings</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {listingsArray && listingsArray.length > 0 && (
        <>
          <div className="bg-green-200 h-96 relative flex justify-center">
            <GoogleMap properties={listingsArray} />
            {/* Rent Sell Toggle */}
            <RentSellToggle
              className={`absolute -bottom-64 md:-bottom-14 lg:w-9/12 px-7`}
              //rentSaleToggle: this will flag if the listing purpose value changed on toggle menu
              rentSaleToggle={rentSaleToggle}
              updateSearchParams={updateSearchParams}
            />
          </div>
          <div className="container mx-auto px-7 pb-24 pt-96 md:pt-60">
            {/* listings cards */}
            <div className={`${style.row} gap-y-4`}>
              {listingsArray?.map((listing, key) => (
                <div
                  className="md:w-4/12 lg:w-3/12 w-full h-full flex-initial"
                  key={key}
                >
                  <CardCategories
                    id={listing._id}
                    src={listing.images[0].url}
                    title={listing.title}
                    location={`${listing.location.country}, ${listing.location.city}, ${listing.location.area}`}
                    price={listing.price}
                    category={listing.category}
                  />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              style={style}
              totalPages={Math.ceil(listings.totalCount / limit)}
              page={parseInt(router.query.page) || 1}
              listingPurpose={router.query.purpose} // Pass listingPurpose as a prop
            />
          </div>
        </>
      )}
    </>
  );
}

export default Search;
