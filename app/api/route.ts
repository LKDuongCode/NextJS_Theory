// todo : tạo ra các phương thức

import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .catch((err) => err);
  return NextResponse.json(data);
}
