import React from 'react';
import './home.css';

export default function RootLayout({children}) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    )
  }