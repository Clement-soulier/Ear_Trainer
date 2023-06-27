'use client'

import "./BackArrowTopBar.css"
import { useRouter } from 'next/navigation'

export default function BackArrowTopBar({title}){
    const router = useRouter();

    return(
        <>
        <div className="BackArrowTopBar">
            <img alt="BackArrow" src = "back-Arrow.png" className = "backArrow" onClick={() => router.back()}/>
            <h1 className = "BackArrowTopBarTitle" >{title}</h1>
            <img alt="settings" src = "settings.png" className = "settings" />
        </div>
        </>
    );
}