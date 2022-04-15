// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBE7DpmG9ikQMZqb5wLhL9MIzvdIjc1ZPQ",
    authDomain: "genius-car-services-40ccc.firebaseapp.com",
    projectId: "genius-car-services-40ccc",
    storageBucket: "genius-car-services-40ccc.appspot.com",
    messagingSenderId: "873648866612",
    appId: "1:873648866612:web:a54e788bebb5fa8eca1161"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;