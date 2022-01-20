import React from 'react';
import { Bars, Nav, NavIcon, NavLink} from './NavbarElements'

const Navbar = () => {
  return(
    <div>
      <Nav>
        <NavLink to='/'>Mug Bee</NavLink>
        <NavIcon>
          <div></div>
        </NavIcon>
        <Bars />
      </Nav>
    </div>
  ) 
};

export default Navbar;
