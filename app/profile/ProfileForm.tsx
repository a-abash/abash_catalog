/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function ProfileForm() {
  const router = useRouter();

  async function logoutUser() {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log("We caould not logout the user" + error.message);
    }
  }

  return (
    <div className="mx-6">
      <div className="my-10 flex justify-end">
        <button
          onClick={logoutUser}
          className="px-10 py-1 bg-white text-black border border-black rounded-full hover:bg-black hover:text-white hover:border-white transition"
        >
          logout
        </button>
      </div>

      <h1 className="text-2xl text-center">Your Profile</h1>
    </div>
  );
}
