"use client";

import { Inputs } from "@/types";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [displayError, setDisplayError] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "all",
  });

  const handleSubmitData = (data: Inputs) => {
    signIn(data);
  };

  const signIn = ({ email, password }: Inputs) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
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
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email é necessário",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Endereço de email invalido",
                },
              }}
              render={({ field }) => (
                <input
                  className="w-full bg-gray-200 rounded-md p-2 mb-2"
                  {...field}
                />
              )}
            />
            {errors.email && (
              <p className="text-gray-400 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col items-start">
            <label className="text-sm text-gray-600 mb-2">Password</label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Senha é necessária",
              }}
              render={({ field }) => (
                <input
                  className="w-full bg-gray-200 rounded-md p-2 mb-2"
                  type="password"
                  {...field}
                />
              )}
            />
            {errors.password && (
              <p className="text-gray-400 text-sm">{errors.password.message}</p>
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
