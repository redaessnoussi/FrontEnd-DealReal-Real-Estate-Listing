import Head from "next/head";
import { useEffect, useState } from "react";
import { listingsAPI } from "data/listingsAPI";
// React Components
import DicoverPerfectHome from "components/home/DicoverPerfectHome/DicoverPerfectHome";
import NewestListing from "components/home/NewestListing/NewestListing";
import ListingCategories from "components/home/ListingCategories/ListingCategories";
// import LoadingPage from "components/design/LoadingPage/LoadingPage";
// import LoadingItems from "components/design/LoadingItems/LoadingItems";
import HelpYouFind from "components/home/HelpYouFind/HelpYouFind";
import HeroPage from "components/HeroPage/HeroPage";
// import ButtonLg from "components/design/Buttons/ButtonLg";
import { useRouter } from "next/router";
import ContactUs from "components/home/ContactUs/ContactUs";
import NeedHomeLoan from "components/home/NeedHomeLoan/NeedHomeLoan";
import LoadingItems from "components/design/LoadingItems/LoadingItems";

export default function Home() {
  const router = useRouter(); // Use the useRouter hook to access the router object
  const [isloading, setloading] = useState(false);
  const [listings, setListings] = useState([]);
  const [listingsArray, setListingsArray] = useState(listings.properties || []);
  const [purpose, setPurpose] = useState("for-sale");

  const limit = 8; // Specify the limit for properties per page

  const fetchListings = async (purposeData) => {
    setloading(true);
    try {
      const response = await listingsAPI(
        `properties/purpose/${purposeData || "for-sale"}?page=${
          router.query.page || 1
        }&limit=${limit}`
      );
      setListings(response);
      setListingsArray(response.properties);
      setloading(false);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  const updateSearchParams = (newParams) => {
    router.push(
      `/search?purpose=${newParams.purpose}&city=${newParams.city}&category=${newParams.category}`
    );
  };

  // Callback function to update purpose
  const rentSaleToggle = (purpose) => {
    setPurpose(purpose);
  };

  useEffect(() => {
    // Fetch listings when purpose changes
    fetchListings(router.query.purpose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.purpose, router.query.city, router.query.category]);

  useEffect(() => {
    // Fetch listings when purpose changes
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
        <title>Deal Real - Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
        <div className="container mx-auto px-7">
          {/* discover your perfect home */}
          <DicoverPerfectHome
            //rentSaleToggle: this will flag if the listing purpose value changed on toggle menu
            rentSaleToggle={rentSaleToggle}
            updateSearchParams={updateSearchParams}
          />
          {/* newest listing */}
          {isloading ? (
            <LoadingItems />
          ) : (
            <NewestListing listings={listingsArray} />
          )}
          {/* we help you find your dream house */}
          <HelpYouFind />
        </div>
        {/* need home loan section */}
        <NeedHomeLoan />
        <div className="container mx-auto px-7">
          {/* listing categories*/}
          {isloading ? (
            <LoadingItems />
          ) : (
            <ListingCategories listings={listingsArray} />
          )}
        </div>
        {/* contact us section */}
        <HeroPage>
          <ContactUs />
        </HeroPage>
      </>
    </>
  );
}
