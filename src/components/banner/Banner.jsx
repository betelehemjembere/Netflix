import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './banner.css'

const API_KEY =import.meta.env.VITE_API_KEY; //this key is the api key of the movie database
const BASE_URL = 'https://api.themoviedb.org/3';  //this base url is the common url for all catagories of movies 

//request is an object containing different types of movies 
const request = {
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  Netflix_Originals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  Top_Rated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  Action_Movies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  Comedy_Movies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  Horror_Movies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Romantic_Movies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  Documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

function Banner() {
  const [movie,setMovie]=useState(null);
  //movie is a single movie state 
  useEffect(()=>{
    const fecthmovies=async()=>{
      try{
        const response = await axios.get(`${BASE_URL}${request.Netflix_Originals}`);
        console.log(response);
        const movies=response.data.results; //movies is an array of movies 
        const singlemovie=movies[Math.floor(Math.random()*movies.length)]; //one single movies , by using the random number and the length of array movies .
        setMovie(singlemovie);

      }catch(error){
          console.log("error fetching netflix originals"+error);
      }}
      fecthmovies();  //calling the function
    },[])
    const truncate=(overview,maxlength)=>{
return overview?.length>maxlength ? overview.substring(0,maxlength)+ "..." : overview ;
    }
return(
   <header className='banner'
   style={{
    backgroundSize:'cover',
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
   }}>
    <div className='contents'>
      <h1 className='title'>
        {movie?.name || movie?.original_name}
{/* 
     optional chaining(?.)=>
        movie?.name: This means "access movie.name only if movie is not null or undefined." If movie is null or undefined, the expression short-circuits and returns undefined instead of throwing an error.
        If movie?.name is undefined or falsy, then the next part of the expression movie?.title will be evaluated. */}
      </h1>
      {/* Buttons */}
      <div className="buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
          </div>
      <div className='description'>
        {truncate(movie?.overview,150)}
      </div>
        
    </div>
    <div className='fadebottom'/>
   </header>
)
 }

export default Banner;
