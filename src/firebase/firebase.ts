import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

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
export const db = getDatabase(app);
export const dabatase = getFirestore(app);
export const storage = getStorage(app);
