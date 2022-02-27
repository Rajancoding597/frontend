import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// import {db} from './firebase-config'

const firebaseConfig = {
    apiKey: "AIzaSyBOrn27jNJhY3YvauYXzNguOXlpIL7Oxm0",
    authDomain: "hackmol4-46bbb.firebaseapp.com",
    projectId: "hackmol4-46bbb",
    storageBucket: "hackmol4-46bbb.appspot.com",
    messagingSenderId: "837730488297",
    appId: "1:837730488297:web:8c4d66d87037e5b7764578",
    measurementId: "G-1J3L98FL2G"
  };

  const app = initializeApp(firebaseConfig);
  

export const db = getFirestore(app);

