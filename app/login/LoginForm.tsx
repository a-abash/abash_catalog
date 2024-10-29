"use client"; // Додаємо для клієнтських компонентів

import { LoginFormData, useLoginForm } from "./useLoginForm";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const { onSubmit, errorMessage } = useLoginForm();

  return (
    <div className="mx-5 h-full flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-[500px] w-[300px] m-auto flex justify-center flex-col"
      >
        <div className="relative mb-2">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full h-[42px] p-2 border rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.email && (
            <p className="absolute right-2 bottom-[1px] text-xs text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative mb-2">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full h-[42px] p-2 border rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.password && (
            <p className="absolute right-2 bottom-[1px] text-xs text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          Login
        </button>
        {errorMessage && <p className="mt-2 text-xs text-red-400">{errorMessage}</p>}
      </form>
    </div>
  );
}
