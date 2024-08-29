import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
//! cần so sánh với code thầy.
export async function PUT(
  request: Request,
  params: { params: { id: string } }
) {
  /// lấy vị trí của file cần đọc
  const filePath = path.join(process.cwd(), "dataBase", "users.json");

  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const findIndex = users.findIndex(
    (user: any) => user.id == +params.params.id
  );

  if (findIndex !== -1) {
    users[findIndex].name = "Duong";
  }
  fs.writeFileSync(filePath, JSON.stringify(users), "utf8");
  return NextResponse.json("put");
}
