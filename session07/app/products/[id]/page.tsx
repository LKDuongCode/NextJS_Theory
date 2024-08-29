"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {
    // lấy query bên cạnh dấu ? 
    // dùng useSearchParam đây là hook được cung cấp bởi nextjs
    const searchParam = useSearchParams();
    const idProduct = searchParam.get("id");
    console.log("idProduct", idProduct);
    return (
        <div>chi tiết sản phẩm!</div>
    )
}
