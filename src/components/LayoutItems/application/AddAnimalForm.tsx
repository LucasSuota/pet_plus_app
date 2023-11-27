"use client";

import { RegisterInputs } from "@/types";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

const AddAnimalForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterInputs>({
    mode: "all",
  });

  const handleSubmitData = (data: RegisterInputs) => {
    console.log(data);
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
            <Controller
              name="name"
              control={control}
              rules={{ required: "Nome é necessário" }}
              render={({ field }) => (
                <input
                  className="w-full bg-gray-200 rounded-md p-2 mb-2"
                  {...field}
                />
              )}
            />
            {errors.name && (
              <span className="text-gray-400 text-sm">
                {errors.name.message}
              </span>
            )}
            <label className="text-sm text-gray-600 mb-1">Bio</label>
            <input
              className="w-full bg-gray-200 rounded-md p-2 mb-2"
              type="text"
            />

            {errors.name && (
              <span className="text-gray-400 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
        </div>
        <button
          className="cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded-lg"
          type="submit"
        >
          Adicionar
        </button>
      </form>
    </>
  );
};

export default AddAnimalForm;
