"use client";

import { AuthContext } from "@/context/AuthContext";
import { db } from "@/firebase/firebase";
import { AddAnimalInputs } from "@/types";
import { ref, set } from "firebase/database";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const AddAnimalForm = () => {
  const currentUser = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddAnimalInputs>({
    mode: "all",
  });

  const handleSubmitData = (data: AddAnimalInputs) => {
    set(ref(db, "users/" + currentUser.uid + "/" + data.name), {
      name: data.name,
      bio: data.bio,
    });
  };

  return (
    <>
      <form
        className="w-full flex flex-col items-center justify-between"
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-start">
            <label className="text-sm text-gray-600 mb-1">Nome</label>
            <input
              className="w-full bg-gray-200 rounded-md p-2 mb-2"
              {...register("name")}
            />
            <label className="text-sm text-gray-600 mb-1">Bio</label>
            <input
              className="w-full bg-gray-200 rounded-md p-2 mb-2"
              {...register("bio")}
            />
          </div>
        </div>
        <button
          className="cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded-lg mt-10"
          type="submit"
        >
          Adicionar
        </button>
      </form>
    </>
  );
};

export default AddAnimalForm;
