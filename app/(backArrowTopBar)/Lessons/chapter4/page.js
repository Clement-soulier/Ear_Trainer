'use client'
import React, { useContext } from 'react';
import { chapter4 } from "./../chapters.js"
import { LanguageContext, ThemeContext, ColorContext, NotationContext } from '../../../component/context.js';
import BackArrowLayout from "../../BackArrowTopBar.js";
import Link from 'next/link';
import text from "/text.JSON"
import notation from "/notation.json"
import './../chapter.css';

export default function Page(){

    const { Language } = useContext(LanguageContext);
    const { Color } = useContext(ColorContext);
    const { Theme } = useContext(ThemeContext);
    const { Notation } = useContext(NotationContext);

    const list = chapter4.map(chapter =>{
        if(chapter.exam){
            return(
            <li key={chapter.id} className={`listItem ${Color}`}>
                <Link href={""}>
                    <h1 className='chapterId'>{text[Language].exam} {chapter.id - 100}</h1>
                    <div className='DivChapterName'>
                        <h2 className='chapterName'>{text[Language][chapter.name]}</h2>
                    </div>
                    <div className={`progression ${Theme}`}>00%</div>
                </Link>
            </li>);
        }
        else{
            return(<li key={chapter.id} className={`listItem ${Color}`}>
            <Link href={""}>
                <h1 className="chapterId">{text[Language].lesson} {chapter.id + 1}</h1>
                <div className='DivChapterName'>
                    <h2 className="chapterName">{notation[Notation][chapter.name]}</h2>
                </div>
                <div className={`progression ${Theme}`}>00%</div>
            </Link>
        </li>);
        }
    })

    return(
        <>
        <div className={`BackgroundChapter four ${Theme}`}>
            <BackArrowLayout title={text[Language].chapter4_title} />
            <ul className="chaptersList">
                {list}
            </ul>
        </div>
        </>
    );
}