import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Nasa vjezba React routera</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Početna</Nav.Link>
          <Nav.Link href="/o-nama">O nama</Nav.Link>
          <Nav.Link href="/nasi-proizvodi">Naši proizvodi</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Header;
