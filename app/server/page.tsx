import React from "react";

export default async function page() {
  // todo : func call api
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  };

  const posts = await getData();

  return (
    <div>
      <h3>Data fetching server with fetch</h3>
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
