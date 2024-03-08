import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.body;
  console.log(data);
  return NextResponse.json(data);
}
