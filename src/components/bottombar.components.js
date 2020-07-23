import React, { Component } from 'react';
import {Image} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'




export default class BottomBar extends Component {
    topFunction=()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render(){
        return (
            <div className="gradient-bg" id="contact">
            <div id="bar" style={{backgroundColor:"#1b1b1e", height:"100%", color:"white"}}>
                <span style={{color:"#f8f9fa", padding:"15px"}} type='button' onClick={this.topFunction}>back to top<Image src={require("../images/arrow.png")} style={{width:"20px", margin:"10px"}}/></span>
                <div style={{paddingBottom:"15px"}}>
                    <div className="center" style={{textAlign:"center", color:"#f8f9fa"}}>contact:</div>
                    <hr align="center" style={{width:"90px", height:"1px", backgroundColor:"#f8f9fa"}}/>
                    <div className="center" style={{textAlign:"center", color:"#f8f9fa", padding:"5px"}} ><a style={{textDecoration:"none",color:"#f8f9fa" }} href="mailto:Jchen1117@gmail.com">jchen1117@gmail.com</a></div>
                    <div className="center" style={{textAlign:"center", color:"#f8f9fa", padding:"5px"}}>+1 (519)-972-8802</div>
                    <div style={{ fontSize:"10px", marginLeft:"15px" }}>designed and developed by Zhao Chen</div>
                </div>
            </div>
            </div>
        )
    }
}