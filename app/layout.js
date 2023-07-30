'use client'
import React from 'react';
import './home.css';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { AppContextProvider } from './component/context';
import { StrictMode } from 'react';

function cookiesExistenceCheck(){
  return (
    Cookies.get('Language') &&
    Cookies.get('Theme') &&
    Cookies.get('Color') &&
    Cookies.get('Notation')
  );
}

function createDefaultCookies() {
  Cookies.set('Language', 'English', {expires: 365});
  Cookies.set('Theme', 'Light', {expires: 365});
  Cookies.set('Color', 'Red', {expires: 365});
  Cookies.set('Notation', 'Alphabetic', {expires: 365});
}

function cookiesHandler(){
  if(cookiesExistenceCheck() == undefined){
    createDefaultCookies();
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