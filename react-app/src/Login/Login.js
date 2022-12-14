import React from "react";
import axios from 'axios';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";

export default function Login() {

  const [errorMessage, setErrorMessage] = React.useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const login = async(email, password) => {
    let res = null;

    try{
      res = await axios.post("http://localhost:3000/login", { email, password });
    }catch(err) {
      console.log(err.response.data.message);
      if(err.response.data.message) {
        res.message = err.response.data.message;
      } 
    }

    return res;
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    let { email, pass } = document.forms[0];
    let userData = await login(email.value, pass.value);
    if (userData.data.token) {
      const token = userData.data.token;
      const name = userData.data.data.firstName;
      setIsSubmitted(true);
      navigate("/vote", {state: {token, name}});
    } else {
      if(userData.message) {
        setErrorMessage(userData.message);
      }else {
        setErrorMessage("identifiants incorrect");
      }
    } 
  };

  const myForm = (
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email </label>
            <input type="text" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Mot de passe </label>
            <input type="password" name="pass" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          {errorMessage && <p className="text-red-500 text-xs italic"> {errorMessage} </p>}
          <div className="flex items-center">
            <input value="Se connecter" type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
          </div>
          <Link to="/SignUp.js" variant="body2">
              Not have an account ? Sign up here 
          </Link>
        </form>  
      </div>
  );

  return (
    <div className="app w-screen h-screen flex justify-center items-center">
      <div className="login-form">
        {isSubmitted ? <div>Vous vous ??tes connect?? avec succ??s !</div> : myForm}
      </div>
    </div>
  );
}
