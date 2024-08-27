"use client";
import React, { useEffect, useState } from "react";
// todo :  Fetching Data on the Client with Route handles
export default function page() {
  const [data, setData] = useState([]);

  /// lấy dữ liệu
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>client</h1>
      <ul>
        {data.map((post: any) => {
          return (
            <li key={post.id}>
              <p>{post.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
