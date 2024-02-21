import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/FirebaseConfig'
import AuthContext from './auth-context'
const Login = () => {
  const navigate=useNavigate();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[message,setMessage]=useState('');
    const[error,setError]=useState('');

    const authCtx=useContext(AuthContext);
  const loginHandler=(event)=>{
    event.preventDefault();
    const gmail=email.split("@")[0];
    signInWithEmailAndPassword(auth,email,password)
    .then((response)=>{
      console.log(response);
      authCtx.login(response._tokenResponse.idToken);
      console.log(response._tokenResponse.idToken);
      localStorage.setItem("gmail",gmail);
      setMessage(response.message);
      navigate("/Home");
    })
    .catch(error=>{
      console.log(error);
      setError("Invalid Credentials");
    })
  }
  setTimeout(() => {
    setError('');
    setMessage('');
  }, 5000);
  return (
    <div className='loginContainer'>
    <h3 className='h3'>.</h3>
   <div className='login'>
    <motion.form action="" 
    initial={{y:0}}
    animate={{y:10}}
    transition={{
      duration:1,
      delay:0.5
    }}
    >{
        error && (
          <div className='error'>{error}</div>
        )
      }
       {
        message && (
          <div className='error'>{message}</div>
        )
      }
       <h3>LOGIN HERE</h3>
    <label htmlFor="email">Email</label>
       <br />
       <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <br />

       <label htmlFor="password">Password</label>
       <br />
       <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
       <br />

      
       <button className="btn" onClick={loginHandler}>Login</button>
       <hr />
       <span>Do Not Have Account? Signup Here</span>
       <br />
       <Link to='/Signup' className='SignupHere'>Signup</Link>
    </motion.form>
   </div>
   </div>
  )
}

export default Login
