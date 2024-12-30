"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function OrderProduct() {
    
    const router = useRouter();

    const handleClick = () => {
        console.log(`Placing your order`);
        router.push('/');
        // router.replace('/');
        // router.back();
        // router.forward();
    }

    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place order</button>
        </div>
    );
}