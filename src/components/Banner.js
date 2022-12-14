import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Frontend Engineer", "UI Developer", "Web Designer"];
    const [text,setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100); //time delay after which the next letter is displayed
    const period = 2000;

    useEffect(()=> {
        let ticker = setInterval(()=> {
            tick();
        }, delta)

        return ()=> { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{`Hi I'm Ghenet`}<span className="wrap"> {text}</span></h1>
                        <p>A software engineer whose mission is to make working life simpler, 
                            more pleasant, and more productive. I have been working professionally 
                            as a developer since 2012 and hold a Bachelor’s in Computer Science from 
                            Eritrea Institute of Technology.
                        </p>    
                        <p>    
                            Outside of work I enjoy spending time with my family and friends(stating the obvious),
                            drawing on procreate, cooking, sightseeing and learing new languages - Arabic and French.
                        </p>
                        <a href="mailto:ghenet.andemichael@gmail.com" >Let's connect <ArrowRightCircle size={25} /></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col> 
                </Row>
            </Container>
        </section>
    )
}