import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import exploreImg from "../assets/img/explore_more.png";
import momomapImg from "../assets/img/momomap.png";

export default function MomoMap(){
    const title = "MOMO <span>Map</span>";
    const desc = "Unveiling the Future of $Momo: Embark on this exciting journey with us as we navigate the ever-evolving crypto landscape. Explore the $Momo Coin Roadmap, and together, let's aim for the potential of 1,000X returns.";
    const services = [
        { 
            title: 'Phase 1', 
            items: [
                "Launch",
                "Security Audits",
                "Coinmarketcap & Coingekco Listings",
                "Making $Momo Trending on Social Media",
                "20,000+Holders",
            ]
        },
        { 
            title: 'Phase 2', 
            items: [
                "$Momo Ecosystem Development",
                "Market Expansion",
                "Community Governance",
                "50,000+Holders",
            ]
        },
        { 
            title: 'Phase 3', 
            items: [
                "Momo MPC Wallet Launch",
                "Propelling $Momo to Go Viral on Social",
                "T2 exchange Listings",
                "200,000+Holders",
            ]
        },
        { 
            title: 'Phase 4', 
            items: [
                "Momochain Launch",
                "Becoming a Market Hotspot",
                "T1 exchange Listings",
                "500,000+Holders",
            ]
        },
      ];


    return (
        <div className="momomap_area" id='momomap'>
            <figure className='momomap_top_shap'>
                <img src={momomapImg} alt="get momo top shap" />
            </figure>
            <Container>
                <Row className="section_M_title">
                    <Col lg={5} className='text-center'>
                        <h2 dangerouslySetInnerHTML={{ __html: title }} />
                    </Col>
                    <Col lg={7}>
                        <div className="section_right_txt_w_img">
                            <p>{desc}</p>
                            <img src={exploreImg} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="momo__map__services">
                            {services.map((service, index) => (
                                <div className="single_service_item" key={index}>
                                    <h3>{service.title}</h3>
                                    <ul>
                                        {service.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
