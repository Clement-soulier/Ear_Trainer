'use client'
import React, { useContext } from 'react';
import BackArrowLayout from '../BackArrowTopBar';
import { LanguageContext, ThemeContext } from '../../component/context';
import text from "/text.json"
import './about.css'

export default function Page(){

    const {Language } = useContext(LanguageContext);
    const { Theme } = useContext(ThemeContext);

    return(
        <>
        <div className={`Background ${Theme}`}>
            <BackArrowLayout title={text[Language].about_topbar_title} />
            <div className='AboutScreen'>
                <p className='AboutText'>{text[Language].about_text}</p>
                <p className='AboutText'>{text[Language].about_text2} <a href='mailto:clement.soulier12@gmail.com'>{text[Language].about_mail}</a></p>
            </div>
        </div>
        </>
    );
}