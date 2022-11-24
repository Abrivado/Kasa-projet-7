import React from 'react';
import './styles/index.css';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './components/Error/error';
import Logement from './pages/Logement';

import { Route, Routes } from 'react-router-dom';


function AppRoutes(){

return (

    <div>
  
  <Routes>  
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/location/:id" element={<Logement />} />
    <Route path='*' element={<NotFound />}/>
  </Routes>

  </div>
  )
}


export default AppRoutes;


