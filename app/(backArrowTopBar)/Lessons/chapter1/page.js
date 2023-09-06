'use client'
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation.js';
import { chapter1 } from "./../chapters.js"
import { LanguageContext, ThemeContext, ColorContext, NotationContext, NoteContext, LessonContext } from '../../../component/context.js';
import BackArrowLayout from "../../BackArrowTopBar.js";
import Link from 'next/link';
import text from "/text.json"
import notation from "/notation.json"
import "./../chapter.css"

function percentage(id, noteList){
    let total;
    if (chapter1[id].exam == true) {
        total = 50;
    } else {
        total = 20;
    }
    return Math.round((100*noteList[1][id])/total)
}

export default function Page(){

    const router = useRouter();
    const { Language } = useContext(LanguageContext);
    const { Color } = useContext(ColorContext);
    const { Theme } = useContext(ThemeContext);
    const { Notation } = useContext(NotationContext);
    const { Note } = useContext(NoteContext);
    const { setLesson } = useContext(LessonContext);

    const list = chapter1.map(chapter =>{
        if(chapter.exam){
            return(
            <li key={chapter.id} className={`listItem ${Color}`}>
                <Link href={"/InLesson"} 
                onClick={ e=> {
                    e.preventDefault();
                    const newLesson = {
                        title: text[Language].exam + " " + chapter.num,
                        description: text[Language][chapter.name],
                        notes: chapter.notes,
                        chapter: 1, 
                        lesson: chapter.id,
                        sharp: chapter.sharp,
                        exam: chapter.exam
                    }
                    setLesson(newLesson);
                    router.push("/InLesson");
                }}>
                    <h1 className='chapterId'>{text[Language].exam} {chapter.num}</h1>
                    <h2 className='chapterName'>{text[Language][chapter.name]}</h2>
                    <div className={`progression ${Theme}`}>{percentage(chapter.id, Note) + "%"}</div>
                </Link>
            </li>);
        }
        else{
            return(<li key={chapter.id} className={`listItem ${Color}`}>
            <Link href={"/InLesson"}
            onClick={ e=> {
                e.preventDefault();
                const newLesson = {
                    title: text[Language].lesson + " " + chapter.num,
                    description: notation[Notation][chapter.name],
                    notes: chapter.notes,
                    chapter: 1, 
                    lesson: chapter.id,
                    sharp: chapter.sharp,
                    exam: chapter.exam
                }
                setLesson(newLesson);
                router.push("/InLesson");
            }}>
                <h1 className="chapterId">{text[Language].lesson} {chapter.num}</h1>
                <h2 className="chapterName">{notation[Notation][chapter.name]}</h2>
                <div className={`progression ${Theme}`}>{percentage(chapter.id, Note) + "%"}</div>
            </Link>
        </li>);
        }
    })

    return(
        <>
        <div className= {`BackgroundChapter one ${Theme}`}>
            <BackArrowLayout title={text[Language].chapter1_title} />
            <ul className="chaptersList">
                {list}
            </ul>
        </div>
        </>
    );
}