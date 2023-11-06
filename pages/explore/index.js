import { listingsAPI } from "data/listingsAPI";
import CardCategories from "components/design/Card/CardCategories";
import style from "styles/main.module.scss";
import RentSellToggle from "components/home/DicoverPerfectHome/RentSellToggle/RentSellToggle";
import { useEffect, useState } from "react";
import GoogleMap from "components/googleMap/googleMap";
import LoadingPage from "components/design/LoadingPage/LoadingPage";
import LoadingItems from "components/design/LoadingItems/LoadingItems";
import Head from "next/head";
import Pagination from "components/Pagination/Pagination";
import { useRouter } from "next/router";

export default function Explore({ properties, page, limit }) {
  const [listings, setListings] = useState(properties.properties);
  const [loading, setLoading] = useState(false);
  const [fetched, setfetched] = useState(listings.length);
  const [listingPurpose, setListingPurpose] = useState("for-sale");
  const router = useRouter(); // Use the useRouter hook to access the router object

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

  // console.log(listings);

  // Callback function to update listingPurpose
  const rentSaleToggle = (purpose) => {
    setLoading(false);
    setListingPurpose(purpose);
    router.push(`/explore?listingPurpose=${purpose}`);
  };

  // Define the handlePageChange function
  const handlePageChange = (page) => {
    // Update the URL and fetch data for the new page
    router.push(`/explore?listingPurpose=${listingPurpose}&page=${page}`);
  };

  // set loading if data fetched
  useEffect(() => {
    fetched && setLoading(true);
  }, [fetched, listingPurpose]);

  useEffect(() => {
    // Fetch listings when pagination change
    setListings(properties.properties);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    // Fetch listings when listingPurpose changes
    fetchListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listingPurpose]);

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
              listingPurpose={listingPurpose} // Pass listingPurpose as a prop
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
  const listingPurpose = query.listingPurpose || "for-sale";
  const page = parseInt(query.page) || 1;
  const limit = 8; // Specify the limit for properties per page

  const properties = await listingsAPI(
    `properties/purpose/${listingPurpose}?page=${page}&limit=${limit}`
  );

  return {
    props: {
      properties,
      page,
      limit,
    },
  };
}
