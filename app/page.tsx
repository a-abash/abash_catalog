'use client'
import Image from "next/image";
import { useState } from "react";
import LoginForm from "./login/LoginForm";
import SignupForm from "./signup/SignupForm";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false); // Очищаємо стан
  };
  return (
    <div className="grid items-center justify-items-center h-[100dvh] p-1 sm:p-1 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {!isLoggedIn ? (
            <div className="p-4 mx-5 h-full flex justify-center rounded-3xl backdrop-blur-sm bg-white/40">
              <SignupForm />
              <LoginForm />
            </div>
          ) : (
            <div>
              <p>You are logged in!</p>
              <button
                onClick={handleLogout}
                className="p-2 bg-red-500 text-white"
              >
                Logout
              </button>
            </div>
          )}
      </main>
      <footer className="row-start-3 flex gap-3 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>
    </div>
  );
}
