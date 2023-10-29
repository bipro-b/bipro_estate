import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBeJDYmvenR_RkU1C8YWDENnSmlRXZNM8E",
  authDomain: "estate-mern-3876a.firebaseapp.com",
  projectId: "estate-mern-3876a",
  storageBucket: "estate-mern-3876a.appspot.com",
  messagingSenderId: "121887514482",
  appId: "1:121887514482:web:3380ba043d520edc0b47eb"
};

export const app = initializeApp(firebaseConfig);