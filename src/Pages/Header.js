import React, { useContext, useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from './auth-context';


const Header = () => {

  const authCtx=useContext(AuthContext);
  
  const isLoggedIn=authCtx.isLoggedIn;
  const[search,setSearch]=useState('');
  const navigate=useNavigate();

  const logoutHandler=(event)=>{
    event.preventDefault();
    navigate("/Login");
    authCtx.logout();
  }

  const searchHandler=(event)=>{
    event.preventDefault();
    console.log(search);
    navigate(`/Search/${search}`);
  }
  return (
    <div className='header'>
      <div className="left">
         <img src="https://w7.pngwing.com/pngs/982/544/png-transparent-news-graphy-logo-icon-news-logo-text-photography-computer-wallpaper.png" alt="" srcset="" />
      </div>
      <div className="mid">
        <nav>
          <ul>
            <li><Link to="/Home" className='link'>Home</Link></li>
            <li><Link to="/Business" className='link'>Business</Link></li>
            <li><Link to="/Health" className='link'>Health</Link></li>
            <li><Link to="/Entertainment" className='link'>Entertainment</Link></li>
            <li><Link to="/Science" className='link'>Science</Link></li>
            <li><Link to="/Sports" className='link'>Sports</Link></li>
            <li><Link to="/Technology" className='link'>Technology</Link></li>
            {
              isLoggedIn && (
                <li><Link to="/Logout" className='link' onClick={logoutHandler}>Logout</Link></li>
              )
            }
            {
              !isLoggedIn && (

                <li><Link to="/Signup" className='link'>Login/Signup</Link></li>
              )
            }
          </ul>
        </nav>
      </div>
      <div className="right">
             {/* <input type="text" placeholder='e.g. Entertainment' value={search} onChange={(e)=>setSearch(e.target.value)}/>
             <button onClick={searchHandler}>Search</button> */}
      </div>
    </div>
  )
}

export default Header;
