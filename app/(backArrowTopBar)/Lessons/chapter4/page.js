'use client'
import React, { useContext } from 'react';
import { chapter4 } from "./../chapters.js"
import { ColorContext } from '../../../component/context.js';
import BackArrowLayout from "../../BackArrowTopBar.js";
import Link from 'next/link';
import './../chapter.css';

export default function Page(){

    const { Color } = useContext(ColorContext);

    const list = chapter4.map(chapter =>{
        if(chapter.exam){
            return(
            <li key={chapter.id} className={`listItem ${Color}`}>
                <Link href={""}>
                    <h1 className='chapterId'>exam {chapter.id - 100}</h1>
                    <h2 className='chapterName'>{chapter.name}</h2>
                    <div className='progression'>00%</div>
                </Link>
            </li>);
        }
        else{
            return(<li key={chapter.id} className={`listItem ${Color}`}>
            <Link href={""}>
                <h1 className="chapterId">lesson {chapter.id + 1}</h1>
                <h2 className="chapterName">{chapter.name}</h2>
                <div className="progression">00%</div>
            </Link>
        </li>);
        }
    })

    return(
        <>
        <BackArrowLayout title={"Higher notes"} />
        <ul className="chaptersList">
            {list}
        </ul>
        </>
    );
}