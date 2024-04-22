import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const data = await request.json();
  const email = data.email;
  console.log(email);

  try {
    if (!email) throw new Error("Email not found in /api/newsletter");
    await sql`INSERT INTO newsletter (Email) VALUES (${email});`;
  } catch (error) {
    console.error("Kuch to gadbad hai bawa : ", error);
  }

  return NextResponse.json(data);
}
