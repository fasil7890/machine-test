import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import "./Home.css";

const Home = () => {
    const [data,setData]=useState([])
    async function fetchData(){
        try {
            const response = await axios.get("https://restcountries.com/v2/all?fields=name,region,flag")
            setData(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
       fetchData()
    },[])
  return (
    <div className='home-top'>
        
        <h2>Countries</h2>
        
        
       <div className='home-listing'>
      {
       data.map((item,idx)=>{
        return(
            <Card key={idx} data={item} />
        )
       })
      }
        </div> 
      
        
        </div>
  )
}

export default Home