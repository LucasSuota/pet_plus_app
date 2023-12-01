import { collection, addDoc, doc, query, where } from "firebase/firestore";
import { dabatase, db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";

export const handleImageUpload = async (imageUrl: string) => {
  try {
    const imageRef = await addDoc(collection(dabatase, "users"), {
      profilePicture: imageUrl,
    });
  } catch (e) {
    console.error(e);
  }
};

export const uploadPhotoURL = async (file: any, user: any) => {
  try {
    const fileRef = ref(storage, user.uid + ".png");
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
    updateProfile(user, { photoURL: photoURL });
  } catch (error) {
    console.error(error);
  }
};

export const handleDocs = async () => {};
