'use client'
import React, { useContext } from 'react';
import { chapter2 } from "./../chapters.js"
import { ThemeContext, ColorContext } from '../../../component/context.js';
import BackArrowLayout from "../../BackArrowTopBar.js";
import Link from 'next/link';
import './../chapter.css';

export default function Page(){

    const { Color } = useContext(ColorContext);
    const { Theme } = useContext(ThemeContext);

    const list = chapter2.map(chapter =>{
        if(chapter.exam){
            return(
            <li key={chapter.id} className={`listItem ${Color}`}>
                <Link href={""}>
                    <h1 className='chapterId'>Exam {chapter.id - 100}</h1>
                    <div className='DivChapterName'>
                        <h2 className='chapterName'>{chapter.name}</h2>
                    </div>
                    <div className={`progression ${Theme}`}>00%</div>
                </Link>
            </li>);
        }
        else{
            return(<li key={chapter.id} className={`listItem ${Color}`}>
            <Link href={""}>
                <h1 className="chapterId">Lesson {chapter.id}</h1>
                <div className='DivChapterName'>
                    <h2 className="chapterName">{chapter.name}</h2>
                </div>
                <div className={`progression ${Theme}`}>00%</div>
            </Link>
        </li>);
        }
    })

    return(
        <>
        <div className={`BackgroundChapter two ${Theme}`}>
            <BackArrowLayout title={"Sharps and flats"} />
            <ul className="chaptersList">
                {list}
            </ul>
        </div>
        </>
    );
}