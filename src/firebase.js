import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALmyTk6I7KBuIsywz9XpepoYHb4MBz2gE",
  authDomain: "chat-bot-f98eb.firebaseapp.com",
  projectId: "chat-bot-f98eb",
  storageBucket: "chat-bot-f98eb.appspot.com",
  messagingSenderId: "615062759415",
  appId: "1:615062759415:web:4d62760303c8675c59f0f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
