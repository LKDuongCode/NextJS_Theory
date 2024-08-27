import axios from "axios";
import React from "react";
// todo : dùng axios thay cho fetch
const getData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};
export default async function page() {
  const posts: any = await getData();
  return (
    <div>
      <ul>
        {posts.map((post: any) => {
          return (
            <li key={post.id}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
