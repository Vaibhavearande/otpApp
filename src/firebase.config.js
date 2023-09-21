// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkfSHCBVLMJDWZr7YPS5rAVdO8JjdVp4k",
  authDomain: "otp-project-e09b1.firebaseapp.com",
  projectId: "otp-project-e09b1",
  storageBucket: "otp-project-e09b1.appspot.com",
  messagingSenderId: "638840234090",
  appId: "1:638840234090:web:b764b1472f293eb5f2aa13",
  measurementId: "G-D5TJM8KFBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
