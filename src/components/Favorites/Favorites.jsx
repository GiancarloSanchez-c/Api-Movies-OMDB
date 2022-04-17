import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeFavoritesMovie } from "../../actions/index.js";
import '../../css/Favorites.css';

export class Favorites extends Component {

  render() {
    return (
      <div className="favorites">
        <h2>FAVORITES MOVIES </h2>
        <ul>
          {
            this.props.movieFavorite.map((pelicula) => {
              return (
                <div key={pelicula.imdbID}>
                  <Link to={`/movie_detail/${pelicula.imdbID}`}>
                    <h3> {pelicula.Title}  </h3>
                  </Link>
                  <button className='deleteButton' onClick={() => this.props.removeFavoritesMovie(pelicula.imdbID)}> X </button>
                  <img src={pelicula.Poster} alt="poster de la pelicula" />
                  <div>
                    <h3>Year: {pelicula.Year}</h3>
                  </div>
                </div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movieFavorite: state.movieFavorites
  }
}

export default connect(mapStateToProps, { removeFavoritesMovie })(Favorites);
