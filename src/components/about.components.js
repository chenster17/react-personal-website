import React, { Component } from 'react';
import {Container} from "react-bootstrap";


import NavigationBar from "./navbar.components";

export default class About extends Component{
    render(){
        return (
            <div>
                <NavigationBar/>

                    <Container>
                        <div>
                            About
                        </div>
                    </Container>
            </div>

        )
    }
}