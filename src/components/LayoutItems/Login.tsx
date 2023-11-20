"use client";

import { Inputs } from "@/types";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [displayError, setDisplayError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "all",
  });

  const handleSubmitData = (data: Inputs) => {
    signIn(data);
  };

  const signIn = ({ email, password }: Inputs) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        router.push("/application");
      })
      .catch(() => {
        setDisplayError(true);
      });
  };

  return (
    <>
      <form
        className="flex flex-col items-center justify-between"
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start">
            <label className="text-sm text-gray-600 mb-2">Email</label>
            <input
              className="w-full bg-gray-200 rounded-md p-2 mb-2"
              type="email"
              {...register("email")}
            />
            {errors.email?.message && <span>{errors.email?.message}</span>}
          </div>
          <div className="flex flex-col items-start">
            <label className="text-sm text-gray-600 mb-2">Password</label>
            <input
              className="w-full bg-gray-200 rounded-md p-2 mb-2"
              type="password"
              {...register("password")}
            />
            {errors.password?.message && (
              <span>{errors.password?.message}</span>
            )}
          </div>
        </div>
        {displayError ? (
          <p className="text-red-500 text-sm">Credenciais erradas</p>
        ) : null}
        <button
          className="w-full cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white p-2 mt-4 rounded-md"
          type="submit"
        >
          LOGIN
        </button>
        <Link className="mt-2 text-sm text-gray-600" href={"/register"}>
          Registrar-se
        </Link>
      </form>
    </>
  );
};

export default Login;
