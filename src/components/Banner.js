import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{`Hi I'm Ghenet`}<span className="wrap">Frontend Engineer</span></h1>
                        <p>A software engineer whose mission is to make working life simpler, 
                            more pleasant, and more productive. I have been working professionally 
                            as a developer since 2012 and hold a Bachelor’s in Computer Science from 
                            Eritrea Institute of Technology.
                            Outside of work I enjoy spending time with my family and friends(stating the obvious),
                            drawing on procreate, cooking, sightseeing and learing new languages - Arabic and French.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col> 
                </Row>
            </Container>
        </section>
    )
}