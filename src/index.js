import React from 'react';
import './index.css';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './components/Error/error';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import { render } from "react-dom";



const rootElement = document.getElementById("root");
  render(
<BrowserRouter>
<Header></Header>

<Routes>  
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path='*' element={<NotFound />}/>
</Routes>

<Footer></Footer>
</BrowserRouter>,
rootElement

);




reportWebVitals();
