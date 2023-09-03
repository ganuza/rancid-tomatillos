import PropTypes from 'prop-types'
import "./Header.css"
import { Link, useLocation } from 'react-router-dom'


function Header() {
  const { pathname } = useLocation()
  return (
    <header>
      <h1 className="header-title">RANCID TOMATILLOS</h1>
      {pathname === '/' ? null : 
      <Link to={'/'} className='home-button'>HOME</Link>}
    </header>
  )
}

export default Header