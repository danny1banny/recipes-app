import React from 'react';

import { Route, Routes } from 'react-router-dom';

import MainLayout from '../pages/MainLayout';
import Home from '../pages/Home';
import Recipes from '../pages/Recipes';
import Favourites from '../pages/Favourites';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="favour" element={<Favourites />} />
        <Route path="recipe" element={<Recipes />} />
      </Route>
    </Routes>
  );
}

export default App;
