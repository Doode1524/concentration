import { Link } from 'react-router-dom'
import Clock from './clock'

export default function NavBar() {

  return (
    <nav>
      <Clock />
      <Link to="/">Home</Link>
      <Link to="/games">Games List</Link>
      <Link to="/games/new">New Game</Link>
    </nav>
  )

}