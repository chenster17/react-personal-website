import React, { Component } from 'react';
import {Container, CardGroup, Card} from "react-bootstrap";


export default class Content extends Component{
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth };
    }
    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    render(){
        return (
                <div className="content-card-1 center" >
                <Container style={{height:"100%"}}>
                    {(this.state.windowWidth < 800) ?<hr style={{height:"10px", backgroundColor:"#477CAD", opacity:"65%", borderRadius:"5px"}}/> : <div></div>}
                    <div>
                        <CardGroup style={{textAlign:"center", margin:"20px"}} id="about">
                            <Card style={{ backgroundColor:"#f8f9fa", borderTop: "0px",  borderBottom: "0px", borderWidth: "thick", borderColor:"#58a4b0"}}>
                                <Card.Img variant="top" src={require("../images/fullstack.png")} style={{width:"50px"}} className="center"/>
                                <Card.Body style={{marginTop:"20px"}}>
                                    <Card.Title style={{fontWeight: "bold"}}>Full Stack Developer</Card.Title>
                                    <Card.Text>
                                        Developing an experience that makes someone else's life better has always given me a sense of purpose and joy.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body style={{marginTop:"20px"}}>
                                    <Card.Title style={{fontStyle: "italic", color:"#477CAD"}}>Web Skills</Card.Title>
                                    <div>HTML</div>
                                    <div>CSS</div>
                                    <div>Mongodb</div>
                                    <div>ReactJS</div>
                                    <div>Express</div>
                                    <div>NodeJs</div>
                                    <div>Restful API</div>
                                </Card.Body>
                                <Card.Body style={{marginTop:"20px"}}>
                                    <Card.Title style={{fontStyle: "italic", color:"#477CAD"}}>Web Tools</Card.Title>
                                    <div>WebStorm</div>
                                    <div>AWS S3</div>
                                    <div>Heroku</div>
                                    <div>MLabs</div>
                                    <div>MongoDB Atlas</div>
                                    <div>Bootstrap</div>
                                </Card.Body>
                            </Card>
                            <Card style={{ backgroundColor:"#f8f9fa", borderTop: "0px",  borderBottom: "0px", borderWidth: "thick", borderColor:"#58a4b0"}}>
                                <Card.Img variant="top" src={require("../images/developer.png")} style={{width:"50px"}} className="center"/>
                                <Card.Body style={{marginTop:"20px"}}>
                                    <Card.Title style={{fontWeight: "bold"}}>Software Engineer</Card.Title>
                                    <Card.Text>
                                        I love communicating, collaborating, and problem-solving with others with the goal of achieving a shared objective.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body style={{marginTop:"20px"}}>
                                    <Card.Title style={{fontStyle: "italic", color:"#477CAD"}}>CS Languages</Card.Title>
                                    <div>Python</div>
                                    <div>Java</div>
                                    <div>C/C++</div>
                                    <div>Assembly</div>
                                </Card.Body>
                                <Card.Body style={{marginTop:"20px"}}>
                                    <Card.Title style={{fontStyle: "italic", color:"#477CAD"}}>CS Tools</Card.Title>
                                    <div>Eclipse</div>
                                    <div>JCreator</div>
                                    <div>Git/Github</div>
                                    <div>Bash</div>
                                </Card.Body>
                            </Card>
                            <Card style={{ backgroundColor:"#f8f9fa", borderTop: "0px",  borderBottom: "0px", borderWidth: "thick", borderColor:"#58a4b0"}}>
                                <Card.Img variant="top" src={require("../images/mentor.png")} style={{width:"50px"}} className="center"/>
                                <Card.Body style={{marginTop:"20px"}}>
                                    <Card.Title style={{fontWeight: "bold"}}>Mentor</Card.Title>
                                    <Card.Text>
                                        Years of mentorship has taught me the importance of communication and sympathy while guiding others.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body style={{marginTop:"20px"}}>
                                    <Card.Title style={{fontStyle: "italic", color:"#477CAD"}}>Work Positions</Card.Title>
                                    <div>Tutor</div>
                                    <div> LAUNCH Leader</div>
                                    <div>LAUNCH Team Leader</div>
                                </Card.Body>
                                <Card.Body style={{marginTop:"20px"}}>
                                    <Card.Title style={{fontStyle: "italic", color:"#477CAD"}}>Work Experience</Card.Title>
                                    <div>3 years of experience</div>
                                    <div>24 mentor sessions</div>
                                    <div>40+ students</div>
                                    <div>40+ hours of interactions</div>

                                </Card.Body>


                            </Card>
                        </CardGroup>
                    </div>
                </Container>
                </div>
        )
    }
}