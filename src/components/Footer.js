import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Ovo je footer</h1>
          <p>Link na nepostojeću stranicu</p>
          <p>
            <Button variant="primary">
              <Link to="/uu" style={{ color: "black" }}>
                Error
              </Link>
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Footer;
