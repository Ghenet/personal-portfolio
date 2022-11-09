import {useState, useEffect } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home'); //  var to keep track of which link we area on 
    const [scrolled, setScrolled] = useState(false); //var to keep track whether the user has scrolled or not


    //fn to determine if user has scrolled or not(useeffect is triggered once scrolled)
 useEffect(()=>{
    const onScroll = () => {
        if(window.scrollY > 50){
            setScrolled(true);
        }else {
            setScrolled(false);
        }
    }
    //adds event listener on mount
    window.addEventListener('scroll', onScroll);
    //removes the event when component unmounts
    return () => window.removeEventListener('scroll', onScroll);
 },[])

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/ghenet-andemichael/"><img src={navIcon1} alt="linkedin" /></a>
                        <a href="https://github.com/Ghenet"><img src={navIcon2} alt="Github" /></a>
                        <a href="https://codepen.io/Gheni"><img src={navIcon3} alt="codepen" /></a>
                        <a href="https://twitter.com/Ghenikibrom"><img src={navIcon4} alt="twitter" /></a>
                    </div>
                    <button className="vvd" onClick={()=>console.log('connect')}><span><a href="mailto:ghenet.andemichael@gmail.com">Let's Connect!</a></span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}


//Future enhancement
// change the logo with my anime pic