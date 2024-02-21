import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Pages/Header";
import './App.css'
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { useState } from "react";
import FetchData from "./Pages/FetchData";


function App() {
 
  return (
   <Router>
    <Header/>
    <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Business" element={<FetchData cat='Business'/>}/>
    <Route path="/Health" element={<FetchData cat='Health' />}/>
    <Route path="/Science" element={<FetchData cat='Science'/>}/>
    <Route path="/Sports" element={<FetchData cat='Sports'/>}/>
    <Route path="/Technology" element={<FetchData cat='Technology'/>}/>
    <Route path="/Entertainment" element={<FetchData cat='Entertainment'/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Login" element={<Login/>}/>
    </Routes>
   
   </Router>
  );
}

export default App;
