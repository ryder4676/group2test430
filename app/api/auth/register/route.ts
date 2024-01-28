import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    // Validate email and password ZOD LIBRARY
    console.log({ email, password });
  } catch (e) {
    console.log({ e });
  }
  return NextResponse.json({message: "Success!"});
}
