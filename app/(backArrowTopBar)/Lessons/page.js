'use client'
import React, { useContext } from 'react';
import { chapters } from "./chapters.js";
import { ThemeContext, ColorContext } from '../../component/context.js';
import BackArrowLayout from "../BackArrowTopBar";
import './chapter.css'
import Link from 'next/link';

export default function Page(){

    const { Color } = useContext(ColorContext);
    const { Theme } = useContext(ThemeContext);

const list = chapters.map(chapter =>
    <li key={chapter.id} className={`listItem ${Color}`}>
        <Link href={"/Lessons/chapter" + chapter.id}>
            <h1 className="chapterId">Chapter {chapter.id}</h1>
            <h2 className="chapterName">{chapter.name}</h2>
            <h3 className="chapterDescription">{chapter.description}</h3>
            <div className= {`progression ${Theme}`}>00%</div>
        </Link>
    </li>)

    return(
        <>
        <div className= {`BackgroundChapter ${Theme}`}>
            <BackArrowLayout title={"Lessons"} />
            <ul className="chaptersList">
                {list}
            </ul>
        </div>
        </>
    );
}