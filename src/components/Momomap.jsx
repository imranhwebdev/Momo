import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import exploreImg from "../assets/img/explore_more.png";
import momomapImg from "../assets/img/momomap.png";

export default function MomoMap(){
    const title = "MOMO <span>MAP</span>";
    const desc = "Unveiling the Future of $Momo: Embark on this exciting journey with us as we navigate the ever-evolving crypto landscape. Explore the $Momo Coin Roadmap, and together, let's aim for the potential of 1,000X returns.";
    const services = [
        { 
            title: 'Phase 1', 
            items: [
                "Launch",
                "Security Audits",
                "Coinmarketcap & Coingekco Listings",
                "Making $Momo Trending on Social Media",
                "50,000+Holders",
            ]
        },
        { 
            title: 'Phase 2', 
            items: [
                "$Momo Ecosystem Development",
                "Market Expansion",
                "Community Governance",
                "100,000+Holder",
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
                <Row className="section_M_title align-items-end">
                    <Col lg={5} className='text-center'>
                        <h2 dangerouslySetInnerHTML={{ __html: title }} />
                    </Col>
                    <Col lg={7}>
                        <div className="section_right_txt_w_img d-sm-flex align-items-end mb-2 gap-3">
                            <p>{desc}</p>
                            <img className='mt-3 mt-sm-0 d-none d-md-block' src={exploreImg} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="momo_map_timeline">
                            <ul className='momo_map_t_number'>
                                <li><span>1</span></li>
                                <li><span>2</span></li>
                                <li><span>3</span></li>
                                <li><span>4</span></li>
                            </ul>
                        </div>
                        <div className="momo__map__services">
                            {services.map((service, index) => (
                                <div className="single_service_item" key={index}>
                                    <h3>{service.title}</h3>
                                    <ul>
                                        {service.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                    <figure className='star_shap'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="88" viewBox="0 0 72 88" fill="none">
                                            <path opacity="0.2" d="M88.6814 42.2561L113.364 27.1418L102.765 54.0737L100.925 58.75L105.895 59.4944L134.518 63.7816L109.087 77.5999L104.672 79.9992L108 83.7641L127.171 105.447L98.8078 99.6858L93.883 98.6855L94.0129 103.709L94.7612 132.642L76.7368 109.997L73.6072 106.065L70.4776 109.997L52.4532 132.642L53.2015 103.709L53.3314 98.6855L48.4066 99.6858L20.0434 105.447L39.2142 83.7641L42.5428 79.9992L38.1273 77.5999L12.6967 63.7816L41.3198 59.4944L46.2897 58.75L44.4494 54.0737L33.8507 27.1418L58.533 42.2561L62.8186 44.8805L64.4148 40.1153L73.6072 12.6716L82.7996 40.1153L84.3957 44.8805L88.6814 42.2561Z" fill="#FF7051" stroke="#2FB5A8" strokeWidth="8"/>
                                        </svg>
                                    </figure>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
