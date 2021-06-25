
import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  
  padding: '10px',
  
  top: '100px',
  background: 'blue',
  color: 'white',
}

const actLnk = {
  background: 'darkblue'
}

const NavBar = () => {

  return (
    <div className='navBar'>
      <NavLink to="/"
        exact style={link}
        activeStyle={actLnk}
      >Home</NavLink>
      <NavLink to="/Games"
        exact style={link}
        activeStyle={actLnk}
      >Games List</NavLink>
      <NavLink to="/Games/new"
        exact style={link}
        activeStyle={actLnk}
      >Create A Game</NavLink>
    </div>
  )

}

export default NavBar;




