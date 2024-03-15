import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  const id = data.id;
  const pid = data.pid;
  const price = data.price;
  const img = data.img;
  console.log(data);

  try {
    await sql`INSERT INTO owned (Id, Pid, Img, Price) VALUES (${id}, ${pid}, ${img}, ${price});`;
  } catch (error) {
    console.error("Kuch to gadbad hai bawa : ", error);
  }

  return NextResponse.json(data);
}
