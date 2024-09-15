import React from 'react';
import Row from '../row/Row';

// const API_KEY = import.meta.env.VITE_API_KEY // The API key for the movie database
const API_KEY ='fd1630c77043838a7e505bba93a8b232'
const BASE_URL = 'https://api.themoviedb.org/3';  // The base URL for all categories of movies

// Request object containing different types of movies 
const request = {
  Trending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  Netflix_Originals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  Top_Rated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  Action_Movies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  Comedy_Movies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  Horror_Movies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Romantic_Movies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  Documentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
};

function Rowlist() {
  return (
    <>
      <Row title="Netflix Originals" fetchurl={request.Netflix_Originals} />
      <Row title="Trending" fetchurl={request.Trending} />
      <Row title="Top Rated" fetchurl={request.Top_Rated} />
      <Row title="Action Movies" fetchurl={request.Action_Movies} />
      <Row title="Comedy Movies" fetchurl={request.Comedy_Movies} />
      <Row title="Horror Movies" fetchurl={request.Horror_Movies} />
      <Row title="Romantic Movies" fetchurl={request.Romantic_Movies} />
      <Row title="Documentaries" fetchurl={request.Documentaries} />
    </>
  );
}

export default Rowlist;
