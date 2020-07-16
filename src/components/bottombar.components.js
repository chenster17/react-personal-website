import React, { Component } from 'react';
import {Container, Row, Col, Navbar, Image} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'




export default class BottomBar extends Component {
    constructor(props) {
        super(props);
    }
    topFunction=()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render(){
        return (
            <div className="gradient-bg">
            <div id="bar" style={{backgroundColor:"#1b1b1e", height:"100%", color:"white"}}>
                <span style={{color:"#f8f9fa", padding:"15px"}} type='button' onClick={this.topFunction}>back to top<Image src={require("../images/arrow.png")} style={{width:"20px", margin:"10px"}}/></span>
                <div style={{paddingBottom:"10px"}}>
                    <div className="center" style={{textAlign:"center", color:"#f8f9fa"}}>Contact:</div>
                    <hr align="center" style={{width:"90px", height:"1px", backgroundColor:"#f8f9fa"}}/>
                    <div className="center" style={{textAlign:"center", color:"#f8f9fa", padding:"5px"}} ><a style={{textDecoration:"none",color:"#f8f9fa" }} href="mailto:Jchen1117@gmail.com">Jchen1117@gmail.com</a></div>
                    <div className="center" style={{textAlign:"center", color:"#f8f9fa", padding:"5px"}}>+1 (519)-972-8802</div>
                </div>
            </div>
        <div style={{padding:"0px 15px 5px 15px", color:"#1b1b1e", fontWeight: "bold"}}>Designed and Developed by Zhao Chen</div>
            </div>
        )
    }
}