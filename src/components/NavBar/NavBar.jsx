import { NavLink } from 'react-router-dom'
import '../../css/NavBar.css';
import Logo from '../../img/Logo.png';

const NavBar = () => {
  return (
    <header className='header'>
      <nav className='nav' >
        <ul>
        <li>
        <img width="150" src={Logo} alt='Logo' />
        </li>
          <li>
            <NavLink exact to='/'> Home </NavLink>

          </li>
          <li>
            <NavLink to='/favorites'> Favorites </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;