"use client"

import React, { useContext } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ColorContext } from '../component/context';
import "./InLessonTopBar.css"

export default function InLessonTopBar({title, description}){
    const router = useRouter();

    const { Color } = useContext(ColorContext);

    return(
        <div className={`InLessonTopBar ${Color}T`}>
            <Image alt="BackArrow" src = "/back-Arrow.png" width={50} height={50} className = "backArrow" onClick={() => router.back()}/>
            <div className='titleDescriptionDiv'>
                <h1 className='InLessonTopBarTitle'>{title}</h1>
                <div className='descriptionDiv'>
                    <h2 className='InLessonTopBarDescription'>{description}</h2>
                </div>
            </div>
        </div>
    ); 
}