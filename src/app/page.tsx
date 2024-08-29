// "use client"
import React from "react";
/* 
  Nextj có 2 loại component
  1. client component
  2. server component
  khi tạo 1 cái compoent ( export default function ở trong nextjs)
  thì mặc định sẽ là server component.
  - chạy môi trường server.
  - console ( khi hiển thị phải hiển thị trong terminal)
  - khi muốn dùng alert thì gọi alert(reactjs)
  - thầy có gọi alert trong nextjs.
  - SSR (server side rendering): lấy  dữ liệu ở phía server sau đó trả về kết quả
  cho bên client, tối ưu SEO( search enginee optimization)

*/
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  return data;
}
const handleClick = () => {
  alert("hello!");
};
export default async function page() {
  let dataUser = await fetchData();
  console.log(11111, dataUser);
  return (
    <div>
      {dataUser?.map((item: any) => {
        return (
          <li>
            {item.name} <button onClick={handleClick}>bấm</button>
          </li>
        );
      })}
    </div>
  );
}
