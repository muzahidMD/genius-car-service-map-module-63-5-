// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoZwokbEqIEFrDF9_p6ghUe8Vz1FgEhGs",
    authDomain: "genius-car-services-b9247.firebaseapp.com",
    projectId: "genius-car-services-b9247",
    storageBucket: "genius-car-services-b9247.appspot.com",
    messagingSenderId: "5309796160",
    appId: "1:5309796160:web:0909358f51778904c6b4a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;