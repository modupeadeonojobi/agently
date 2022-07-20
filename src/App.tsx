import React from 'react';
import { Routes,Route } from "react-router-dom";
import { Home } from './pages/Home';
import PropertyReg from './pages/PropertyReg';
import { Header } from './components/Header';
import { PropertyView } from './pages/PropertyView'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="property-reg" element={<PropertyReg />} />
        <Route path="property-view" element={<PropertyView />} />
      </Routes>
    </div>
  );
}

export default App;
