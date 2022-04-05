import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

export default function Navigation(props) {
  return (
    <>
      <Navbar bg={props.mode} variant={props.mode} expand="lg">
        <Container>
          <Navbar.Brand href="home">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="about">{props.aboutText}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Form className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Enable Dark Mode"
            onClick={props.toggleMode}
          />
        </Form>
      </Navbar>
    </>
  );
}

Navigation.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navigation.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
