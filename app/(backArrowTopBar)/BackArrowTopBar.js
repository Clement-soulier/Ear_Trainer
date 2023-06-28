'use client'

import React from 'react';
import Image from 'next/image'
import "./BackArrowTopBar.css"
import { useRouter } from 'next/navigation'

export default function BackArrowTopBar({title}){
    const router = useRouter();

    return(
        <>
        <div className="BackArrowTopBar">
            <Image alt="BackArrow" src = "/back-Arrow.png" width={50} height={50} className = "backArrow" onClick={() => router.back()}/>
            <h1 className = "BackArrowTopBarTitle" >{title}</h1>
            <Image alt="settings" src = "/settings.png" width={65} height={65} className = "settings" />
        </div>
        </>
    );
}