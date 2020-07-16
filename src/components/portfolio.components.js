import React, { Component } from 'react';
import {Container} from "react-bootstrap";


import NavigationBar from "./navbar.components";

export default class Portfolio extends Component{
    render(){
        return (
            <div>
                <NavigationBar/>
                <Container>
                    <div>
                        Portfolio
                    </div>
                </Container>
            </div>

        )
    }
}