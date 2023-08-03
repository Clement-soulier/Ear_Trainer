'use client'
import React, { useContext } from 'react';
import { chapter1 } from "./../chapters.js"
import { ThemeContext, ColorContext } from '../../../component/context.js';
import BackArrowLayout from "../../BackArrowTopBar.js";
import Link from 'next/link';
import "./../chapter.css"

export default function Page(){

    const { Color } = useContext(ColorContext);
    const { Theme } = useContext(ThemeContext);

    const list = chapter1.map(chapter =>{
        if(chapter.exam){
            return(
            <li key={chapter.id} className={`listItem ${Color}`}>
                <Link href={"/InLesson"}>
                    <h1 className='chapterId'>Exam {chapter.id - 100}</h1>
                    <h2 className='chapterName'>{chapter.name}</h2>
                    <div className={`progression ${Theme}`}>00%</div>
                </Link>
            </li>);
        }
        else{
            return(<li key={chapter.id} className={`listItem ${Color}`}>
            <Link href={""}>
                <h1 className="chapterId">Lesson {chapter.id + 1}</h1>
                <h2 className="chapterName">{chapter.name}</h2>
                <div className={`progression ${Theme}`}>00%</div>
            </Link>
        </li>);
        }
    })

    return(
        <>
        <div className= {`BackgroundChapter one ${Theme}`}>
            <BackArrowLayout title={"First Octave"} />
            <ul className="chaptersList">
                {list}
            </ul>
        </div>
        </>
    );
}