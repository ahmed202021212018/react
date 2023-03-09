import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">My Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">
            MyStore
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products" style={(isActive) => ({
              textDecoration: isActive ? "underline" : "none",
            })}>
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products/add"
            style={(isActive) => ({
              textDecoration: isActive && "underline",
            })}
          >
            Add New Product
          </Nav.Link>       
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
