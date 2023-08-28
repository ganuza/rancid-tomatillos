import PropTypes from 'prop-types'
import "./Header.css"

function Header({showAllPosters}) {
  return (
    <header>
      <h1 className="header-title">RANCID TOMATILLOS</h1>
      <h2 className='home-button' onClick={() => showAllPosters()}>HOME</h2>
    </header>
  )
}

Header.propTypes = {
  showAllPosters: PropTypes.func.isRequired
}

export default Header