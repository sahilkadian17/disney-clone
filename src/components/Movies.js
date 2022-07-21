import React from 'react'
import {selectMovies} from '../features/movies/movieSlice'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function Movies() {
  const movies = useSelector(selectMovies);

  return (
    <div className='Movies__Container'>
        <h4>Recommended for You</h4>
        <div className="Movies__Content">
            {movies && 
             movies.map((movie,index)=>(
                <div className="Movies__Wrap" key={index}>
                    <Link to={`/detail/` + movie.id}>
                        <img src={movie.cardImg} alt="" className="Movies__Img" />
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Movies