import React, { Component } from 'react';
import {Container} from "react-bootstrap";


import NavigationBar from "./navbar.components";
import BottomBar from "./bottombar.components";

export default class About extends Component{
    render(){
        return (
            <div>
                <NavigationBar/>
                    <Container>
                        <div style={{marginTop:"200px"}}>
                            <h1 style={{fontSize:"100px", color:"#477CAD"}}> about me. </h1>
                            <div style={{fontSize:20, padding:"80px"}}>
                                My name is Zhao Chen, but my friends call me Joey. I am a young and eager full stack developer and software engineer raised in the Windsor area. I have an uncontrollable desire to learn new skills to better myself. I enjoy hurdling towards difficult challenges and unfamiliar opportunities to find new ways to grow.
                                <br/><br/>
                                My most recent challenge had me developing a whole new website for a Chinese organization in my neighborhood. I volunteered to remake their online presence using the MERN stack, on my own. I took this opportunity to help my community, while also challenging myself to learn the intricacies of every level of web development; MongoDB, RESTful API, Express, ReactJS, NodeJS, Auth0, AWS S3, and even Heroku and SSL certification. I have gained new knowledge and experience through this challenge that is worth more than any salary they could have paid me.
                                <br/><br/>
                                While I am not sitting behind a desk working on developing application, I am sitting behind a desk playing video games, planning my future PC system, or building Gundam kits. When I feel like stepping away from my computer, I enjoy playing ping pong, badminton, and basketball. I hope to join a team with the same aspiration to help others and to create the best service possible. Feel free to <a style={{textDecoration:"none",color:"#477CAD", fontWeight:"bold" }} href="mailto:Jchen1117@gmail.com">contact me</a> at anytime.
                            </div>

                        </div>
                    </Container>
                <BottomBar/>
            </div>

        )
    }
}