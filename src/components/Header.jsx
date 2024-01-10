import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import socialLogo1 from '../assets/img/telegram.svg';
import socialLogo2 from '../assets/img/twitter.svg';
import siteLogo from '../assets/img/site-logo.svg';

export default function Header() {
    const [fix, setFix] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 392) {
                setFix(true);
            } else {
                setFix(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
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
                            <NavLink to="/" spy={true} smooth={true} offset={fix ? -70 : -50} duration={500}>Home</NavLink>
                            <a href="#about" spy={true} smooth={true} offset={fix ? -70 : -70} duration={500}>About</a>
                            <a href="#howtobuy" spy={true} smooth={true} offset={fix ? -70 : -50} duration={500}>How to buy</a>
                            <NavLink to="/bridge" spy={true} smooth={true} offset={fix ? -90 : -70} duration={500}>Bridge</NavLink>
                            <a href="#tokenomics" spy={true} smooth={true} offset={fix ? -70 : -70} duration={500}>Tokenomics</a>
                            <a href="#momomap" spy={true} smooth={true} offset={fix ? -70 : -70} duration={500}>Momomap</a>
                        </Nav>
                        <ul className='header_socials'>
                            <li>
                                <a href="https://t.me/momotoken2100" target='_blank' rel='noopener noreferrer'>
                                    <img src={socialLogo1} alt="telegram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/TokenMomo" target='_blank' rel='noopener noreferrer'>
                                    <img src={socialLogo2} alt="twitter" />
                                </a>
                            </li>
                        </ul>
                        <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=2J4sFeo4HXXqmkcpbUj5wHbb1s4dv4oxJVos8ktVYQS4&fixed=in" target='_blank' className='boxed__btn'>GET MOMO</a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
