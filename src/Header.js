import "./Header.css"

function Header({showAllPosters}) {
  return (
    <header>
      <h1 className="header-title">RANCID TOMATILLOS</h1>
      <h2 onClick={() => showAllPosters()}>BACK</h2>
    </header>
  )
}


export default Header