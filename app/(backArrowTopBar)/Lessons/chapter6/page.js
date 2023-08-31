'use client'
import React, { useContext } from 'react';
import { chapter6 } from "./../chapters.js"
import { LanguageContext, ThemeContext, ColorContext, NotationContext, NoteContext } from '../../../component/context.js';
import BackArrowLayout from "../../BackArrowTopBar.js";
import Link from 'next/link';
import text from "/text.JSON"
import notation from "/notation.json"
import './../chapter.css';

function percentage(id, noteList){
    let total;
    if (chapter6[id].exam == true) {
        total = 50;
    } else {
        total = 20;
    }
    return Math.round((100*noteList[6][id])/total)
}

export default function Page(){

    const { Language } = useContext(LanguageContext);
    const { Color } = useContext(ColorContext);
    const { Theme } = useContext(ThemeContext);
    const { Notation } = useContext(NotationContext);
    const { Note } = useContext(NoteContext);

    const list = chapter6.map(chapter =>{
        if(chapter.exam){
            return(
            <li key={chapter.id} className={`listItem ${Color}`}>
                <Link href={""}>
                    <h1 className='chapterId'>{text[Language].exam} {chapter.num}</h1>
                    <div className='DivChapterName'>
                        <h2 className='chapterName'>{text[Language][chapter.name]}</h2>
                    </div>
                    <div className={`progression ${Theme}`}>{percentage(chapter.id, Note)+"%"}</div>
                </Link>
            </li>);
        }
        else{
            return(<li key={chapter.id} className={`listItem ${Color}`}>
            <Link href={chapter.id == 0 ? "chapter6/ExplanationOnPerfectsMinorsChords" : ""}>
                <h1 className="chapterId">{text[Language].lesson} {chapter.num}</h1>
                <div className='DivChapterName'>
                    <h2 className="chapterName">{chapter.id == 0 ? text[Language][chapter.name] : notation[Notation][chapter.name]}</h2>
                </div>
                <div className={`progression ${Theme}`}>{percentage(chapter.id, Note)+"%"}</div>
            </Link>
        </li>);
        }
    })

    return(
        <>
        <div className={`BackgroundChapter six ${Theme}`}>
            <BackArrowLayout title={text[Language].chapter6_title} />
            <ul className="chaptersList">
                {list}
            </ul>
        </div>
        </>
    );
}