import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import React from 'react';
import Home from './components/Home';
import Signup from './components/Signup';
import Counsellor from './components/Councellor';
import Visitor from './components/Visitor';
import Signin from './components/Signin';
import Appointment from './components/Appointment';

function App(){
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signup" element={<Signup/>} exact />
        <Route path="/signin" element={<Signin/>} exact />
        <Route path="/counsellor" element={<Counsellor/>} exact />
        <Route path="/visitor" element={<Visitor/>} exact />
        <Route path="/appointment" element={<Appointment/>} exact />
      </Routes>
    </main>
  </React.Fragment>
}

export default App