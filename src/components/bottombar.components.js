import React, { Component } from 'react';
import {Container, Row, Col, Navbar} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'




export default class BottomBar extends Component {
    render(){
        return (
            <div style={{backgroundColor:"#1b1b1e", height:"75px", color:"white"}}>
                <div className="center">
                    <Row>
                        <Col xs={6} md={4}>
                            <div className="center"> test </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="center"> test </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="center"> test </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}