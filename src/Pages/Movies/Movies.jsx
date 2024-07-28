import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link, useSearchParams } from "react-router-dom";
import { fetchFilmByName } from "../../API";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") ?? "";

  const [searchValue, setSearchValue] = useState(queryParam);
  const [movies, setMovies] = useState([]);
  console.log(movies)

  useEffect(() => {
    const getMoviesData = async () => {
      if (queryParam) {
        try {
          const data = await fetchFilmByName(queryParam);
          setMovies(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getMoviesData();
  }, [queryParam]);

  const handleSearch = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <SearchBar 
        handleSearch={handleSearch} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
      />
      <div>
        <h2>Search Results for "{queryParam}"</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}><Link to={`${movie.id.toString()}`}>{movie.title}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;