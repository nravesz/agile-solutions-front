import React from "react";
import { Container, Navbar } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css';
import './Header.css'

const Header = () => {
    return (
        <Navbar className="header-color" variant="dark">
            <Container style={{justifyContent:"left"}}>
                <Navbar.Brand bg="light"> Menu </Navbar.Brand>
                <Navbar.Brand bg="light"> 🔴 User name </Navbar.Brand>
            </Container>
            <Container>
                <Navbar.Brand bg="light"> Sales Report </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;