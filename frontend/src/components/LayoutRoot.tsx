import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
// import { NuqsProvider } from 'nuqs/react-router-v6'; // TODO: Verify correct nuqs adapter for React Router v6+
// import { parse, stringify } from 'qs'; // TODO: Install 'qs' and '@types/qs' if nuqs adapter requires them

// Metadata from original layout.tsx can be handled later with react-helmet-async or similar

export default function LayoutRoot({ children }: { children?: React.ReactNode }) {
  return (
    // <NuqsProvider
    //   // Example: pass parse and stringify if required by the adapter
    //   // parse={parse} 
    //   // stringify={stringify}
    //   // Or the adapter might automatically integrate with React Router's context
    // >
    <>
      {/* Render children if passed, otherwise Outlet for nested routes */}
      {children || <Outlet />}
      <Toaster />
    </>
    // </NuqsProvider>
  );
}
