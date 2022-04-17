import Searcher from "./components/Search/Searcher";
import NavBar from "./components/NavBar/NavBar.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import Movie from './components/Movies/Movies.jsx';
import { Fragment } from 'react';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Route exact path='/' component={Searcher} />
      <Route path="/favorites" component={Favorites} />
      <Route path='/movie_detail/:id' component={Movie} />
      <Route path='*' element={<h1>Error 404</h1>} />
    </Fragment>
  )
}

export default App;