import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './FetchData.css'
import { Link } from 'react-router-dom'
const FetchData = ({cat}) => {
    const[data,setData]=useState('');
    
    const dataFetch=async()=>{
        axios.get(
            cat?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=b749e62bfe4c478b9f978c2e94247156`:
            "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b749e62bfe4c478b9f978c2e94247156")
      
        .then((response)=>{
            console.log(response.data.articles);
            setData(response.data.articles);
        })

    
    }
        useEffect(()=>{
           dataFetch();
        },[cat])
 
  return (
    <div className='container01'>
     {
        data && data.map((item,index)=>(
            <div key={index} className='container'>
                <div className='title'>{item.title}</div>
                <img src={item.urlToImage} alt="Loading..." srcset="" />
                <div className='publishedAt'>{item.publishedAt}</div>
                <div className='author'>{item.author}</div>
                {/* <div className='content'>{item.content}</div> */}
                <div className='description01'>{item.description}</div>
                <div className="readMore">For additional information and comprehensive details, kindly refer to the following URL.</div>
                <a className='url' href={item.url} target='blank'>READ MORE...</a>
                <div></div>
            </div>
        ))
     }
    </div>
  )
}

export default FetchData
