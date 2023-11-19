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

function Search({ properties, page, limit }) {
  const router = useRouter(); // Use the useRouter hook to access the router object
  const [loading, setLoading] = useState(false);
  const [purpose, setPurpose] = useState(router.query.purpose);
  const [city, setCity] = useState(router.query.city);
  const [category, setCategory] = useState(router.query.category);
  const [listings, setListings] = useState([]);
  const [fetched, setFetched] = useState(listings.length);

  console.log(router.query.city);

  const fetchListings = async () => {
    try {
      let queryString = "properties/search?";

      if (purpose) {
        queryString += `purpose=${purpose}&`;
      }

      if (city) {
        queryString += `city=${city}&`;
      }

      if (category) {
        queryString += `category=${category}&`;
      }

      // Remove the trailing "&" if it exists
      queryString = queryString.replace(/&$/, "");
      console.log(queryString);
      const properties = await listingsAPI(queryString);
      setListings(properties.properties);
      setFetched(properties.properties.length);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  console.log(listings);
  console.log(fetched);

  // Callback function to update listingPurpose
  const rentSaleToggle = (purpose) => {
    setLoading(false);
    setPurpose(purpose);
    router.push(`/search?purpose=${purpose}`);
  };

  const updateSearchParams = (newParams) => {
    setPurpose(newParams.purpose || null);
    setCity(newParams.city || null);
    setCategory(newParams.category || null);
  };

  // set loading if data fetched
  useEffect(() => {
    fetched && setLoading(true);
  }, [fetched, purpose]);

  useEffect(() => {
    // Fetch listings when pagination change
    setListings(properties.properties);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    // Fetch listings when listingPurpose changes
    fetchListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [purpose, city, category]);

  return (
    <>
      <Head>
        <title>Deal Real - Explore Listings</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {fetched !== 0 ? (
        <>
          <div className="bg-green-200 h-96 relative flex justify-center">
            <GoogleMap properties={listings} />
            {/* Rent Sell Toggle */}
            <RentSellToggle
              className={`absolute -bottom-64 md:-bottom-14 lg:w-9/12 px-7`}
              rentSaleToggle={rentSaleToggle}
              purpose={purpose} // Pass purpose as a prop
              updateSearchParams={updateSearchParams}
            />
          </div>
          <div className="container mx-auto px-7 pb-24 pt-96 md:pt-60">
            {/* listings cards */}
            <div className={`${style.row} justify-between gap-y-4`}>
              {loading ? (
                listings.map((listing, key) => (
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
                ))
              ) : (
                <LoadingItems />
              )}
            </div>

            {/* Pagination */}
            <Pagination
              style={style}
              totalPages={Math.ceil(properties.totalCount / limit)}
              page={page}
              listingPurpose={purpose} // Pass listingPurpose as a prop
            />
          </div>
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export async function getServerSideProps({ query }) {
  // Parse the listingPurpose from the query parameter or default to "for-sale"
  const purpose = query.purpose || null;
  const page = parseInt(query.page) || 1;
  const limit = 8; // Specify the limit for properties per page

  // Extract additional parameters
  const city = query.city || null;
  const category = query.category || null;
  const minPrice = query.minPrice || null;
  const maxPrice = query.maxPrice || null;

  // `properties/search?purpose=${purpose}&category=${category}&city=${city}&minPrice=${minPrice}&maxPrice=${maxPrice}`
  const properties = await listingsAPI(
    `properties/search?purpose=${purpose}&city=${city}&category=${category}`
  );

  return {
    props: {
      properties,
      page,
      limit,
    },
  };
}

export default Search;
