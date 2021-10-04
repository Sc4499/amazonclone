import React from "react";
import logo from "./images/amazon_logo.png";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { auth } from "./firebase";
const Login = () => {
    const history=useHistory();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const signInFunc = (e) => {
    e.preventDefault();
     //do some fanfy firebase on login
     auth.signInWithEmailAndPassword(email, password)
     .then(auth =>{
     history.push("/");
     })
     .catch(error => alert(error.message))
   };
  const registeruser = (e) => {
    e.preventDefault();
    //do some fanfy firebase on register
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth)=>{
        if(auth){
            history.push("/");
        }
    })
    .catch(error => alert(error.message))
  };
  return (
    <div className="login">
      <div className="loginlogo">
        <Link to="/">
          <img src={logo} class="img-fluid"></img>
        </Link>
      </div>
      <div className="login_content">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="Password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
          <button type="submit" class="login_button" onClick={signInFunc}>
            Sign in
          </button>
        </form>
        <p>By signing in you are agree to amazon clone term and condition </p>
        <button type="submit" onClick={registeruser} class="login_register">Create An Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
