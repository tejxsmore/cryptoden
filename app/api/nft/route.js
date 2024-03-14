import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const items = await sql`SELECT * FROM owned`;
    if (!items) throw new Error("Items cannot be fetched");
  } catch (e) {
    console.error("Kuch to gadbad hai bawa : ", error);
  }
  return NextResponse.json(item.rows);
}
