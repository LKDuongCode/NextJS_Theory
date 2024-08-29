"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function page() {
    const [valueInput, setValueInput] = useState<any>();
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log("giá trị người dùng nhập", value);
        setValueInput(value);
    }
    const handleClick = () => {
        console.log("gọi hàm click!");
        router.push(`/posts?search=${valueInput}`);
    }
    return (
        <div>
            <input
                onChange={handleChange}
                className='border border-black'
                type="text" />
            <button onClick={handleClick}>Tìm kiếm</button>
            {/* 
                1. lấy giá trị người dùng nhập
                2. tạo sự kiện khi nhấn vào button tìm kiếm
                3. bắn giá trị người dùng nhập lên url
                3.1 sử dụng router.push().
            */}
        </div>
    )
}
