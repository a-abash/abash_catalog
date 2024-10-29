"use client"; // Обов'язково для клієнтських компонентів

import { SubmitHandler, useForm } from "react-hook-form";
import { SignupFormData, useSignupForm } from "./useSignupForm";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const {
    validateEmail,
    validateUsername,
    validatePassword,
    onSubmit,
    errorMessage,
  } = useSignupForm();

  return (
    <div className="mx-5 h-full flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit as SubmitHandler<SignupFormData>)}
        className="h-[500px] w-[300px] m-auto flex justify-center flex-col"
      >
        <div className="relative mb-2">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { validate: validateEmail })}
            className="w-full h-[42px] p-2 rounded-md border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
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
            placeholder="Username"
            {...register("username", { validate: validateUsername })}
            className="w-full h-[42px] p-2 rounded-md border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.username && (
            <p className="absolute right-2 bottom-[1px] text-xs text-red-400">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="relative mb-2">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { validate: validatePassword })}
            className="w-full h-[42px] p-2 rounded-md border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
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
          Sign up
        </button>
        {errorMessage && <p className="mt-2 text-xs text-red-400">{errorMessage}</p>}
      </form>
    </div>
  );
}
