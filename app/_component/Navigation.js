"use client";
import React from "react";
import Link from "next/link";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0 ">
              <Link href={"/home"} className="nav-link">
                Home
              </Link>
              {/* <Link href={"/"} className="nav-link">
                Collection
              </Link>

              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Clothes</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Electronics</NavDropdown.Item>
                <NavDropdown.Item href="#action6">Toys</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Applinces</NavDropdown.Item>
                <NavDropdown.Item href="#action7">Grocery</NavDropdown.Item>
              </NavDropdown> */}

              <Link href={"/"} className="nav-link">
                Login/signup
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
