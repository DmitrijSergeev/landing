import Link from "next/link";
import React from "react";



export default function Home() {
    return (

        <div>
            <h1>
                Hello, World!
            </h1>
            <Link href={'/login'}>Login -{'>'} </Link>
        </div>
    )
}
