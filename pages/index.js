import Head from "next/head";
import { useEffect, useState } from "react";
import { baseUrl, listingsAPI } from "../data/listingsAPI";
// import firebaseProvider from "../firebase/firebase";
// Firebase Auth
// import {
//   getAuth,
//   signInWithPopup,
//   signOut,
//   GoogleAuthProvider,
// } from "firebase/auth";
// React Components
import DicoverPerfectHome from "../components/home/DicoverPerfectHome/DicoverPerfectHome";
import NewestListing from "../components/home/NewestListing/NewestListing";
import ListingCategories from "../components/home/ListingCategories/ListingCategories";
import LoadingPage from "../components/design/LoadingPage/LoadingPage";
import LoadingItems from "../components/design/LoadingItems/LoadingItems";
import HelpYouFind from "../components/home/HelpYouFind/HelpYouFind";
import HeroPage from "../components/HeroPage/HeroPage";
import ButtonLg from "../components/design/Buttons/ButtonLg";

export default function Home({ propertyForSale, propertyForRent }) {
  const [rentSale, setrentSale] = useState("for-sale");
  const [loading, setLoading] = useState(false);
  const [listingType, setlistingType] = useState("0");
  const [fetched, setfetched] = useState(propertyForSale.length);

  const rentSaleToggle = (data) => {
    setLoading(false);
    data.textContent === "Rent"
      ? setrentSale("for-rent")
      : setrentSale("for-sale");
  };

  const listingTypeChange = (data) => {
    setlistingType(data);
  };

  // set loading if data fetched
  useEffect(() => {
    fetched && setLoading(true);
  }, [fetched, rentSale]);

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
            {loading ? (
              <NewestListing
                listings={
                  rentSale == "for-sale" ? propertyForSale : propertyForRent
                }
              />
            ) : (
              <LoadingItems />
            )}
            {/* we help you find your dream house */}
            <HelpYouFind />
            {/* listing categories*/}
            {loading && (
              <ListingCategories
                listings={
                  rentSale == "for-sale" ? propertyForSale : propertyForRent
                }
              />
            )}
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

export const getStaticProps = async () => {
  const propertyForSale = await listingsAPI(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=8`
  );
  const propertyForRent = await listingsAPI(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`
  );

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
};
