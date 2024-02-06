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
    const desc = "Ready to own some Nono tokens? Follow these straightforward steps to purchase your Nono tokens and join the Nono community";
    const htbServices = [
        { 
            sl: '01', 
            title: "Set Up Your Wallet",
            desc: "Download Metamask or your preferred Bsc wallet for free from the App Store or Google Play Store. If you're using a desktop, get the Google Chrome extension by visiting metamask.io",
            logo: htbSL1,
        },
        { 
            sl: '02.', 
            title: "Get Some BNB",
            desc: "Ensure there's some BNB in your wallet to exchange for $Nono. If you don't have any BNB , you can either buy it directly on exchange and transfer it to your wallet.",
            logo: htbSL2,
        },
        { 
            sl: '03.', 
            title: "Go to PancakeSwap",
            desc: "Connect to PancakeSwap. Visit pancakeswap.finance in your Google Chrome browser or within your Phantom app's browser. Connect your wallet, paste the $Nono token address (0xfaab404d00c4c4dacce9475baec16c945292cd36) into PancakeSwap, select $Nono, and confirm the transaction. When prompted by Phantom for a wallet signature, proceed with the signature.",
            logo: htbSL3,
        },
        { 
            sl:'04.', 
            title: "Switch BNB to $Nono",
            desc: "Switch your BNB for $Nono. We have 0 taxes, so you don't need to worry about a specific slippage rate. However, during times of market volatility, you may need to adjust the slippage settings as necessary.",
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
                        <h2 className='text-white' dangerouslySetInnerHTML={{ __html: title }} />
                    </Col>
                    <Col lg={7}>
                            <p className='mb-3 text-white'>{desc}</p>
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
                <Row className='mt-4 pt-4 pt-lg-5'>
                    <Col lg={6}>
                        <div className="htb_left_img pt-4 pt-lg-5">
                            <figure>
                                <img src={htbImg} alt="" />
                            </figure>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="htb_right">
                            <iframe src="https://pancakeswap.finance/swap" frameBorder="0"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
