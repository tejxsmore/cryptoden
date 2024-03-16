import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const data = await request.json();

  try {
    const title = data.title;
    const img = data.img;
    const address = data.address;
    const price = Number(data.price);
    const description = data.description;

    await sql`INSERT INTO mint (Title, Img, Address, Price, Description) VALUES (${title}, ${img},${address},${price},${description});`;
  } catch (error) {
    console.error("Kuch to gadbad hai bawa : ", error);
  }

  return NextResponse.json(data);
}
