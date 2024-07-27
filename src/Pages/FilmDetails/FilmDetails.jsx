import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "500px",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>{details.original_title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
      ></img>
      <p>{details.overview}</p>
      <p>Genres: {details.genres.map((genre) => genre.name).join(", ")}</p>
      <div>
        <NavLink to={"cast"}>Cast</NavLink>
        <NavLink to={"reviews"}>Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default FilmDetails;
