import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {auth} from '../Firebase/FirebaseConfig'
import './Signup.css'

const Signup = () => {
  
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[conPassword,setConPassword]=useState('');
    const[message,setMessage]=useState('');
    const navigate=useNavigate();
    // const[user,setUser]=useState({
    //   username:"",
    //   email:'',
    //   password:'',
    //   conPassword:''
    // })
    const signupHandler=(event)=>{
        event.preventDefault();
        console.log(username+" "+email+" "+password+" "+conPassword);
        if(username && email && password && (password == conPassword)){

          createUserWithEmailAndPassword(auth,email,password)
          .then((response)=>{
            console.log(response);
            setMessage("Signup Successfull");
            localStorage.setItem("username",username);
            navigate("/Login");
          })
          .catch((error)=>{
            console.log(error);
            setMessage(error.message);
          })
         
        }
        else{
            setMessage("Please Enter Valid Credentials");
        }
        // const {username,email,password,conPassword}= user;
    }
    setTimeout(() => {
      setMessage("");
    }, 10000);
  return (
    <div className='signupContainer'>
     <h3 className='h3'>...</h3>
    <div className='signup'>
     <motion.form action="POST" 
     initial={{y:0}}
     animate={{y:10}}
     transition={{
       duration:1,
       delay:0.5
     }}
     >
      {
        message && (
          <div className='message'>{message}</div>
        )
      }
        <h3>SIGNUP HERE</h3>
      
        <label htmlFor="name">Username</label>
        <br />
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />

        <label htmlFor="password">Confirm Password</label>
        <br />
        <input type="text" value={conPassword} onChange={(e)=>setConPassword(e.target.value)}/>
        <br />
        <button className="btn" onClick={signupHandler}>Signup</button>
        <hr />
        <span>Already A Customer? Login Here</span>
        <br />
        <Link to='/Login' className='loginHere'>Login</Link>
     </motion.form>
    </div>
    </div>
  )
}

export default Signup
