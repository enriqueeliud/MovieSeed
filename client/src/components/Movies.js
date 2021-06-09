import React, {useState, useEffect} from 'react';


function Movies(props) {

 const url = "https://www.omdbapi.com/?s=friends&apikey=6496123e"

 const [movies, setMovies] = useState([])

 const getMovies = async ()=>{
  const response = await fetch(url)
  const responseJSON = await response.json();
  setMovies(responseJSON.Search);
 }

 useEffect(async()=>{
  getMovies()
 }, []);

 return (
 
  <div  className="Dexter">
    {movies.map((movie,index)=>
     <ul>
       <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt="movie"  />
      </ul>
      )}
      
  </div>
 )
}

export default Movies;
