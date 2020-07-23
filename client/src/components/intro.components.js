import React, { Component } from 'react';
import {Container} from "react-bootstrap";


export default class Intro extends Component{
    render(){
        return (
            <div>
                <Container>
                    <div style={{color:"#477CAD", width:"80%", paddingTop:"150px", textAlign:"center", paddingBottom:"80px"}} className='center'>
                        <h1 style={{ fontWeight:"bold"}}> Nice to meet you! </h1>
                        <p style={{paddingTop:"40px", fontSize:"20px", paddingBottom:"40px" }}>Working on projects have always been exhilarating to me. I enjoy the problem solving and bouncing ideas among others. However, my passion really lies in crafting the best experience
                            for users. I love knows that an application I developed benefited someone else's experience, and I will work my hardest to achieve this.</p>
                    </div>
                </Container>
            </div>

        )
    }
}