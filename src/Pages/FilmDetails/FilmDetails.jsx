import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFilmsById } from "../../API";

const FilmDetails = () => {
  const { filmId } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchFilmsById(filmId);
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [filmId]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{details.original_title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
      ></img>
      <p>Overview: {details.overview}</p>
      <p>Genres: {details.genres.map((genre) => genre.name).join(", ")}</p>
    </div>
  );
};

export default FilmDetails;
