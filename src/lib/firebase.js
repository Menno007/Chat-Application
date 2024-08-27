import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4AwYq1VrqwYX6Gv040BIVyqrGAYf18tk",
  authDomain: "chat-menna-b34e6.firebaseapp.com",
  projectId: "chat-menna-b34e6",
  storageBucket: "chat-menna-b34e6.appspot.com",
  messagingSenderId: "741929625088",
  appId: "1:741929625088:web:c8f7b1a1a9e075021fdae5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
