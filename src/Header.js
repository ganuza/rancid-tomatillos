import PropTypes from 'prop-types'
import "./Header.css"
import { NavLink, useLocation } from 'react-router-dom'


function Header() {
  const { pathname } = useLocation()
  return (
    <header>
      <h1 className="header-title">RANCID TOMATILLOS</h1>
      {pathname === '/' ? null : 
      <NavLink to={'/'} className='home-button'>HOME</NavLink>}
    </header>
  )
}

export default Header