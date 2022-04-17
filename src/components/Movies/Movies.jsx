import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { getMovieDetail } from '../../actions/index';
import '../../css/DetailMovie.css';

export default function Movies() {

  const movieDetail = useSelector((state) => state.movieDetail)
  const dispatch = useDispatch()

  const { id } = useParams()
  const objectLocation = useLocation()
  const objectHistory = useHistory()

  useEffect(() => {
    dispatch(getMovieDetail(id))
  }, [])


  return (
    <div className='detail'>
      <h1>DETAIL MOVIE</h1>
      <h2> {movieDetail.Title} </h2>
      <img src={movieDetail.Poster} alt="poster de la pelicula" />
      <div className='movieDetail' >
        <h3>Runtime</h3>
        <p>  {movieDetail.Runtime} </p>
        <h3>ACTORS</h3>
        <p>{movieDetail.Actors} </p>
        <h3>Details</h3>
        <p>  {movieDetail.Plot} </p>
        <h3>Language</h3>
        <p>  {movieDetail.Language} </p>

      </div>
    </div>
  )
}
/* import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
class Movie extends React.Component {

  componentDidMount() {
    const movieID = this.props.match.params.id;
    
    // Aca se despacha la accion y se llena el estado de movie-Detail
    this.props.getMovieDetail(movieID);
  }

  render() {
    return (
      <div className="movie-detail">
        <h1>{this.props.movie.Title}</h1>
        <h3>Detalle de la pelicula</h3>
        <h4>Año de la pelicula: {this.props.movie.Year}</h4>
        <h4>Calificacion: {this.props.movie.Rated}</h4>
        <h4>Publicado: {this.props.movie.Released}</h4>
        <h4>Tipo: {this.props.movie.Type}</h4>
        <h4>Genero: {this.props.movie.Genre}</h4>
        <h4>Awards: {this.props.movie.Awards}</h4>
        <h4>Lenguajes: {this.props.movie.Language}</h4>
        <h4>Pais de origen: {this.props.movie.Country}</h4>
        <h4>Actores: {this.props.movie.Actors}</h4>

        <img src={this.props.movie.Poster} alt = {`Poster de la pelicula ${this.props.movie.Title}`} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movieDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetail: movieID => dispatch(getMovieDetail(movieID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie); */