'use client'
import React, { useContext } from 'react';
import InLessonTopBar from '../InLessonTopBar.js';
import { ColorContext } from '../../component/context.js';
import Image from 'next/image'
import "./InLesson.css"

export default function Page(){

    const { Color } = useContext(ColorContext);

    return(
        <>
        <div className='TopScreen'>
            <InLessonTopBar title={"titre"} description={"description"} />
            <p className='score'>Score: 0/20</p>
            <Image alt='speaker' src="/mute-speaker.png" width={200} height={200}/>
            <button className={`middleButton ${Color}`}>Start</button>
        </div>
        <div className='bottomScreen'>
            <button className={`toneButton ${Color}`}>Do</button>
            <button className={`toneButton ${Color}`}>Ré</button>
            <button className={`toneButton ${Color}`}>Mi</button>
            <button className={`toneButton ${Color}`}>Fa</button>
            <button className={`toneButton ${Color}`}>Sol</button>
            <button className={`toneButton ${Color}`}>La</button>
            <button className={`toneButton ${Color}`}>Si</button>
        </div>
        </>
    );
}