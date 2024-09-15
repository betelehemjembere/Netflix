import React, { useEffect, useState } from 'react';  // Import useState and useEffect
import './row.css';
import axios from 'axios';
import YouTube from 'react-youtube';  // Import react-youtube

function Row({ title, fetchurl }) {  // Destructure props
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState(null);  // State for storing trailer key
  const [selectedMovie, setSelectedMovie] = useState(null);  // State for selected movie

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(fetchurl);
        setMovies(response.data.results);
      } catch (error) {
        console.log("Error fetching movies: " + error);
      }
    };

    fetchMovies();  // Call the fetchMovies function
  }, [fetchurl]);

  // Function to fetch the trailer for a selected movie
  const fetchTrailer = async (movieId) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=fd1630c77043838a7e505bba93a8b232&language=en-US`);
      const trailer = response.data.results.find(video => video.type === 'Trailer');
      setTrailer(trailer ? trailer.key : null);
      setSelectedMovie(movieId);  // Set the selected movie ID
    } catch (error) {
      console.log("Error fetching trailer: " + error);
    }
  };

  const opts = {
    height: '100%',
    width: '400px',
    playerVars: {
    //   https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      <div className='row'>
        <h1 className='title'>{title}</h1> {/* Use the title prop to display the row title */}
        <div className="row__posters">
          {movies.map(movie => (
            <div key={movie.id} className="movie-item">
              <img
                className="row__poster"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.name || movie.title}
                onClick={() => fetchTrailer(movie.id)}  // Fetch trailer on click
              />
              {/* Display YouTube trailer if available and the clicked movie matches */}
              {trailer && selectedMovie === movie.id && (
                <div className="movie-trailer">
                  <YouTube
                    videoId={trailer}
                    opts={opts}
                    className="youtube-video"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
