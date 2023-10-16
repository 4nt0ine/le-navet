import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Recette from './components/pages/Recette';
import './components/styles/style.css';

function App() {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path={"/Recette/"} element={<Recette/>} />
            <Route path="*" element={<h1>PAGE NON TROUVÉE - ERREUR 404</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App