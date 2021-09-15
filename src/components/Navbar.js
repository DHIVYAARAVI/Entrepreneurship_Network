import React, { useState } from 'react';
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
              <NavLink href="/" className="navi">Home&emsp;</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/online"  className="navi">Online Course&emsp;</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/web"  className="navi">>>&emsp;Web Development&emsp;</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/languages"  className="navi">Languages&emsp;</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/marketing"  className="navi">Marketing&emsp;</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;