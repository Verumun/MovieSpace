import {useEffect, useState} from "react";
import './App.css';
import searchIcon from './search.svg'
import MovieCard from "./Components/MovieCard/MovieCard";

// a03db50a
const apiUrl = 'http://www.omdbapi.com?apikey=a03db50a';

// const movie1 = {
//     "Title": "John Wick: Chapter 4",
//     "Year": "2023",
//     "imdbID": "tt10366206",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`)
        const data = await response.json();

        // console.log(data.Search)
        setMovies(data.Search)
    }

    // console.log(movies)

    // searchMovies('')
    // This makes the search load faster
    useEffect(() =>{
        searchMovies(searchTerm)
    })
   
  return (
    <div className="app">
        <h1>MovieSpace</h1>

        <div className="search">
            <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        
            <img 
            src={searchIcon}
            alt="search"
            // onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {
            movies?.length > 0 ? (
                
                <div className="container">
                    {/* I created props */}
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>

            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )
        }

    </div>
    
  );
};

export default App;
