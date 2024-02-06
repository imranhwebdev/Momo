import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll} from 'react-scroll';
import socialLogo1 from '../assets/img/telegram.svg';
import socialLogo2 from '../assets/img/twitter.svg';
import siteLogo from '../assets/img/site-logo.svg'

export default function Header(){ 
    const [fix, setFix] = useState(false)
    function setFixed(){
        if(window.scrollY >= 392){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', setFixed);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', setFixed);
        };
      }, []);
    return(
        <header className={fix ? 'heading fixed' : 'heading'}>
            <Navbar collapseOnSelect expand="xl">
                <Container>
                    <div className="header__logo">
                        <Navbar.Brand href="/">
                            <img src={siteLogo} alt="" />
                        </Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="home" spy={true} smooth={true}  offset={fix ? -70 : -50} duration={500}>Home</Link>
                        <Link to="about" spy={true} smooth={true}  offset={fix ? -70 : -70} duration={500}>About</Link>
                        <Link to="howtobuy" spy={true} smooth={true} offset={fix ? -70 : -50} duration={500}>How to buy</Link>
                        <Link to="tokenomics" spy={true} smooth={true}  offset={fix ? -70 : -70} duration={500}>Tokenomics</Link>
                        <Link to="momomap" spy={true} smooth={true}  offset={fix ? -70 : -70} duration={500}>Nonomap</Link>
                    </Nav>
                        <ul className='header_socials'>
                            <li>
                                <Link href="https://t.me/momotoken2100" target='_blank'><img src={socialLogo1} alt="telegram" /></Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/TokenMomo" target='_blank'><img src={socialLogo2} alt="twitter" /></Link>
                            </li>
                        </ul>
                        <Link href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=2J4sFeo4HXXqmkcpbUj5wHbb1s4dv4oxJVos8ktVYQS4&fixed=in" target='_blank' className='boxed__btn'>GET NONO</Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}