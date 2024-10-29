import { NextResponse } from "next/server";
import { USERS_API_URL } from "../constants";

// pages/api/users/login.ts
export async function POST(req: Request) {
  const url = `${USERS_API_URL}login`;
  const data = await req.json()
  
  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (data.success) return NextResponse.json({ data }, { status: 200 });
    else
      return NextResponse.json(
        { error: data.errors },
        { status: data.statusCode }
      );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
