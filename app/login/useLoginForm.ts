"use client"; // Додаємо для клієнтських компонентів

import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export interface LoginFormData {
  email: string;
  password: string;
}

export function useLoginForm() {
  const router = useRouter(); // Хук для навігації
  const [errorMessage, setErrorMessage] = useState<string>();

  async function onSubmit(data: LoginFormData) {
    try {
      const response = await axios.post("/api/users/login", {
        email: data.email,
        password: data.password,
      });
      console.log(response.data.message);

      // Наприклад, після логіна можна редіректити на головну
      router.push("/");
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message as string;
        setErrorMessage(errorMessage);
      } else {
        setErrorMessage("Invalid login credentials");
      }
    }
  }

  return { onSubmit, errorMessage };
}
