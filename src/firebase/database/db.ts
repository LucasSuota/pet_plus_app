import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const handleAddDocs = async (name: string) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      nickname: name,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const handleGetDocs = async ({ currentUser }: any) => {
  const userId = currentUser.uid;
  const usersRef = collection(db, "users");
  const nameQuery = query(usersRef, where("nickname", "==", `${userId}`));

  const querySnapshot = await getDocs(collection(db, "users"));
};
