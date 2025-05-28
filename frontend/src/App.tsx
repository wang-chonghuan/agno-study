import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutRoot from '@/components/LayoutRoot'; // New root layout
import HomePage from '@/pages/HomePage';       // New home page

function App() {
  return (
      <Routes>
        <Route element={<LayoutRoot />}> {/* Use LayoutRoot for routes that share this layout */}
          <Route path="/" element={<HomePage />} />
          {/* Other page routes can be nested here or defined as siblings if they use a different layout */}
        </Route>
      </Routes>
  );
}

export default App;
