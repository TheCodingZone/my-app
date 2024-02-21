import React, { createContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import './Home.css'
import FetchData from './FetchData';
import { useLocation } from 'react-router-dom';
import AuthContext from './auth-context';
const Home = () => {
  const authCtx=createContext(AuthContext);
   const isLoggedIn=authCtx.isLoggedIn;
   const username=localStorage.getItem("username");
   const gmail=localStorage.getItem("gmail");
  return (
    <div>
    <div className='home'>
     
      <motion.h2 className='h2'
      initial={{y:0}}
      animate={{y:100}}
      transition={{
        duration:1,
        delay:0.5
      }}
      >
        
Welcome {gmail}!
      </motion.h2>
      

      <motion.div className="description" initial={{y:0}}
      animate={{y:100}}
      transition={{
        duration:1,
        delay:0.5
      }}>
        <h2>"Stay Ahead of the Curve: Experience Breaking News First with Our Exclusive Coverage!"</h2>
        
        <h3>"<span>NewsBuds</span>: Your Gateway to Timely and Trusted Information. Explore a dynamic news platform delivering concise, credible, and breaking stories. With a commitment to accuracy and speed, NewsBuds ensures you're always in the know. Stay informed, stay connected – where news blossoms, NewsBuds delivers the freshest insights."</h3>
      </motion.div>
      </div>
      <h2 className='headlines'>TOP HEADINGS</h2>
      <FetchData/>
    </div>
  )
}

export default Home
