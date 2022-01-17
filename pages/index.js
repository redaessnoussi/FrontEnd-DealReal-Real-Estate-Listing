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
import listforSale from "../data/listforSale";
import axios from "axios";
import LoadingPage from "../components/design/LoadingPage/LoadingPage";

export default function Home() {
  const [listingforSale, setListingforSale] = useState([]);
  const fetched = listingforSale.length;

  useEffect(() => {
    const fetchListforSale = async () => {
      // listing items to show
      listforSale.params.hitsPerPage = 8;
      axios.request(listforSale).then(function (response) {
        setListingforSale(response.data.hits);
      });
    };

    fetchListforSale();
  }, []);

  return (
    <>
      {fetched !== 0 ? (
        <div className="container mx-auto px-7">
          {/* discover your perfect home */}
          <DicoverPerfectHome />
          {/* newest listing */}
          <NewestListing listings={listingforSale} />
          {/* listing categories*/}
          <ListingCategories listings={listingforSale} />
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
