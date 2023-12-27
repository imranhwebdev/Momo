import {React, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerLogo from '../assets/img/FooterLogo.svg'
import socialIcon1 from '../assets/img/telegram.svg';
import socialIcon2 from '../assets/img/twitter.svg';
import socialIcon3 from '../assets/img/social-icon3.svg';
import socialIcon4 from '../assets/img/social-icon4.svg';
import socialIcon5 from '../assets/img/social-icon5.svg';
import copyTxt from '../assets/img/copy.png';
export default function Footer(){
    const [textToCopy, setTextToCopy] = useState('2J4sFeo4HXXqmkcpbUj5wHbb1s4dv4oxJVos8ktVYQS4');
    const [isCopied, setIsCopied] = useState(false);
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            setIsCopied(true);
          })
          .catch(err => {
            console.error('Failed to copy to clipboard: ', err);
          });
      };

   const footerMenus =  [
    {
        menuItem: 'Home',
        menuLink: 'home',
    },
    {
        menuItem: 'Momomap',
        menuLink: 'momomap',
    },
    {
        menuItem: 'Tokenmics',
        menuLink: 'tokenmics',
    },
    {
        menuItem: 'How to buy',
        menuLink: 'howtobuy',
    },
    ];
    const socialIcons = [
        { 
            Icon: socialIcon1, 
            link: '#' 
        },
        { 
            Icon: socialIcon2, 
            link: '#' 
        },
        { 
            Icon: socialIcon3, 
            link: '#' 
        },
        { 
            Icon: socialIcon4, 
            link: '#' 
        },
        { 
            Icon: socialIcon5, 
            link: '#' 
        },
        // Add more buttons as needed
      ];

    const footerMiddleContent = "$momo coin has no association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize.$MOMO is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.";
    const currentYear = new Date().getFullYear();
    const copyrightText = `Copyright © ${currentYear} Official MoMo Token`;
    return(
        <div className="footer_area">
            <Container>
                <Row className='footer_top'>
                    <Col md={6}>
                        <a href="/">
                            <figure>
                                <img src={footerLogo} alt="footer logo" />
                            </figure>
                        </a>
                    </Col>
                    <Col md={6}>
                        <ul className="footer__menu">
                            {footerMenus.map((footerMenu, index)=>(
                                <li key={index}><a href={footerMenu.menuLink}>{footerMenu.menuItem}</a></li>
                            ))}
                            
                        </ul>
                        <div className="copytoclipboard">
                            Contract: <input readOnly type="text"  value={textToCopy}
                                onChange={(e) => setTextToCopy(e.target.value)}/>

                            <button onClick={handleCopyToClipboard}> {isCopied && <span className='coppied'> <span className='copyed'>Copyed</span> </span>} <img src={copyTxt}/></button>
                        </div>

                    </Col>
                    <Col sm={12}>
                        <div className="footer__middle__content">
                            <p>{footerMiddleContent}</p>
                        </div>
                    </Col>
                    
                    <Col sm={12}>
                        <div className="footer__social">
                            {socialIcons.map((socialIcon, index) => (
                                <a target='_target' key={index} href={socialIcon.link} className="social_icons">
                                    <img src={socialIcon.Icon} alt="" />
                                </a>
                            ))}
                        </div>
                        <p className='copyright'>{copyrightText}</p>

                    </Col>
                    
                </Row>   
            </Container>
        </div>
    )
}
