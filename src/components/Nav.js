import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../images/ED-Horizontal_2-color_Logo.png";

const MyNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar {...props}>
        <Link to="/" state={props.invet1}>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/" state={props.invet1}>
                Inventory
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/lists" state={props.invet}>
                Edit List
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export { MyNav };
