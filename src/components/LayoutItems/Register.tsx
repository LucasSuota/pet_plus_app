"use client";

import { auth } from "@/firebase/firebase";
import { RegisterInputs } from "@/types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { handleAddDocs } from "@/firebase/database/db";

const Login = () => {
  const [emailError, setEmailError] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
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
              <p className="text-gray-400 text-sm">{errors.name.message}</p>
            )}

            <label className="text-sm text-gray-600 mb-1">Email</label>
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
            <label className="text-sm text-gray-600 mb-1">Senha</label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Senha é necessária",
                minLength: {
                  value: 8,
                  message: "mínimo 8 caracteres",
                },
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
            <label className="text-sm text-gray-600 mb-1">
              Confirmar Senha
            </label>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirme sua senha",
                validate: (value) =>
                  value === watch("password") || "Senhas não são iguais",
              }}
              render={({ field }) => (
                <input
                  className="w-full bg-gray-200 rounded-md p-2 mb-2"
                  type="password"
                  {...field}
                />
              )}
            />
            {errors.confirmPassword && (
              <p className="text-gray-400 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
        {emailError ? (
          <p className="text-red-500 text-sm">Email em uso</p>
        ) : null}
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
