// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgc-SKKNbfs2mnxvfK7UeADR3q6lPkaYw",
  authDomain: "shopify-3a20c.firebaseapp.com",
  projectId: "shopify-3a20c",
  storageBucket: "shopify-3a20c.appspot.com",
  messagingSenderId: "353631827332",
  appId: "1:353631827332:web:f4890c75af0bdb406bd9d1",
  measurementId: "G-2YVEN55HCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
export {auth};