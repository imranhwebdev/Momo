import {React, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import htbSL1 from "../assets/img/htb-s-l1.png";
import htbSL2 from "../assets/img/htb-s-l2.png";
import htbSL3 from "../assets/img/htb-s-l3.png";
import htbSL4 from "../assets/img/htb-s-l4.png";
import htbImg from "../assets/img/htb_img.png";
import howtoTopbuyShap from "../assets/img/howtobuy_top_shap.png";

export default function HowToBuy(){
    const title = "HOW <span>TO BUY</span>";
    const desc = "Ready to own some Momo tokens? Follow these straightforward steps to purchase your Momo tokens and join the Momo community";
    const htbServices = [
        { 
            sl: '01', 
            title: "Set Up Your Wallet",
            desc: "Download Phantom or your preferred solana wallet for free from the App Store or Google Play Store. If you're using a desktop, get the Google Chrome extension by visiting phantom.app",
            logo: htbSL1,
        },
        { 
            sl: '02.', 
            title: "Set Up Your Wallet",
            desc: "Ensure there's some Sol in your wallet to exchange for $Momo. If you don't have any Sol , you can either buy it directly on exchange and transfer it to your wallet.",
            logo: htbSL2,
        },
        { 
            sl: '03.', 
            title: "Set Up Your Wallet",
            desc: "Connect to Raydium. Visit raydium.io in your Google Chrome browser or within your Phantom app's browser. Connect your wallet, paste the $Momo token address (2J4sFeo4HXXqmkcpbUj5wHbb1s4dv4oxJVos8ktVYQS4) into Raydium, select $Momo, and confirm the transaction. When prompted by Phantom for a wallet signature, proceed with the signature.",
            logo: htbSL3,
        },
        { 
            sl:'04.', 
            title: "Set Up Your Wallet",
            desc: "Switch your Sol for $Momo. We have 0 taxes, so you don't need to worry about a specific slippage rate. However, during times of market volatility, you may need to adjust the slippage settings as necessary.",
            logo: htbSL4,
        },
        // Add more buttons as needed
      ];

    return(
        <div className="howtobuy" id='howtobuy'>
            <figure className='howtobuy_top_shap'>
                <img src={howtoTopbuyShap} alt="get momo top shap" />
            </figure>
            <Container>
                <Row className="section_M_title align-items-end">
                    <Col lg={5}>
                        <h2 dangerouslySetInnerHTML={{ __html: title }} />
                    </Col>
                    <Col lg={7}>
                            <p className='mb-3'>{desc}</p>
                    </Col>
                </Row>   
                <Row>
                    <Col>
                        <div className="howtobuy__all_services">
                        {htbServices.map((htbService, index) => (
                            <div className="single__service_item" key={index}>
                                <span>{htbService.sl}</span>
                                <div className="content">
                                        <h4>{htbService.title}</h4>
                                        <p>{htbService.desc}</p>
                                        <figure className="htb_s_l">
                                            <img src={htbService.logo} alt="how to buy single service logo" />
                                        </figure>
                                </div>
                            </div>
                        ))}
                            
                        </div>
                    </Col>
                </Row>
                <Row className='mt-4 pt-4'>
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
