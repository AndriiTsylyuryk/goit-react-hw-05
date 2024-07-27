import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../API";
import Actors from "../Actors/Actors";

const Cast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);
  console.log(cast);

  useEffect(() => {
    fetchCastById(params.filmId)
      .then((data) => setCast(data.cast))
      .catch((error) => console.log(error));
  }, [params.filmId]);
  return (
    <div>
      <ul>
        {cast.length === 0 ? (
          <p>No cast information available.</p>
        ) : (
          cast.map((actor) => (
            <li key={actor.id}>
              <Actors actor={actor} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cast;
