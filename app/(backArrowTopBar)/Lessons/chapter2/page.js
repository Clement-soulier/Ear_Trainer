import React from 'react';
import { chapter2 } from "./../chapters.js"
import BackArrowLayout from "../../BackArrowTopBar.js";
import Link from 'next/link';
import './../chapter.css';

export default function Page(){
    const list = chapter2.map(chapter =>{
        if(chapter.exam){
            return(
            <li key={chapter.id} className='listItem'>
                <Link href={""}>
                    <h1 className='chapterId'>exam {chapter.id - 100}</h1>
                    <h2 className='chapterName'>{chapter.name}</h2>
                    <div className='progression'>00%</div>
                </Link>
            </li>);
        }
        else{
            return(<li key={chapter.id} className="listItem">
            <Link href={""}>
                <h1 className="chapterId">lesson {chapter.id}</h1>
                <h2 className="chapterName">{chapter.name}</h2>
                <div className="progression">00%</div>
            </Link>
        </li>);
        }
    })

    return(
        <>
        <BackArrowLayout title={"Sharps and flats"} />
        <ul className="chaptersList">
            {list}
        </ul>
        </>
    );
}