import React from 'react'
import { Link } from 'react-router-dom'

const FilmList = ({films}) => {
  return (
    <div>
        <ul>
            {films.map(film=>(
                <li key={film.id}>
                    <Link to={`movies/${film.id.toString()}`}>{film.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FilmList