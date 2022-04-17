export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL'
export const GET_MOVIES = 'GET_MOVIES'
export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE'
export const REMOVE_FAVORITES_MOVIE = 'REMOVE_FAVORITES_MOVIE'


const { REACT_APP_APIKEY } = process.env


export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${REACT_APP_APIKEY}&i=${id}`)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: 'GET_MOVIE_DETAIL',
          payload: data
        })
      }
      )
  };
}


export function getMovies(title) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${REACT_APP_APIKEY}&s=${title}`)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: 'GET_MOVIES',
          payload: data.Search
        })
      }
      )
  }
}

export function removeFavoritesMovie(id) {
  return {
    type: 'REMOVE_FAVORITES_MOVIE',
    payload: id
  }
}

export function addMovieFavorite(movie) {
  return {
    type: 'ADD_MOVIE_FAVORITE',
    payload: movie
  }
}