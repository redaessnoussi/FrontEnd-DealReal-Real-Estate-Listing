// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.scss";
import firebaseProvider from "../firebase/firebase";
// Firebase Auth
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

export default function Auth() {
  const auth = getAuth();

  const googleSignIn = async () => {
    await signInWithPopup(auth, firebaseProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(result);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode);
      });
  };

  const googleSignOut = async () => {
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log("An error happened");
      });
  };
  return (
    <>
      <button onClick={() => googleSignIn()}>Sign In</button>
      <button onClick={() => googleSignOut()}>Sign Out</button>
    </>
  );
}
