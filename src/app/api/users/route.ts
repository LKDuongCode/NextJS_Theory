import { NextResponse } from "next/server";
//* import các phần quan trọng
import fs from "fs";
import path from "path";

// todo: đọc file
export async function GET() {
  ///bắt ty catch nếu có lỗi xảy ra
  try {
    ///  bước 1 : cần lấy ra đường dẫn của file cần đọc,
    const filePath = path.join(process.cwd(), "dataBase", "users.json");

    /// bước 2 : sử dụng fs để đọc file
    const data = fs.readFileSync(filePath, "utf8");

    /// bước 3 :ép kiểu từ dạng json sang ts
    const users = JSON.parse(data);

    ///bước 4 : trả về dữ liệu bên phía clients
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(error);
  }
}

//todo: ghi file
export async function POST(request: Request) {
  //bắt lỗi
  try {
    /// bước 1: lấy dữ liệu từ phía client
    const userRequest = await request.json();

    /// bước 2: lấy ra đường dẫn file cần ghi
    const filePath = path.join(process.cwd(), "dataBase", "users.json");

    /// bước 3: đọc file cần ghi vào và push  (nếu không dữ liệu sẽ bị ghi đè)
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));
    users.push(userRequest);

    /// bước 4: ghi file
    fs.writeFileSync(filePath, JSON.stringify(users), "utf8");

    ///bước 6 : trả về dữ liệu cho clients
    return NextResponse.json({ message: "ghi file thành công !" });
  } catch (error) {
    return NextResponse.json({ message: "ghi file thất bại !" });
  }
}
