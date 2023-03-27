import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeroListPage from './pages/HeroListPage';
import HeroProfilePage from './pages/HeroProfilePage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/heroes/:heroId" element={<HeroProfilePage />} />
        <Route path="/heroes" element={<HeroListPage />} />
      </Routes>
    </div>
  );
};

export default App;
