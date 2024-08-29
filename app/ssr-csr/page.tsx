import React from 'react'

// async 
async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = res.json();
    return data;
}
export default async function page() {
    const posts = await getData();
    return (
        <div>Danh sách bài viết với refresh!
            {posts.map((item: any) => {
                return <li>{item.title}</li>
            })}
        </div>
    )
}
