// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1-wC8siov2jGRu8MviXjuDoF07bCZ2S0",
  authDomain: "netflixdummy-9058c.firebaseapp.com",
  projectId: "netflixdummy-9058c",
  storageBucket: "netflixdummy-9058c.appspot.com",
  messagingSenderId: "715465543459",
  appId: "1:715465543459:web:9f7344fe5ddf3409380696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();