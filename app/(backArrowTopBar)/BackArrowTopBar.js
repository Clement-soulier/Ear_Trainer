'use client'

import React, { useContext } from 'react';
import Image from 'next/image'
import { ColorContext } from '../component/context';
import { useRouter } from 'next/navigation'
import "./BackArrowTopBar.css"

export default function BackArrowTopBar({title}){

    const router = useRouter();

    const { Color } = useContext(ColorContext);

    return(
        <>
        <div className={`BackArrowTopBar ${Color}T`}>
            <Image alt="BackArrow" src = "/back-Arrow.png" width={50} height={50} className = "backArrow" onClick={() => router.back()}/>
            <h1 className = "BackArrowTopBarTitle" >{title}</h1>
        </div>
        </>
    );
}