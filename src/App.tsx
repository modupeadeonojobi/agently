import React from 'react';
import { Routes,Route } from "react-router-dom";
import './App.css';
import { Home } from './pages/Home';
import PropertyReg from './pages/PropertyReg';
import { Header } from './components/Header';
import { ViewProperty } from './pages/ViewProperty'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="property-reg" element={<PropertyReg />} />
        <Route path="view-property" element={<ViewProperty />} />
      </Routes>
    </div>
  );
}

export default App;
