import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './app/globals.css';
import { Toaster } from '@/components/ui/sonner';
import { NuqsAdapter } from 'nuqs/adapters/react-router/v6';
// import { Geist } from 'next/font/google'; // REMOVED: Next.js specific font handling
// import { DM_Mono } from 'next/font/google'; // REMOVED: Next.js specific font handling

// REMOVED: Next.js specific font loading and body class manipulation
// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   weight: '400',
//   subsets: ['latin']
// });
// const dmMono = DM_Mono({
//   subsets: ['latin'],
//   variable: '--font-dm-mono',
//   weight: '400'
// });
// document.body.className = `${geistSans.variable} ${dmMono.variable} antialiased`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NuqsAdapter>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </NuqsAdapter>
  </React.StrictMode>,
);
