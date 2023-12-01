"use client";

import { AuthContext } from "@/context/AuthContext";
import { db, storage } from "@/firebase/firebase";
import { AddAnimalInputs } from "@/types";
import { ref as refDatabase, set as setDatabase } from "firebase/database";
import {
  getDownloadURL,
  ref as refStorage,
  uploadBytes,
} from "firebase/storage";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

const AddAnimalForm = () => {
  const currentUser = useContext(AuthContext);
  const [photo, setPhoto] = useState<any>(null);

  const handlePhotoChange = async (e: any) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddAnimalInputs>({
    mode: "all",
  });

  const handleSubmitData = async (data: AddAnimalInputs) => {
    try {
      const pictureRef = refStorage(
        storage,
        `pictures/${currentUser.uid}/${data.name}`
      );
      await uploadBytes(pictureRef, photo);
      await getDownloadURL(pictureRef).then((url) => {
        setDatabase(
          refDatabase(db, "users/" + currentUser.uid + "/" + data.name),
          {
            name: data.name,
            bio: data.bio,
            picture: url,
          }
        );
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        className="w-full flex flex-col items-center justify-between "
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-start">
            <label className="text-sm text-gray-600 mb-1">Nome</label>
            <input
              className="w-full bg-gray-200 rounded-md p-2 mb-2"
              {...register("name", { required: "Preencha o nome" })}
            />
            <label className="text-sm text-gray-600 mb-1">Bio</label>
            <input
              className="w-full bg-gray-200 rounded-md p-2 mb-2"
              {...register("bio", { required: "Preencha a bio" })}
            />
            <input onChange={handlePhotoChange} type="file"></input>
          </div>
        </div>
        <button
          className="cursor-pointer disabled:bg-slate-500 bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded-lg mt-10"
          type="submit"
        >
          Adicionar
        </button>
      </form>
    </>
  );
};

export default AddAnimalForm;
