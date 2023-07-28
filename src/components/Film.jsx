import React from 'react'


function Film(props) {

  return (
    <div id='movieWrapper'>
      {props.films.map((film, i) => (
        <div>
          <img src={film.Poster} alt="poster" />
        </div>
      )
      )}
    </div>
  )
}

export default Film