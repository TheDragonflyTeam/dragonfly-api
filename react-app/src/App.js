import './App.css';
import React, { useState } from 'react';
import Explanation from './Explanation/Explanation';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Vote from './Vote/Vote';
import GetVote from './Vote/GetVote';
import Api from './Api/Api';
import AllApi from './Api/AllApi';
import Informations from './Information/Information';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  let [setUserToken, setUserName] = useState(null);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explanation/>}/>
          <Route path="/login" element={<Login setUserToken={setUserToken} setUserName={setUserName} />}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/information" element={<Informations/>}/>
          <Route path="/vote" element={<Vote/>}/>
          <Route path="/get-vote" element={<GetVote/>}/>
          <Route path="/api" element={<Api token={setUserToken} name={setUserName} />}/>
          <Route path="/all-api" element={<AllApi token={setUserToken} name={setUserName} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
