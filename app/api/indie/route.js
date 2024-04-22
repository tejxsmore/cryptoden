import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  const result = await sql`SELECT * FROM mint`;
  try {
    if (!result) throw new Error("Results not fetched from database");
  } catch (error) {
    console.error("Kuch to gadbad hai bawa : ", error);
  }

  return NextResponse.json(result);
}
