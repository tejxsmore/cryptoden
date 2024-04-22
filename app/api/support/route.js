import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const data = await request.json();

  try {
    const name = data.name;
    const email = data.email;
    const message = data.message;
    console.log(`${name} (${email}) : ${message}`);

    await sql`INSERT INTO support (Email, Name, Message) VALUES (${email}, ${name}, ${message});`;
  } catch (error) {
    console.error("Kuch to gadbad hai bawa : ", error);
  }

  return NextResponse.json(data);
}
