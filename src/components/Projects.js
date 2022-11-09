import { Tab, Container, Row, Col }  from "react-bootstrap";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import projImg3 from "../assets/img/projImg3.png";
import projImg4 from "../assets/img/projImg4.png";
import projImg5 from "../assets/img/projImg5.png";
import projImg6 from "../assets/img/projImg6.png";
import {ProjectsCard} from "./ProjectsCard";


export const Projects = () => {
    const projects = [
        {
        title: "Covid19-Tracker",
        description: <a href="https://github.com/Ghenet/Covid19_Tracker">Covid19 tracker app I build using react and chart.js</a>,
        imgUrl: projImg1,
        }, 
        {
        title: "Finddit",
        description: <a href="https://github.com/Ghenet/Finddit">An app that will search articles using the Reddit API.</a>,
        imgUrl: projImg2,
        }, 
        {
        title: "FunTrivia",
        description: <a href="https://github.com/Ghenet/FunTrivia">Trivia app that I build just to practice my TypeScript.</a>,
        imgUrl: projImg3,
        },
        {
        title: "CSSGrid-Template",
        description: <a href="https://github.com/Ghenet/Responsive_Grid_template">A Responsive website Template built with the CSS Grid Templates.</a>,
        imgUrl: projImg4,
        }, 
        {
        title: "FaceCSS",
        description: <a href="https://github.com/Ghenet/FaceCSS">A fun sketch of cartoon face using html and CSS only."</a>,
        imgUrl: projImg5,
        },
        {  
        title: "PlantPal",
        description: <a href="https://github.com/Ghenet/PlantPal">PlantPal is an app designed to help plant owners' water their plants on time.</a>,
        imgUrl: projImg6,
        },  
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>A selection of my projects</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                        {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link href="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab two</Nav.Link>
                            </Nav.Item>
                        </Nav> */}
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index) => {
                                            return (
                                               <ProjectsCard 
                                                key={index}
                                                {...project}
                                               />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Digital Art works</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}