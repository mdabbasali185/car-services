// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4WlA75PJrGgb9Uc8qvc1vXVz0DCbBKks",
  authDomain: "car-services-6b23d.firebaseapp.com",
  projectId: "car-services-6b23d",
  storageBucket: "car-services-6b23d.appspot.com",
  messagingSenderId: "631074837578",
  appId: "1:631074837578:web:2b998aaca62f0178fd02b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
