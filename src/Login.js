import React, { useState } from 'react'
import "./Login.css"
import logo from './allimages/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {

  const navigate = useNavigate();
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');


  const signIn = e =>{
    e.preventDefault();
    auth
       .signInWithEmailAndPassword(email,password)
       .then((auth) => {
            
         if(auth) {
          navigate('/');
         }

       })
       .catch(error => alert(error.message))
  }


  const register = e =>{
    e.preventDefault();
    auth
       .createUserWithEmailAndPassword(email,password)
       .then((auth) => {
         //it creates a new user with email and password
         if(auth) {
          navigate('/');
         }

       })
       .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
        <Link to="/">
        <img className='login_logo' src={logo}/>
        </Link>

        <div className='login_container'>
           <h1>Sign-in</h1>

           <form>
               <h5>E-mail</h5>
               <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

               <h5>Password</h5>
               <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

               <button type='submit' onClick={signIn} className='login_signinbutton'>Sign In</button>
           </form>

           <p>*By sign-in, You "agree" to Deveen's Terms & Conditions</p>

           <button onClick={register} className='login_registerbutton'>Create Your Deveen Account</button>
               

        </div>

    </div>
  )
}

export default Login