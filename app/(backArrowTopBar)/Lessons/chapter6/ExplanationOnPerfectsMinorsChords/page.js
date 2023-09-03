'use client'
import React, { useContext } from 'react';
import { LanguageContext, ThemeContext, ColorContext, NoteContext } from '../../../../component/context';
import BackArrowTopBar from '../../../BackArrowTopBar';
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';
import text from "/text.JSON"
import Image from 'next/image'
import "./minor.css"

export default function Page(){

    const router = useRouter();
    const { Language } = useContext(LanguageContext);
    const { Theme } = useContext(ThemeContext);
    const { Color } = useContext(ColorContext);
    const { Note, setNote } = useContext(NoteContext);

    function clickHandler(){
        const nextNote = Note.map((listElement, listIndex) => {
            if(listIndex === 6){
                return(listElement.map((element, index) => {
                    if(index === 0 && element == 0){
                        return element + 20;
                    } else{
                        return element;
                    }
                }));
            } else {
                return listElement;
            }
        })
        setNote(nextNote);
        Cookies.set("Note", JSON.stringify(nextNote), {expires: 365});
        router.back();
    }

    return(
        <div className= {`BackgroundChapter2Lesson0 ${Theme}`}>
            <BackArrowTopBar title={text[Language].chapter6_lesson0} />
            <div className='screen'>
                <p className='text'>{text[Language].chapter6_lesson0_text1}</p>
                <p className='text'>{text[Language].chapter6_lesson0_text2}</p>
                <Image className='IllustrationImage' alt='Illustration Image' src={"/PerfectMinorChords1.png"} width={100} height={100}/>
                <p className='text'>{text[Language].chapter6_lesson0_text3}</p>
                <p className='text'>{text[Language].chapter6_lesson0_text4}</p>
                <Image className='IllustrationImage' alt='Illustration Image' src={"/PerfectMinorChords2.png"} width={100} height={100}/>
                <button className={`button ${Color} tutorialButton`} onClick={() => {clickHandler()}}>{text[Language].lesson0_button}</button>
            </div>
        </div>
    );
}