//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Explanation from './Explanation/Explanation'
import Login from './Login/Login'
import SignUp from './Login/SignUp'
import Vote from './Vote/Vote'
import GetVote from './Vote/GetVote'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explanation/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/vote" element={<Vote/>}/>
          <Route path="/get-vote" element={<GetVote/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
