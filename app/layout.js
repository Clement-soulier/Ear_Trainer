'use client'
import React from 'react';
import './home.css';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

function cookiesExistenceCheck(){
  return (
    Cookies.get('Language') &&
    Cookies.get('Theme') &&
    Cookies.get('Color') &&
    Cookies.get('Notation')
  );
}

function createDefaultCookies() {
  Cookies.set('Language', 'English');
  Cookies.set('Theme', 'Light');
  Cookies.set('Color', 'Red');
  Cookies.set('Notation', 'Alphabetic');
}

function cookiesHandler(){
  if(cookiesExistenceCheck() == undefined){
    createDefaultCookies();
  }
}

export default function RootLayout({children}) {
    useEffect(() => {cookiesHandler();}, []);
    return (
      <html lang="en">
        <body>
            {children}
        </body>
      </html>
    )
  }