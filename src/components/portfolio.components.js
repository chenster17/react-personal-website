import React, { Component } from 'react';
import {Container} from "react-bootstrap";

export default class Portfolio extends Component{
    render(){
        return (
            <div id="portfolio" style={{color:"white"}} className="custom-font">
                    <div style={{width:"80%", paddingTop:"80px", textAlign:"center", paddingBottom:"80px"}} className='center'>
                        <h1 style={{ fontWeight:"bold", paddingBottom:"20px"}}> My Projects </h1>
                        <div style={{paddingBottom:"50px", fontSize:"20px"}}>These are some projects I have worked on. Please <a style={{textDecoration:"none", color:"477CAD"}} href="mailto:Jchen1117@gmail.com">contact me </a> if you want to know more. </div>
                        <Container>
                        <div className="box-container">
                            <div className="box" style={{overflow:"hidden"}}>
                                <div className="left-profile-caption">Essex County Chinese Canadian Association Website</div>
                                <img src={require("../images/ECCCA.png")} style={{width:"75%"}}/>
                                <div className="right-profile-caption">MongoDB / Express / React JS / Node.js / AWS S3</div>
                            </div>
                            <div className="box" style={{overflow:"hidden"}}>
                                <div className="left-profile-caption" style={{color:"black"}}>Personal Website</div>
                                <img src={require("../images/Macbook.png")} style={{width:"55%"}}/>
                                <div className="right-profile-caption" style={{color:"black"}}>React JS / Bootstrap</div>
                            </div>
                            <div className="box" style={{overflow:"hidden"}}>
                                <div className="left-profile-caption" style={{color:"black"}}>Web Application Selection</div>
                                <img src={require("../images/app_Selection.png")} style={{width:"60%", boxShadow:"5px 5px 5px gray"}}/>
                                <div className="right-profile-caption" style={{color:"black"}}>HTML / CSS</div>
                            </div>
                            <div className="box" style={{overflow:"hidden"}}>
                                <div className="left-profile-caption" style={{color:"black"}}>Email Design</div>
                                <img src={require("../images/email_HTML.png")} style={{width:"60%", boxShadow:"5px 5px 5px gray"}}/>
                                <div className="right-profile-caption" style={{color:"black"}}>HTML</div>
                            </div>
                            <div className="box" style={{overflow:"hidden"}}>
                                <div className="left-profile-caption">PCEmpire Website</div>
                                <img src={require("../images/PCEmpire.png")} style={{width:"70%"}}/>
                                <div className="right-profile-caption">MongoDB / Express / React JS / Node.js </div>
                            </div>
                        </div>
                        </Container>
                    </div>
            </div>

        )
    }
}