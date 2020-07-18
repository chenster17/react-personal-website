import React, { Component } from 'react';
import {Container, Image, Button} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

import NavigationBar from "./navbar.components";
import BottomBar from "./bottombar.components";
import Content from "./content.components";



export default class Home extends Component{
    render(){
        return (
            <div className="custom-font">
                <NavigationBar/>
                <div id="grad">
                    <div className="intro-card center">
                        <Container>
                            <div>
                                <div className="profile-image-right">
                                    <Image src={require("../images/profileImage.png")}  className="center" style={{marginTop:"25px",width:"70%", maxWidth:"350px"}}/>
                                </div>
                                <div className="info-left">
                                    <div className="intro-text">Hey there! My name is </div>
                                        <div style={{fontSize:"90px", fontWeight: "bold", color:"#477CAD",lineHeight:"130px"}}>Zhao Chen.</div>
                                            <hr align="left" style={{width:"90px", height:"5px", backgroundColor:"#477CAD"}}/>
                                            <p className="intro-text"> I am a full stack developer, software engineer, & casual writer</p>
                                        <div style={{paddingBottom:"30px"}}>
                                            <Button href={require("../resume/resume.pdf")} style={{height:"50px", width:"125px",padding:"10px", borderRadius:"25px", backgroundColor:"#477CAD", marginTop:"40px"}} target="_blank"> My Resume </Button>
                                            <a href="https://github.com/chenster17" target="_blank" rel="noopener noreferrer"><Image src={require("../images/Github.png")}  className="center web-icons"/></a>
                                            <a href="https://www.facebook.com/joey.chen.9041" target="_blank" rel="noopener noreferrer"> <Image src={require("../images/Facebook.png")}  className="center web-icons"/></a>
                                            <a href="https://www.linkedin.com/in/zhao-chen-544091111/" target="_blank" rel="noopener noreferrer"><Image src={require("../images/Linkedin.png")}  className="center web-icons"/></a>
                                        </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <Content/>
                    <BottomBar/>
                </div>
            </div>

        )
    }
}