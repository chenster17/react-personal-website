import React, { Component } from 'react';
import {Container} from "react-bootstrap";


import NavigationBar from "./navbar.components";

export default class Contact extends Component{
    render(){
        return (
            <div>
                <NavigationBar/>
                <Container>
                    <div>
                        Contact
                    </div>
                </Container>
            </div>

        )
    }
}