'use client'
import React, { useContext } from 'react';
import InLessonTopBar from '../InLessonTopBar.js';
import { ThemeContext, ColorContext, LessonContext } from '../../component/context.js';
import Image from 'next/image'
import "./InLesson.css"

export default function Page(){

    const { Color } = useContext(ColorContext);
    const { Theme } = useContext(ThemeContext);
    const { Lesson } = useContext(LessonContext);

    return(
        <>
        <div className={`Background ${Theme}`}>
            <div className='TopScreen'>
                <InLessonTopBar title={Lesson.title} description={Lesson.description} />
                <p className='score'>{Lesson.exam ? "Score: 0/50" : "Score: 0/20"}</p>
                <Image alt='speaker' src="/mute-speaker.png" width={200} height={200}/>
                <button className={`middleButton ${Color}`}>Listen again</button>
            </div>
            <div className='bottomScreen'>
                <div className='sharp'>
                    <button className={`toneButton ${Color}`}>C#</button>
                    <button id='Re' className={`toneButton ${Color}`}>D#</button>
                    <button id='Fa' className={`toneButton ${Color}`}>F#</button>
                    <button id='Sol' className={`toneButton ${Color}`}>G#</button>
                    <button id='La' className={`toneButton ${Color}`}>A#</button>
                </div>
                <div className='notes'>
                    <button className={`toneButton ${Color}`}>C</button>
                    <button className={`toneButton ${Color}`}>D</button>
                    <button className={`toneButton ${Color}`}>E</button>
                    <button className={`toneButton ${Color}`}>F</button>
                    <button className={`toneButton ${Color}`}>G</button>
                    <button className={`toneButton ${Color}`}>A</button>
                    <button className={`toneButton ${Color}`}>B</button>
                </div>
            </div>
        </div>
        </>
    );
}