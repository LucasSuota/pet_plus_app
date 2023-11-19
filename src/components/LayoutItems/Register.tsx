"use client";

import { auth } from "@/firebase/firebase";
import { RegisterInputs } from "@/types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { handleAddDocs } from "@/firebase/database/db";

const Login = () => {
  const [emailError, setEmailError] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    mode: "all",
  });

  const handleSubmitData = (data: RegisterInputs) => {
    signUp(data);
  };

  const signUp = ({ name, email, password }: RegisterInputs) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => handleAddDocs(name))
      .then(() => {
        router.push("/login");
      })
      .catch((err) => {
        setEmailError(true);
        console.error(err);
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
              className="w-full bg-gray-200 rounded-md p-2 mb-1"
              type="text"
              {...register("name")}
            />

            <label className="text-sm text-gray-600 mb-1">Email</label>
            <input
              className="w-full bg-gray-200 rounded-md p-2 mb-1"
              type="email"
              {...register("email")}
            />
            {errors.email?.message && <span>{errors.email?.message}</span>}
          </div>
          <div className="flex flex-col items-start">
            <label className="text-sm text-gray-600 mb-1">Senha</label>
            <input
              className="w-full bg-gray-200 rounded-md p-2 mb-1"
              type="password"
              {...register("password")}
            />
            <label className="text-sm text-gray-600 mb-1">
              Confirmar Senha
            </label>
            <input
              className="w-full bg-gray-200 rounded-md p-2 mb-1"
              type="password"
              {...register("password")}
            />
            {errors.password?.message && (
              <span>{errors.password?.message}</span>
            )}
          </div>
          {emailError ? (
            <p className="text-red-500 text-sm">Email em uso</p>
          ) : null}
        </div>

        <button
          className="w-full cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white p-2 mt-4 rounded-md"
          type="submit"
        >
          REGISTRAR
        </button>
        <Link href="/login">
          <p className="mt-2 text-sm text-gray-600">Voltar</p>
        </Link>
      </form>
    </>
  );
};

export default Login;
