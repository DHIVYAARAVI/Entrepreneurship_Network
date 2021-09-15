import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './navbar.css'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="secondary" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar >
            <NavItem>
              <NavLink><Link className="navi" to='/'>Home&emsp;</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="navi" to='/online'>Online Course&emsp;</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="navi" to='/web'>&emsp;Web Development&emsp;</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="navi" to='/languages'>Languages&emsp;</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="navi" to='/marketing'>Marketing&emsp;</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;