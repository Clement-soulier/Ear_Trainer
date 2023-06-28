import React from 'react';
import { chapters } from "./chapters.js";
import BackArrowLayout from "../BackArrowTopBar";
import './chapter.css'
import Link from 'next/link';

export default function Page(){
const list = chapters.map(chapter =>
    <li key={chapter.id} className="listItem">
        <Link href={"/Lessons/chapter" + chapter.id}>
            <h1 className="chapterId">chapter {chapter.id}</h1>
            <h2 className="chapterName">{chapter.name}</h2>
            <h3 className="chapterDescription">{chapter.description}</h3>
            <div className="progression">00%</div>
        </Link>
    </li>)

    return(
        <>
        <BackArrowLayout title={"Lessons"} />
        <ul className="chaptersList">
            {list}
        </ul>
        </>
    );
}