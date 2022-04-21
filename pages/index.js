import Head from "next/head";
import Image from "next/image";
import firebaseProvider from "../firebase/firebase";
// Firebase Auth
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
// React Components
import DicoverPerfectHome from "../components/home/DicoverPerfectHome/DicoverPerfectHome";
import NewestListing from "../components/home/NewestListing/NewestListing";
import ListingCategories from "../components/home/ListingCategories/ListingCategories";
import { useEffect, useState } from "react";
import listingsAPI from "../data/listingsAPI";
import axios from "axios";
import LoadingPage from "../components/design/LoadingPage/LoadingPage";
import LoadingItems from "../components/design/LoadingItems/LoadingItems";
import HelpYouFind from "../components/home/HelpYouFind/HelpYouFind";
import HeroPage from "../components/HeroPage/HeroPage";
import ButtonLg from "../components/design/Buttons/ButtonLg";

export default function Home() {
  const [listingforSale, setListingforSale] = useState([]);
  const [rentSale, setrentSale] = useState("for-sale");
  const [loading, setLoading] = useState(false);
  const [listingType, setlistingType] = useState("0");
  const fetched = listingforSale.length;

  const rentSaleToggle = (data) => {
    setLoading(false);
    data.textContent === "Rent"
      ? setrentSale("for-rent")
      : setrentSale("for-sale");
  };

  const listingTypeChange = (data) => {
    console.log(data);
    setlistingType(data);
  };

  const fetchlistingsAPI = async (rentSale, listingType) => {
    // listing items to show
    listingsAPI.params.purpose = rentSale;
    listingsAPI.params.categoryExternalID = listingType;
    listingsAPI.params.hitsPerPage = 8;
    axios.request(listingsAPI).then(function (response) {
      setListingforSale(response.data.hits);
      setLoading(true);
    });
  };

  // fetch api by default sale
  useEffect(() => {
    fetchlistingsAPI(rentSale, listingType);
  }, [rentSale, listingType]);

  return (
    <>
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
              <NewestListing listings={listingforSale} />
            ) : (
              <LoadingItems />
            )}
            {/* we help you find your dream house */}
            <HelpYouFind />
            {/* listing categories*/}
            {loading && <ListingCategories listings={listingforSale} />}
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
