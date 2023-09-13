'use client'
import React from 'react';
import './home.css';
import { AppContextProvider } from './component/context';
import { StrictMode } from 'react';
import "./home.css";

export default function RootLayout({ children }) {

  return (
    <StrictMode>
      <AppContextProvider>
        <html lang="en">
          {children}
        </html>
      </AppContextProvider>
    </StrictMode>
  );
}