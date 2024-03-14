import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  const id = data.id;
  const title = data.title;
  const price = data.price;
  const image = data.img;

  console.log(id, " : ", title, price);

  try {
    await sql`INSERT INTO owned (Id, Title, Image, Price) VALUES (${id}, ${title}, ${image}, ${price});`;
  } catch (error) {
    console.error("Kuch to gadbad hai bawa : ", error);
  }

  return NextResponse.json(data);
}
