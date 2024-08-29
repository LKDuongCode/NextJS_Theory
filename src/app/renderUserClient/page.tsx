"use client";
import React, { useEffect, useState } from "react";

/*  
    render dữ liệu use client
*/
// async function fetchData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     return data;
// }
export default function page() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // đi lấy data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  const sayHello = () => {
    alert("xin chào!");
  };
  return (
    <div>
      page
      {user.map((item: any) => {
        return (
          <li>
            {item.name}
            <button onClick={sayHello}>click</button>
          </li>
        );
      })}
    </div>
  );
}
