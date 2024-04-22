import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

export async function POST(request) {
  const user = await currentUser();
  const userId = user.id;

  const data = await request.json();
  const id = data.id + 1001;
  const pid = data.pid;
  const price = data.price;
  const img = data.img;
  console.log(data);

  try {
    await sql`INSERT INTO owned (Userid, Id, Pid, Img, Price) VALUES (${userId},${id}, ${pid}, ${img}, ${price});`;
  } catch (error) {
    console.error("Kuch to gadbad hai bawa : ", error);
  }

  return NextResponse.json(data);
}
