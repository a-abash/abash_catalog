"use client"; // Обов'язково для клієнтських компонентів

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation"; // Для редіректу після реєстрації
import { useState } from "react";

export interface SignupFormData {
  username: string;
  email: string;
  password: string;
}

function validateEmail(value: string) {
  if (!value) return "Email is required";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value) || "Invalid email address";
}

function validateUsername(value: string) {
  if (!value) return "Username is required";
  if (value.length < 3) return "Username must be at least 3 characters long";
  if (value.length > 20) return "Username must be at most 20 characters long";
  return true;
}

function validatePassword(value: string) {
  if (!value) return "Password is required";
  if (value.length < 6) return "Password must be at least 6 characters long";
  return true;
}

export function useSignupForm() {
  const router = useRouter(); // Хук для навігації
  const [errorMessage, setErrorMessage] = useState<string>();

  async function onSubmit(data: SignupFormData) {
    try {
      const response = await axios.post("/api/users/signup", {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      console.log(response.data.message);

      // Після успішної реєстрації редірект на домашню сторінку або сторінку входу
      router.push("/login"); // або на іншу сторінку, яка існує
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message as string;
        setErrorMessage(errorMessage);
      } else {
        setErrorMessage("Something went wrong");
      }
    }
  }

  return {
    validateEmail,
    validateUsername,
    validatePassword,
    onSubmit,
    errorMessage,
  };
}
