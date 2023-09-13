'use client'
import React, { useContext, useState, useRef, useEffect } from 'react';
import InLessonTopBar from '../InLessonTopBar.js';
import { useRouter } from 'next/navigation'
import { LanguageContext, ThemeContext, ColorContext, NotationContext, NoteContext, LessonContext } from '../../component/context.js';
import { soundList } from './soundList.js';
import text from "/text.json"
import notation from "/notation.json"
import Cookies from 'js-cookie';
import "./InLesson.css"

export default function Page(){

    const router = useRouter();
    const { Language } = useContext(LanguageContext);
    const { Color } = useContext(ColorContext);
    const { Theme } = useContext(ThemeContext);
    const { Notation } = useContext(NotationContext);
    const { Note, setNote } = useContext(NoteContext);
    const { Lesson } = useContext(LessonContext);
    const [ lessonState, setLessonState] = useState("notStarted");
    const [ currentDisplayNote, setCurrentDisplayNote ] = useState("?");
    const [ score, setScore ] = useState(0);
    const [ noteList, setNoteList ] = useState(Array.from({length: Lesson.exam ? 50 : 20}));
    const [ currentNoteList, setCurrentNoteList ] = useState(0);
    const [ loop, setLoop ] = useState(false);
    const displayNoteRef = useRef(null);

    const playSound = (soundKey) => {
        const audio = new Audio(soundList[soundKey]);
        audio.play();
    }

    useEffect(()=> {
        if(lessonState == "started" && loop){
            setTimeout(()=>{
                const displayNote = displayNoteRef.current;
                setCurrentDisplayNote("?");
                if(displayNote.classList.contains("good")){
                    displayNote.classList.remove("good");
                }
                if(displayNote.classList.contains("bad")){
                    displayNote.classList.remove("bad");
                }
                playSound(noteList[currentNoteList]);
                setLoop(false);
            }, 1000);
        }
    })

function middleButtonClickHandler(){
    let notStateNoteList;
    if (lessonState == "notStarted") {
        setLessonState("started");
        notStateNoteList = generateLesson(noteList.length);
        playSound(notStateNoteList[currentNoteList]);
        return;
    } else if(lessonState == "started"){
        playSound(noteList[currentNoteList]);
        return;
    } else{
        router.back();
    }
}

function generateLesson(listLength){
    let newNoteList = Array.from({length: listLength});
    let note;
    for (let index = 0; index < listLength; index++) {
        note = Math.floor(Math.random() *  Lesson.notes.length);
        newNoteList[index] = Lesson.notes[note];
    }
    setNoteList(newNoteList);
    return newNoteList;
}

function updateNote(score){
    const newNote = Note.map((listElement, listIndex) => {
        if(listIndex == Lesson.chapter){
            return(listElement.map((element, index) =>{
                if(index == Lesson.lesson && score > element){
                    return score;
                } else {
                    return element;
                }
            }))
        } else {
            return listElement;
        }
    })
    setNote(newNote);
    Cookies.set("Note", JSON.stringify(newNote), {expires: 365});
}

function toneButtonClickHandler(note){
    let noteToPlay;
    let notStateScore;
    let nextNote;
    let max;
    const displayNote = displayNoteRef.current;
    if((noteList[currentNoteList][0] === "m" || noteList[currentNoteList][0] === "M") && noteList[currentNoteList][1] === "i"){
        noteToPlay = note + noteList[currentNoteList][noteList[currentNoteList].length-1];
    } else if((noteList[currentNoteList][0] === "m" || noteList[currentNoteList][0] === "M") && !(noteList[currentNoteList][0] === "m" && noteList[currentNoteList][1] === "i")){
        noteToPlay =  noteList[currentNoteList][0] + note + noteList[currentNoteList][noteList[currentNoteList].length-1];
    } else if((noteList[currentNoteList][0] === "m" || noteList[currentNoteList][0] === "M") && (noteList[currentNoteList][1] === "m" && noteList[currentNoteList][2] === "i")){
        noteToPlay =  noteList[currentNoteList][0] + note + noteList[currentNoteList][noteList[currentNoteList].length-1];
    }else {
        noteToPlay = note + noteList[currentNoteList][noteList[currentNoteList].length-1];
    }
    playSound(noteToPlay);
    if(noteToPlay == noteList[currentNoteList]){
        setCurrentDisplayNote(noteList[currentNoteList]);
        displayNote.classList.add("good");
        notStateScore = score + 1;
        setScore(notStateScore);
        updateNote(notStateScore);
    } else{
        setCurrentDisplayNote(noteList[currentNoteList]);
        displayNote.classList.add("bad");
    }
    nextNote = currentNoteList + 1;
    Lesson.exam ? max = 50 : max = 20;
    if(nextNote == max){
        setLessonState("finished");
    } else{
        setCurrentNoteList(nextNote);
    }
    setLoop(true);
}

    return(
        <body className={`${Theme}`}>
        <div className={`Background ${Theme}`}>
            <div className='TopScreen'>
                <InLessonTopBar title={Lesson.title} description={Lesson.description} />
                <p className='score'>Score: {score}/{Lesson.exam ? "50" : "20"}</p>
                <p id='displayNote' ref={displayNoteRef}>{lessonState === "notStarted" ? "" :
                lessonState === "started" ? currentDisplayNote :
                score + "/" + (Lesson.exam ? "50" : "20")}</p>
                <button className={`middleButton ${Color}`} onClick={() => middleButtonClickHandler()}>
                    {lessonState === "notStarted" ? text[Language].lesson_start :
                    lessonState === "started" ? text[Language].lesson_relisten :
                    text[Language].lesson_backList}</button>
            </div>
            <div className='bottomScreen'>
                {lessonState === "started" && Lesson.sharp ? 
                <div className='sharp'>
                    <button className={`toneButton ${Color}`} onClick={() => toneButtonClickHandler("DoSharp")}>{notation[Notation].DoSharp}</button>
                    <button id='Re' className={`toneButton ${Color}`} onClick={() => toneButtonClickHandler("ReSharp")}>{notation[Notation].ReSharp}</button>
                    <button id='Fa' className={`toneButton ${Color}`} onClick={() => toneButtonClickHandler("FaSharp")}>{notation[Notation].FaSharp}</button>
                    <button id='Sol' className={`toneButton ${Color}`} onClick={() => toneButtonClickHandler("SolSharp")}>{notation[Notation].SolSharp}</button>
                    <button id='La' className={`toneButton ${Color}`} onClick={() => toneButtonClickHandler("LaSharp")}>{notation[Notation].LaSharp}</button>
                </div> : ""}
                {lessonState =="started" && (
                <div className='notes'>
                    <button className={`toneButton ${Color}`} onClick={() => toneButtonClickHandler("Do")}>{notation[Notation].Do}</button>
                    <button className={`toneButton ${Color}`} onClick={() => toneButtonClickHandler("Re")}>{notation[Notation].Re}</button>
                    <button className={`toneButton ${Color}`} onClick={() => toneButtonClickHandler("Mi")}>{notation[Notation].Mi}</button>
                    <button className={`toneButton ${Color}`} onClick={() => toneButtonClickHandler("Fa")}>{notation[Notation].Fa}</button>
                    <button className={`toneButton ${Color}`} onClick={() => toneButtonClickHandler("Sol")}>{notation[Notation].Sol}</button>
                    <button className={`toneButton ${Color}`} onClick={() => toneButtonClickHandler("La")}>{notation[Notation].La}</button>
                    <button className={`toneButton ${Color}`} onClick={() => toneButtonClickHandler("Si")}>{notation[Notation].Si}</button>
                </div>
                )}
            </div>
        </div>
        </body>
    );
}