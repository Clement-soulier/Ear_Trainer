"use client"

import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import "./InLessonTopBar.css"

export default function InLessonTopBar({title, description}){
    const router = useRouter();
    return(
        <div className="InLessonTopBar">
            <Image alt="BackArrow" src = "/back-Arrow.png" width={50} height={50} className = "backArrow" onClick={() => router.back()}/>
            <h1 className='InLessonTopBarTitle'>{title}</h1>
            <h2 className='InLessonTopBarDescription'>{description}</h2>
            <Image alt="settings" src = "/settings.png" width={65} height={65} className = "settings" />
        </div>
    ); 
}