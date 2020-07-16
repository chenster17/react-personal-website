import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default class NavigationBar extends Component {
    render(){
        return (
            <Navbar bg="light" sticky="top" expand="lg" className="custom-font">
                <Navbar.Brand href="/"><img src={require("../images/logo.png")}  className="d-inline-block align-top" alt="Website logo" style={{padding: "5px",width:"250px", maxWidth:"100%"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{margin:"20px"}} className="ml-auto"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{fontSize: "20px"}}>
                        <Nav.Link href="/about" className="item-padding">About</Nav.Link>
                        <Nav.Link href="/Portfolio" className="item-padding">Portfolio</Nav.Link>
                        <Nav.Link href="/Contact" className="item-padding">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}