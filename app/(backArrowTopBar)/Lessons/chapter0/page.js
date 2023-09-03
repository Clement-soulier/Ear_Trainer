'use client'
import React, { useContext } from 'react';
import { LanguageContext, ThemeContext, ColorContext, NoteContext } from '../../../component/context.js';
import { useRouter } from 'next/navigation'
import BackArrowLayout from "../../BackArrowTopBar.js";
import text from "/text.JSON"
import Image from 'next/image'
import "./tutorial.css"
import Cookies from 'js-cookie';

export default function Page(){

    const router = useRouter();
    const { Language } = useContext(LanguageContext);
    const { Theme } = useContext(ThemeContext);
    const { Color } = useContext(ColorContext);
    const { Note, setNote } = useContext(NoteContext);

    function clickHandler(){
        const nextNote = Note.map((listElement, listIndex) => {
            if(listIndex === 0){
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
        <div className= {`BackgroundTutorial ${Theme}`}>
            <BackArrowLayout title={text[Language].chapter0_title} />
            <div className='screen'>
                    <p className='text'>{text[Language].chapter0_text1}</p>
                    <Image className='IllustrationImage' src={"/tutorial1.png"} alt='Illustration Image' width={250} height={250}/>
                    <p className='text'>{text[Language].chapter0_text2}</p>
                    <p className='text'>{text[Language].chapter0_text3}</p>
                    <Image className='IllustrationImage' src={"/tutorial2.png"} alt='Illustration Image' width={250} height={250}/>
                    <p className='text'>{text[Language].chapter0_text4}</p>
                    <Image className='IllustrationImage' src={"/tutorial3.png"} alt='Illustration Image' width={250} height={250}/>
                    <button className={`button ${Color} tutorialButton`} onClick={() => {clickHandler()}}>{text[Language].lesson0_button}</button>
            </div>
        </div>
    );
}