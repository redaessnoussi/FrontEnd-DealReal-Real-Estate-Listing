import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPiVcLmUQKjWXj65GyzPHw9g6lsknQYvU",
  authDomain: "deal-real.firebaseapp.com",
  projectId: "deal-real",
  storageBucket: "deal-real.appspot.com",
  messagingSenderId: "113035359288",
  appId: "1:113035359288:web:76a99f45ca93950000e2cd",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const firebaseStorage = getStorage(app);

export { firebaseStorage };
