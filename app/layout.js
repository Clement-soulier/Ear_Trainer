'use client'
import React from 'react';
import './home.css';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { AppContextProvider } from './component/context';
import { StrictMode } from 'react';

function cookiesHandler(){
  if(Cookies.get('Language') == undefined){
    Cookies.set('Language', 'English', {expires: 365});
  }
  if(Cookies.get('Theme') == undefined){
    Cookies.set('Theme', 'Light', {expires: 365});
  }
  if(Cookies.get('Color') == undefined){
    Cookies.set('Color', 'Red', {expires: 365});
  }
  if(Cookies.get('Notation') == undefined){
    Cookies.set('Notation', 'Alphabetic', {expires: 365});
  }
  if(Cookies.get("Note") == undefined){
    const defaultNoteList = [[0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
    Cookies.set("Note", JSON.stringify(defaultNoteList), {expires: 365});
  }
}

export default function RootLayout({children}) {
  useEffect(() => {cookiesHandler();}, []);

  return (
    <StrictMode>
    <AppContextProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </AppContextProvider>
    </StrictMode>
  )
}