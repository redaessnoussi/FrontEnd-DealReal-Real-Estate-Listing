// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPiVcLmUQKjWXj65GyzPHw9g6lsknQYvU",
  authDomain: "deal-real.firebaseapp.com",
  projectId: "deal-real",
  storageBucket: "deal-real.appspot.com",
  messagingSenderId: "113035359288",
  appId: "1:113035359288:web:76a99f45ca93950000e2cd",
};

initializeApp(firebaseConfig);

const firebaseProvider = new GoogleAuthProvider();

export default firebaseProvider;
