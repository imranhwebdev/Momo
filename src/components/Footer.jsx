import {React, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerLogo from '../assets/img/FooterLogo.svg'
import socialIcon1 from '../assets/img/w_telegrame.png';
import socialIcon2 from '../assets/img/white_twitter.png';
import socialIcon3 from '../assets/img/linkedin.png';
import socialIcon4 from '../assets/img/footer_s_logo4.png';
import socialIcon5 from '../assets/img/footer_s_logo5.png';
import socialIcon6 from '../assets/img/footer_s_logo6.png';
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
        menuLink: '#home',
    },
    {
        menuItem: 'Momomap',
        menuLink: '#momomap',
    },
    {
        menuItem: 'Tokenmics',
        menuLink: '#tokenomics',
    },
    {
        menuItem: 'How to buy',
        menuLink: '#howtobuy',
    },
    ];
    const socialIcons = [
        { 
            Icon: socialIcon1, 
            link: 'https://t.me/momotoken2100' 
        },
        { 
            Icon: socialIcon2, 
            link: 'https://twitter.com/TokenMomo' 
        },
        { 
            Icon: socialIcon3, 
            link: '#' 
        },
        { 
            Icon: socialIcon4, 
            link: 'https://solana.com/' 
        },
        { 
            Icon: socialIcon5, 
            link: 'https://solscan.io/token/2J4sFeo4HXXqmkcpbUj5wHbb1s4dv4oxJVos8ktVYQS4' 
        },
        { 
            Icon: socialIcon6, 
            link: 'https://www.geckoterminal.com/solana/pools/HY2VkFmtLsQKkSCiLNGv7y4EV9rretjWdu97QBMs2uFW'
        },
        // Add more buttons as needed
      ];

    // const footerMiddleContent = "$momo coin has no association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize.$MOMO is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.";
    const currentYear = new Date().getFullYear();
    const copyrightText = `Copyright © ${currentYear} Official MoMo Token`;
    return(
        <div className="footer_area">
            <Container>
                <Row className='footer_top'>
                    <Col md={4}>
                        <a href="/">
                            <figure className='footer_logo'>
                                <img src={footerLogo} alt="footer logo" />
                            </figure>
                        </a>
                    </Col>
                    <Col md={8}>
                        <ul className="footer__menu">
                            {footerMenus.map((footerMenu, index)=>(
                                <li key={index}><a href={footerMenu.menuLink}>{footerMenu.menuItem}</a></li>
                            ))}
                            
                        </ul>
                        <div className="copytoclipboard">
                            Contract: <input readOnly type="text"  value={textToCopy}
                                onChange={(e) => setTextToCopy(e.target.value)}/>

                            <button onClick={handleCopyToClipboard}> {isCopied && <span className='coppied'> <span className='copyed'>Copyed</span> </span>}  
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <g clip-path="url(#clip0_1_31)">
                                        <path d="M17.6067 19.002C17.9382 19.002 18.2561 18.8702 18.4905 18.6357C18.7249 18.4013 18.8567 18.0835 18.8567 17.752V7.75195C18.8567 7.42043 18.7249 7.10258 18.4905 6.86816C18.2561 6.63374 17.9382 6.50195 17.6067 6.50195H13.8567V2.75195C13.8567 2.42043 13.7249 2.10258 13.4905 1.86816C13.2561 1.63374 12.9382 1.50195 12.6067 1.50195H2.60669C2.27517 1.50195 1.95732 1.63374 1.7229 1.86816C1.48848 2.10258 1.35669 2.42043 1.35669 2.75195V12.752C1.35669 13.0835 1.48848 13.4013 1.7229 13.6357C1.95732 13.8702 2.27517 14.002 2.60669 14.002H6.35669V17.752C6.35669 18.0835 6.48848 18.4013 6.7229 18.6357C6.95732 18.8702 7.27517 19.002 7.60669 19.002H17.6067ZM17.6067 20.252H7.60669C6.94365 20.252 6.30795 19.9886 5.83911 19.5197C5.37027 19.0509 5.10669 18.415 5.10669 17.752V15.252H2.60669C1.94365 15.252 1.30795 14.9886 0.839111 14.5197C0.37027 14.0509 0.106689 13.415 0.106689 12.752V2.75195C0.106689 2.08891 0.37027 1.45301 0.839111 0.984172C1.30795 0.515331 1.94365 0.251953 2.60669 0.251953H12.6067C13.2697 0.251953 13.9054 0.515331 14.3743 0.984172C14.8431 1.45301 15.1067 2.08891 15.1067 2.75195V5.25195H17.6067C18.2697 5.25195 18.9054 5.51533 19.3743 5.98417C19.8431 6.45301 20.1067 7.08891 20.1067 7.75195V17.752C20.1067 18.415 19.8431 19.0509 19.3743 19.5197C18.9054 19.9886 18.2697 20.252 17.6067 20.252Z" fill="white"/>
                                        <path d="M7.60687 6.50195C7.27535 6.50195 6.95741 6.63365 6.72299 6.86807C6.48857 7.10249 6.35687 7.42043 6.35687 7.75195V17.752C6.35687 18.0835 6.48857 18.4014 6.72299 18.6358C6.95741 18.8703 7.27535 19.002 7.60687 19.002H17.6069C17.9384 19.002 18.2563 18.8703 18.4908 18.6358C18.7252 18.4014 18.8569 18.0835 18.8569 17.752V7.75195C18.8569 7.42043 18.7252 7.10249 18.4908 6.86807C18.2563 6.63365 17.9384 6.50195 17.6069 6.50195H7.60687ZM7.60687 5.25195H17.6069C18.2699 5.25195 18.9058 5.51535 19.3746 5.98419C19.8435 6.45303 20.1069 7.08891 20.1069 7.75195V17.752C20.1069 18.415 19.8435 19.0509 19.3746 19.5197C18.9058 19.9886 18.2699 20.252 17.6069 20.252H7.60687C6.94383 20.252 6.30795 19.9886 5.83911 19.5197C5.37026 19.0509 5.10687 18.415 5.10687 17.752V7.75195C5.10687 7.08891 5.37026 6.45303 5.83911 5.98419C6.30795 5.51535 6.94383 5.25195 7.60687 5.25195Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_31">
                                        <rect width="20.0017" height="20" fill="white" transform="translate(0.105713 0.251953)"/>
                                        </clipPath>
                                    </defs>
                                    </svg>
                            </button>
                        </div>

                    </Col>
                    {/* <Col sm={12}>
                        <div className="footer__middle__content text-center">
                            <p>{footerMiddleContent}</p>
                        </div>
                    </Col> */}
                    
                    <Col sm={12} className='text-center pt-3'>
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
