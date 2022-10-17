import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import './app.css';
import Accesories from './pages/Accesories';
import Cards from './pages/Cards';
import Login from './pages/Login';
import Registration from './pages/Registration';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exate path='/itsmerk98/iShop' element={<Home />} />
          <Route path='/accesories' element={<Accesories />} />
          <Route path='/card' element={<Cards />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
