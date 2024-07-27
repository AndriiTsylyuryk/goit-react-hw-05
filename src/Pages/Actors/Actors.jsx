import React from 'react'

const Actors = ({actor}) => {
  return (
    <div>{actor.profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
          alt={actor.name}
          style={{ width: '100px', height: '150px', objectFit: 'cover' }}
        />
      )}
      <h3>{actor.name}</h3>
      <p>Role: {actor.character}</p></div>
  )
}

export default Actors