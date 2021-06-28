import { Link } from 'react-router-dom'

export default function NavBar() {

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/games">Games List</Link>
      <Link to="/newGame">New Game</Link>
    </nav>
  )

}