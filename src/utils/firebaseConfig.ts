import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAKpmzwBTwvjBWNoq6v-YsfmlbMqwKT680",
  authDomain: "zoom-clone-a8181.firebaseapp.com",
  projectId: "zoom-clone-a8181",
  storageBucket: "zoom-clone-a8181.appspot.com",
  messagingSenderId: "783419258696",
  appId: "1:783419258696:web:c4a1fe2d93d6096218257d",
  measurementId: "G-8701NMWPMV"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
