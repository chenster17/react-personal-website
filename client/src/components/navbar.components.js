import React, { Component } from 'react';
import { Navbar, Nav} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default class NavigationBar extends Component {
    render(){
        return (
            <Navbar bg="light" fixed="top" expand="lg" className="custom-font">
                <Navbar.Brand href="/"><img src={require("../images/logo.png")}  className="d-inline-block align-top" alt="Website logo" style={{padding: "5px",width:"250px", maxWidth:"100%"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{margin:"20px"}} className="ml-auto"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{fontSize: "20px"}}>
                        <Nav.Link href="/#portfolio" className="item-padding" style={{ color:"#477CAD"}}> portfolio</Nav.Link>
                        <Nav.Link href="/about" className="item-padding" style={{ color:"#477CAD"}}>about</Nav.Link>
                        <Nav.Link href="/#contact" className="item-padding" style={{ color:"#477CAD"}}>contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}