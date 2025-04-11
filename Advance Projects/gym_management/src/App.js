
import './App.css';
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from './Home.js';
import Auth from './components/Auth.js';


function App() {
  return (
  <Router>
   
      <Routes>
           <Route path='/' element={<Home />} />
           <Route path="/auth" element={<Auth />} />
          
      </Routes>
  
  </Router>
  );
}

export default App;
