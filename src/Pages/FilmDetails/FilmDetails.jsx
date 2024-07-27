import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFilmsById } from "../../API";

const FilmDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchFilmsById(params.filmId);
        setDetails(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [params.filmId]);

  return <div>FilmDetails</div>;
};

export default FilmDetails;
