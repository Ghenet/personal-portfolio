import { Tab, TabContainer,Container, Row, Col }  from "react-bootstrap";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import projImg3 from "../assets/img/projImg3.png";
import projImg4 from "../assets/img/projImg4.png";
import projImg5 from "../assets/img/projImg5.png";
import projImg6 from "../assets/img/projImg6.png";

export const Projects = () => {
    const projects = [
        {
        title: "Covid19-Tracker",
        description: "Covid19 tracker app I build using react and chart.js",
        imgUrl: projImg1,
        }, 
        {
        title: "Finddit",
        description: "An app that will search articles using the Reddit API.",
        imgUrl: projImg2,
        }, 
        {
        title: "FunTrivia",
        description: "a trivia app that I build just to practice my TypeScript.",
        imgUrl: projImg3,
        },
        {
        title: "CSSGrid-Template",
        description: "a Responsive website Template built with the CSS Grid Templates.",
        imgUrl: projImg4,
        }, 
        {
        title: "FaceCSS",
        description: "A fun sketch of cartoon face using html and CSS only.",
        imgUrl: projImg5,
        },
        {  
        title: "PlantPal",
        description: "PlantPal is an app designed to help plant owners' water their plants on time.",
        imgUrl: projImg6,
        },  
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <P>Lorem Ipsum Lorem Ipsom Lorem Ipusome</P>
                        <Tab.Container id="project-tabs" defaultActiveKey="first" >
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link href="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab two</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index) => {
                                            return (
                                                <p>{project.title}</p>
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