import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap';

export default function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <LinkContainer to="/">
        <Navbar.Brand>{props.title}</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/">
            <Nav.Link href="/">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
            <Nav.Link href="/about">About</Nav.Link>
            </LinkContainer>
          </Nav>
          {props.searchBar? <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> : "No Search Bar"}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes={
  title:PropTypes.string.isRequired
}

Header.defaultProps={
  title:"Todo List"
}