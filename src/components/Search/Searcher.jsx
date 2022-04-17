import { useSelector, useDispatch, } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovies, addMovieFavorite } from '../../actions/index.js'
import '../../css/Search.css';

export default function Searcher() {

  const [input, setInput] = useState('')

  const { moviesLoaded } = useSelector((state) => state)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getMovies(input))
  }, [input])


  const handleChange = (event) => {
    setInput(event.target.value);

  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="search" >
      <h2> Search </h2>
      <form className='form' onSubmit={(e) => handleSubmit(e)} >
        <div>
          <input
            placeholder='Search movie'
            type="text"
            id="title"
            autoComplete="off"
            value={input}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className='form-button' type='submit' onClick={() => dispatch(getMovies(input))}> Search </button>
      </form>
      <ul>
        {
          moviesLoaded && moviesLoaded.map((movie) => (
            <div key={movie.imdbID}>

              <Link to={`/movie_detail/${movie.imdbID}`}>

                <h3>
                  {movie.Title}

                </h3>
              </Link>
              <button className='button-favorite' onClick={() => dispatch(addMovieFavorite(movie))}>Add Favorites</button>
              <div className='img' >
                <img src={movie.Poster} alt="poster de la pelicula" />

              </div>
              <p> {movie.Plot} </p>
            </div>

          ))
        }
      </ul>
    </div>
  )
}



/* const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (e) => dispatch(getMovies(e)),
    addFavorite: (e) => dispatch(addMovieFavorite(e))
  }
}
const mapStateToProps = (state) => {
    return {
      state: state.moviesLoaded
    }
  } 
export default connect(mapDispatchToProps)(Searcher);*/
