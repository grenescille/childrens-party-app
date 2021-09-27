import React from 'react';
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Logo</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/addchild" activeStyle>
            Add Child
          </NavLink>
          <NavLink to="/attendees" activeStyle>
            Attendees
          </NavLink>
          <NavLink to="/allergies" activeStyle>
            Allergies Info
          </NavLink>
          <NavLink to="/budget" activeStyle>
            Budget Calculator
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
