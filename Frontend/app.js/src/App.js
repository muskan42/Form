import React from 'react'
import Signup from './signup';
import Signup1 from './signup1';
import Home from './home';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "../../../Backend/node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />        
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signup1" element={<Signup1/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
