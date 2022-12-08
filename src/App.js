import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './Componentes/Contacto/Contacto';
import Home from './Componentes/Home/Home';
import Productos from './Componentes/Productos/Productos';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/productos' element={<Productos/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
    </Routes>
    </div>
  )
}

export default App;