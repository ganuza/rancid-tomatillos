import PropTypes from 'prop-types'
import "./Header.css"
import { NavLink, useLocation } from 'react-router-dom'


function Header({showAllPosters}) {
  const { pathname } = useLocation()
  console.log('pathname: ', pathname)
  return (
    <header>
      <h1 className="header-title">RANCID TOMATILLOS</h1>
      {pathname === '/' ? null : 
      <NavLink to={'/'} className='home-button'>HOME</NavLink>}
    </header>
  )
}

Header.propTypes = {
  showAllPosters: PropTypes.func.isRequired
}

export default Header