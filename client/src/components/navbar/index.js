import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './navbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/addchild" activeStyle>
            Add Child
          </NavLink>
          <NavLink to="/attendees" activeStyle>
            Attendee Details
          </NavLink>
          <NavLink to="/allergies" activeStyle>
            Allergies Info
          </NavLink>
          <NavLink to="/budget" activeStyle>
            Budget Calculator
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
