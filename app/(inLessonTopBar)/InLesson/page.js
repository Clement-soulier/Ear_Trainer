'use client'
import React, { useContext } from 'react';
import InLessonTopBar from '../InLessonTopBar.js';
import { ThemeContext, ColorContext } from '../../component/context.js';
import Image from 'next/image'
import "./InLesson.css"

export default function Page(){

    const { Color } = useContext(ColorContext);
    const { Theme } = useContext(ThemeContext);

    return(
        <>
        <div className={`Background ${Theme}`}>
            <div className='TopScreen'>
                <InLessonTopBar title={"Lesson 1"} description={"C3, E3"} />
                <p className='score'>Score: 0/20</p>
                <Image alt='speaker' src="/mute-speaker.png" width={200} height={200}/>
                <button className={`middleButton ${Color}`}>Listen again</button>
            </div>
            <div className='bottomScreen'>
                <button className={`toneButton ${Color}`}>C</button>
                <button className={`toneButton ${Color}`}>D</button>
                <button className={`toneButton ${Color}`}>E</button>
                <button className={`toneButton ${Color}`}>F</button>
                <button className={`toneButton ${Color}`}>G</button>
                <button className={`toneButton ${Color}`}>A</button>
                <button className={`toneButton ${Color}`}>B</button>
            </div>
        </div>
        </>
    );
}