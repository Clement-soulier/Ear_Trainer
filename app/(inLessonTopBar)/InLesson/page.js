import React from 'react';
import InLessonTopBar from '../inLessonTopBar';
import Image from 'next/image'
import "./InLesson.css"

export default function Page(){
    return(
        <>
        <div className='TopScreen'>
            <InLessonTopBar title={"titre"} description={"description"} />
            <p className='score'>Score: 0/20</p>
            <Image alt='speaker' src="/mute-speaker.png" width={200} height={200}/>
            <button className='middleButton'>Start</button>
        </div>
        <div className='bottomScreen'>
            <button className='toneButton'>Do</button>
            <button className='toneButton'>Ré</button>
            <button className='toneButton'>Mi</button>
            <button className='toneButton'>Fa</button>
            <button className='toneButton'>Sol</button>
            <button className='toneButton'>La</button>
            <button className='toneButton'>Si</button>
        </div>
        </>
    );
}