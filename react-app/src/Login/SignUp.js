import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  async handleSubmit(event){
    event.preventDefault();
    if(this.validate()){
      let {lastname, firstname, email, password} = document.forms[0];
      lastname = lastname.value;
      firstname = firstname.value;
      email = email.value;
      password = password.value;
      await axios.post('http://localhost:3000/add-citoyen', {lastname, firstname, email, password});
      (<Link push to="/login"/>)
    }
  }

  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Vous devez entrer un mot de passe";
    }

    if (!input["confirmpassword"]) {
      isValid = false;
      errors["confirmpassword"] = "Vous devez confirmer le mot de passe";
    }

    if (typeof input["password"] !== "undefined" && typeof input["confirmpassword"] !== "undefined") {

      if (input["password"] != input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Les deux mots de passe doivent être identiques";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }


  render(){
    return (
      <div className="app w-screen h-screen flex justify-center items-center">
        <div className="signin-form">
          <div className="w-full max-w-xs">
            <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Nom</label>
                <input type="text" name="lastname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Prénom</label>
                <input type="text" name="firstname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
                <input type="password" name="password" id="password" onKeyUp={this.handleSubmit} value={this.state.input.password} onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Confirmer le mot de passe</label>
                <input type="password" name="confirmpassword" id="confirmpassword" value={this.state.input.confirmpassword} onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required />
              </div>
              <div>
                <input type="submit" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />  
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
}

export default SignUp;