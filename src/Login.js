import React, {useState} from 'react'
import "./Login.css";
import {Link, useNavigate} from "react-router-dom";
import { auth } from "./firebase";


function Login() {
  const history= useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const login = event => {
    event.preventDefault(); // this stops the refresh
    // do the login logic....

    auth.signInWithEmailAndPassword(email,password).then((auth)=> {
      // logged In, redirect to home page
      // history.go("/");
      history("/");

    })
    .catch((e)=>alert(e.message));


  }
  
  const register = event => {
    event.preventDefault(); // this stops the refresh
    // do the register logic....

    auth.createUserWithEmailAndPassword(email,password).then((auth)=> {
      // create user and logged in, redirect to home page
      // this.context.history.push('/')
      // history.go("/");
      history("/");

    })
    .catch((e)=>alert(e.message));


  }

  return (
    <>
        <div className='login'>
          <Link to="/">
            <img className='login_logo' src="https://dwglogo.com/wp-content/uploads/2016/02/Amazoncom-yellow-arrow.png" 
            alt=""/>

          </Link>
          <div className='login_container'>
            <h1>Sign in</h1>
            <form>
              <h5>E-mail</h5>
              <input value={email} onChange={event => setEmail(event.target.value)}  type="email" />
              <h5>Password</h5>
              <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
              <button onClick={login} type="submit" className='login_signInButton'>Sign In</button>
              <p>By Signing-in you agree to my Conditions of Service Agreement. For
          more info see our privacy Notice, our cookies Notice and gather data.</p>
              <button onClick={register} className='login_registerButton'>Create Your Amazon Account</button>
            </form>
          </div>
        </div>
    </>
  )
}

export default Login
