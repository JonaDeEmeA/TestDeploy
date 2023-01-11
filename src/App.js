
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Inicio } from './Vistas/Inicio';
import { Detalle } from './Vistas/Detalle';

function App() {



  return (
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/detalle" element={<Detalle />}/>
      </Routes>
    
  );
}

export default App;
