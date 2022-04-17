import { GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_FAVORITES_MOVIE, GET_MOVIES } from '../actions/index.js'

const initialState = {
  movieFavorites: [],
  moviesLoaded: [],
  movieDetail: {}

};


function rootReducer(state = initialState, action) {
  switch (action.type) {

    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload
      }
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        movieFavorites: [...state.movieFavorites, action.payload]
      }
      
    case REMOVE_FAVORITES_MOVIE:
      return{
        ...state,
        movieFavorites: state.movieFavorites.filter( movie => movie.imdbID !== action.payload)
      }
    case GET_MOVIES:
      return  {
        ...state,
        moviesLoaded: action.payload
      }

    default:
      break;
  }
  return state;
}

export default rootReducer;