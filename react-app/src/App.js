//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Explanation from './Explanation/Explanation'
import Login from './Login/Login'
import SignUp from './Login/SignUp'
import Vote from './Vote/Vote'
import GetVote from './Vote/GetVote'
import Api from './Api/Api'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let user = null;

function App() {

  const setUser = (newUser) => {
    user = newUser;
    console.log(user);
  }

  const getUser = () => {
    console.log(user);
    return user;
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explanation/>}/>
          <Route path="/login" element={<Login setUser={setUser} />}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/vote" element={<Vote/>}/>
          <Route path="/get-vote" element={<GetVote/>}/>
          <Route path="/api" element={<Api getUser={getUser()} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
