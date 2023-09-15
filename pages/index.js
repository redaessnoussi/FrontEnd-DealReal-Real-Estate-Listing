import Head from "next/head";
import { useEffect, useState } from "react";
import { listingsAPI } from "../data/listingsAPI";
// React Components
import DicoverPerfectHome from "../components/home/DicoverPerfectHome/DicoverPerfectHome";
import NewestListing from "../components/home/NewestListing/NewestListing";
import ListingCategories from "../components/home/ListingCategories/ListingCategories";
import LoadingPage from "../components/design/LoadingPage/LoadingPage";
import LoadingItems from "../components/design/LoadingItems/LoadingItems";
import HelpYouFind from "../components/home/HelpYouFind/HelpYouFind";
import HeroPage from "../components/HeroPage/HeroPage";
import ButtonLg from "../components/design/Buttons/ButtonLg";

export default function Home({ properties }) {
  const [listings, setListings] = useState(properties.properties);
  const [fetched, setfetched] = useState(listings.length);
  const [listingPurpose, setListingPurpose] = useState("for-sale");
  const [loading, setLoading] = useState(false);
  const [listingType, setlistingType] = useState("0");

  const fetchListings = async () => {
    try {
      const properties = await listingsAPI(`properties/${listingPurpose}`);
      setListings(properties.properties);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  // Callback function to update listingPurpose
  const rentSaleToggle = (purpose) => {
    setLoading(false);
    setListingPurpose(purpose);
  };

  const listingTypeChange = (data) => {
    setlistingType(data);
  };

  // set loading if data fetched
  useEffect(() => {
    fetched && setLoading(true);
  }, [fetched, listingPurpose]);

  useEffect(() => {
    // Fetch listings when listingPurpose changes
    fetchListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listingPurpose]);

  return (
    <>
      <Head>
        <title>Deal Real - Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {fetched !== 0 ? (
        <>
          <div className="container mx-auto px-7">
            {/* discover your perfect home */}
            <DicoverPerfectHome
              rentSaleToggle={rentSaleToggle}
              listingTypeChange={listingTypeChange}
            />
            {/* newest listing */}
            {loading ? <NewestListing listings={listings} /> : <LoadingItems />}
            {/* we help you find your dream house */}
            <HelpYouFind />
            {/* listing categories*/}
            {loading && <ListingCategories listings={listings} />}
          </div>
          {/* contact us section */}
          <HeroPage>
            <h1 className="text-white mb-8">
              Get Luxury And Cheap Housing And Guaranteed Forever
            </h1>
            <ButtonLg className="border-secondary-500 bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 mx-auto">
              <span className="text-white">Contact Now</span>
            </ButtonLg>
          </HeroPage>
          {/* <ContactUs /> */}
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

  const properties = await listingsAPI(`properties/${listingPurpose}`);

  return {
    props: {
      properties,
    },
  };
}
