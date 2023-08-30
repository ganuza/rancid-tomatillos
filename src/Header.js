import PropTypes from 'prop-types'
import "./Header.css"
import { NavLink } from 'react-router-dom'

function Header({showAllPosters}) {
  return (
    <header>
      <h1 className="header-title">RANCID TOMATILLOS</h1>
      <NavLink to={'/'} className='home-button'>HOME</NavLink>
    </header>
  )
}

Header.propTypes = {
  showAllPosters: PropTypes.func.isRequired
}

export default Header