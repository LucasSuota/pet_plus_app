import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGvJ_NIHk-DDjFbixQ579JUgPJlNwlSLA",
  authDomain: "pets-database-25941.firebaseapp.com",
  projectId: "pets-database-25941",
  storageBucket: "pets-database-25941.appspot.com",
  messagingSenderId: "620113526521",
  appId: "1:620113526521:web:5f9881f579fad07ae82c28",
  measurementId: "G-KNQE31Q0E6",
};

const app = initializeApp(firebaseConfig);

if (app.name && typeof window !== "undefined") {
  getAnalytics(app);
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
