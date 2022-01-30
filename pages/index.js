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

export default function Home() {
  const [listingforSale, setListingforSale] = useState([]);
  const [rentSale, setrentSale] = useState("for-sale");
  const [loading, setLoading] = useState(false);
  const fetched = listingforSale.length;

  const rentSaleToggle = (data) => {
    setLoading(false);
    data.textContent === "Rent"
      ? setrentSale("for-rent")
      : setrentSale("for-sale");
  };

  const fetchlistingsAPI = async (rentSale) => {
    // listing items to show
    listingsAPI.params.purpose = rentSale;
    listingsAPI.params.hitsPerPage = 8;
    axios.request(listingsAPI).then(function (response) {
      setListingforSale(response.data.hits);
      setLoading(true);
    });
  };

  // fetch api by default sale
  useEffect(() => {
    fetchlistingsAPI(rentSale);
  }, [rentSale]);

  return (
    <>
      {fetched !== 0 ? (
        <div className="container mx-auto px-7">
          {/* discover your perfect home */}
          <DicoverPerfectHome rentSaleToggle={rentSaleToggle} />
          {/* newest listing */}
          {loading ? (
            <NewestListing listings={listingforSale} />
          ) : (
            <LoadingItems />
          )}
          {/* listing categories*/}
          {loading && <ListingCategories listings={listingforSale} />}
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
