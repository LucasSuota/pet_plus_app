"use client";

import { AuthContext } from "@/context/AuthContext";
import { db, storage } from "@/firebase/firebase";
import { AddAnimalInputs } from "@/types";
import { ref as refDatabase, set as setDatabase } from "firebase/database";
import {
  getDownloadURL,
  ref as refStorage,
  uploadBytesResumable,
} from "firebase/storage";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddAnimalForm = () => {
  const currentUser = useContext(AuthContext);
  const [photo, setPhoto] = useState<any>(null);
  const [file, setFile] = useState<string>();
  const [uploading, setUploading] = useState<number>(0);

  const handlePhotoChange = (e: any) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
      setFile(URL.createObjectURL(e.target.files[0]));
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
      const uploadTask = uploadBytesResumable(pictureRef, photo);
      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploading(progress);
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(pictureRef).then((url) => {
            setDatabase(
              refDatabase(db, "users/" + currentUser.uid + "/" + data.name),
              {
                name: data.name,
                bio: data.bio,
                picture: url,
              }
            );
          });
        }
      );
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
            <label
              htmlFor="fileInput"
              className="cursor-pointer animate-pulse relative w-[100px] h-[100px] mx-auto mt-4"
            >
              {file ? (
                <Image
                  className="rounded-lg"
                  src={file}
                  alt="upload profile picture"
                  fill
                />
              ) : (
                <Image
                  className="rounded-lg"
                  src={"/svg/person-circle.svg"}
                  alt="upload profile picture"
                  fill
                />
              )}
            </label>
            <input
              id="fileInput"
              className="hidden"
              type="file"
              onChange={handlePhotoChange}
            />
          </div>
        </div>
        <button
          className="cursor-pointer disabled:bg-slate-500 bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded-lg mt-10"
          type="submit"
          disabled={false}
        >
          Adicionar
        </button>
      </form>
    </>
  );
};

export default AddAnimalForm;
