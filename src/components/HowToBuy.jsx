import {React, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import htbSL1 from "../assets/img/htb-s-l1.png";
import htbSL2 from "../assets/img/htb-s-l2.png";
import htbSL3 from "../assets/img/htb-s-l3.png";
import htbSL4 from "../assets/img/htb-s-l4.png";
import htbImg from "../assets/img/htb_img.png";

export default function HowToBuy(){
    const title = "HOW <span>TO BUY</span>";
    const desc = "Ready to own some Momo tokens? Follow these straightforward steps to purchase your Momo tokens and join the Momo community";
    const htbServices = [
        { 
            sl: 1, 
            title: "Set Up Your Wallet",
            desc: "Download Phantom or your preferred solana wallet for free from the App Store or Google Play Store. If you're using a desktop, get the Google Chrome extension by visiting phantom.app",
            logo: htbSL1,
        },
        { 
            sl: 2, 
            title: "Set Up Your Wallet",
            desc: "Download Phantom or your preferred solana wallet for free from the App Store or Google Play Store. If you're using a desktop, get the Google Chrome extension by visiting phantom.app",
            logo: htbSL2,
        },
        { 
            sl: 3, 
            title: "Set Up Your Wallet",
            desc: "Download Phantom or your preferred solana wallet for free from the App Store or Google Play Store. If you're using a desktop, get the Google Chrome extension by visiting phantom.app",
            logo: htbSL3,
        },
        { 
            sl: 4, 
            title: "Set Up Your Wallet",
            desc: "Download Phantom or your preferred solana wallet for free from the App Store or Google Play Store. If you're using a desktop, get the Google Chrome extension by visiting phantom.app",
            logo: htbSL4,
        },
        // Add more buttons as needed
      ];

    return(
        <div className="howtobuy" id='howtobuy'>
            <Container>
                <Row className="section__title">
                    <Col lg={5} className='text-center'>
                        <h2 dangerouslySetInnerHTML={{ __html: title }} />
                    </Col>
                    <Col lg={7}>
                            <p>{desc}</p>
                    </Col>
                </Row>   
                <Row>
                    <Col>
                        <div className="howtobuy__all_services">
                        {htbServices.map((htbService, index) => (
                            <div className="single__service_item">
                                <span>{htbService.sl}</span>
                                <h4>{htbService.title}</h4>
                                <p>{htbService.desc}</p>
                                <figure className="htb_s_l">
                                    <img src={htbService.logo} alt="how to buy single service logo" />
                                </figure>
                            </div>
                        ))}
                            
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="htb_left_img">
                            <figure>
                                <img src={htbImg} alt="" />
                            </figure>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="htb_right">
                            <iframe src="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=2J4sFeo4HXXqmkcpbUj5wHbb1s4dv4oxJVos8ktVYQS4&fixed=in" frameborder="0"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
