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

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-7">
        {/* discover your perfect home */}
        <DicoverPerfectHome />
        {/* newest listing */}
        <NewestListing />
        {/* listing categories*/}
        <ListingCategories />
      </div>
    </>
  );
}
