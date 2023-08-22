import Link from 'next/link';
import React from 'react';
import MovieCard from '../components/MovieCard';
import "@/app/globals.css";

 const Movie = async()=>{

  await new Promise((resolve=>setTimeout(resolve,2000)));
  
//  const url = process.env.RAPID_API_KEY;
 const  url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
            

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e26dd062d2msheda21e15bbae588p172211jsn2830ebfd5e9f',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

try {
   console.log(url);
  const response = await fetch(url, options);
	const result = await response.json();
	var main_data = result.titles; 

  console.log(result);
} catch (error) {
	console.error(error);
}


  return (
    <div>
    <div className='heading'>
    <h2>Series & Movies</h2>
    </div>
    <div className='container'>
    {
      main_data.map((curElm)=>{
      return (
        <MovieCard  key={curElm.id} {...curElm}/>
       )
      })
    }
    </div>
    </div>
  )
}



export default Movie ;