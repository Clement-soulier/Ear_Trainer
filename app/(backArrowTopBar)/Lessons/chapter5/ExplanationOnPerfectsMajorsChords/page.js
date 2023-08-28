'use client'
import React, { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../../../../component/context';
import BackArrowTopBar from '../../../BackArrowTopBar';
import text from "/text.JSON"
import Image from 'next/image'
import "./major.css"

export default function Page(){

    const { Language } = useContext(LanguageContext);
    const { Theme } = useContext(ThemeContext);

    return(
        <div className= {`BackgroundChapter2Lesson0 ${Theme}`}>
            <BackArrowTopBar title={text[Language].chapter5_lesson0}/>
            <div className='screen'>
                <p className='text'>{text[Language].chapter5_lesson0_text1}</p>
                <p className='text'>{text[Language].chapter5_lesson0_text2}</p>
                <Image className='IllustrationImage' src={"/PerfectMajorChords1.png"} alt='Illustration Image' width={100} height={100}/>
                <p className='text'>{text[Language].chapter5_lesson0_text3}</p>
                <Image className='illustrationImage' src={"/PerfectMajorChords2.png"} alt='Illustration Image' width={100} height={100}/>
                <p className='text'>{text[Language].chapter5_lesson0_text4}</p>
            </div>
        </div>
    );
}