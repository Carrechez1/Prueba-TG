import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAFFNSvAX4JQ9p6NV5KeebF97PTj4qB9zs",
  authDomain: "tugerente-7a30c.firebaseapp.com",
  projectId: "tugerente-7a30c",
  storageBucket: "tugerente-7a30c.appspot.com",
  messagingSenderId: "722052344883",
  appId: "1:722052344883:web:19bdfe55248b1cd83c0746",
  measurementId: "G-3JK8WH33ZR",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
