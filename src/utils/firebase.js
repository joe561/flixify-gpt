// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGho08_US_EFxUlWGRv5nTlEqlFyfMhvw",
  authDomain: "flixifygpt.firebaseapp.com",
  projectId: "flixifygpt",
  storageBucket: "flixifygpt.appspot.com",
  messagingSenderId: "1027794481063",
  appId: "1:1027794481063:web:570e44d86687641f835082",
  measurementId: "G-EZE58LW254",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
