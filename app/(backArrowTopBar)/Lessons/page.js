'use client'
import React, { useContext } from 'react';
import { chapters, chapter0, chapter1, chapter2, chapter3, chapter4, chapter5, chapter6 } from "./chapters.js";
import { LanguageContext, ThemeContext, ColorContext, NoteContext } from '../../component/context.js';
import BackArrowLayout from "../BackArrowTopBar";
import './chapter.css'
import text from "/text.JSON"
import Link from 'next/link';

function percentage(id, noteList) {
    let variableName;
    const variables = {
        variable0 : chapter0,
        variable1 : chapter1,
        variable2 : chapter2,
        variable3 : chapter3,
        variable4 : chapter4,
        variable5 : chapter5,
        variable6 : chapter6,
    }
    switch (id) {
        case 0:
            variableName = "variable0"
            break;
        case 1:
            variableName = "variable1"
            break;
        case 2:
            variableName = "variable2"
            break;
        case 3:
            variableName = "variable3"
            break;
        case 4:
            variableName = "variable4"
            break;
        case 5:
            variableName = "variable5"
            break;
        case 6:
            variableName = "variable6"
            break;
        default:
            variableName = "variable0"
            break;
    }
    
    let total = 0;
    let note = 0;
    for (let index = 0; index < variables[variableName].length; index++) {
        if (variables[variableName][index].exam == true) {
            total += 50
        } else {
            total += 20
        }
    }
    for (let index = 0; index < noteList[id].length; index++) {
        note += noteList[id][index];
    }
    return Math.round((100*note)/total)
}

export default function Page(){

    const { Language } = useContext(LanguageContext);
    const { Color } = useContext(ColorContext);
    const { Theme } = useContext(ThemeContext);
    const { Note } = useContext(NoteContext);

const list = chapters.map(chapter =>
    <li key={chapter.id} className={`listItem ${Color}`}>
        <Link href={"/Lessons/chapter" + chapter.id}>
            <h1 className="chapterId">Chapter {chapter.id}</h1>
            <h2 className="chapterName">{text[Language][chapter.name]}</h2>
            <h3 className="chapterDescription">{text[Language][chapter.description]}</h3>
            <div className= {`progression ${Theme}`}>{percentage(chapter.id, Note) + "%"}</div>
        </Link>
    </li>)

    return(
        <>
        <div className= {`BackgroundChapter ${Theme}`}>
            <BackArrowLayout title={text[Language].chapter_title} />
            <ul className="chaptersList">
                {list}
            </ul>
        </div>
        </>
    );
}