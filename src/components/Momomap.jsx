import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import exploreImg from "../assets/img/explore_more.png";
import momomapImg from "../assets/img/momomap.png";
import checkImg from "../assets/img/check.svg";

export default function MomoMap() {
    const title = "NONO <span>MAP</span>";
    const desc = "Unveiling the Future of $Nono: Embark on this exciting journey with us as we navigate the ever-evolving crypto landscape. Explore the $Nono Coin Roadmap, and together, let's aim for the potential of 1,000X returns.";
    const services = [
        {
            title: 'Phase 1',
            items: [
                "Launch",
                "Security Audits",
                "Coinmarketcap & Coingekco Listings",
                "Making $Nono Trending on Social Media",
                "20,000+Holders",
            ],
            icon: `<svg width="72" height="89" viewBox="0 0 72 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M88.6814 42.7298L113.364 27.6154L102.765 54.5473L100.925 59.2236L105.895 59.968L134.518 64.2552L109.087 78.0735L104.672 80.4728L108 84.2377L127.171 105.92L98.8078 100.159L93.883 99.1591L94.0129 104.183L94.7612 133.115L76.7368 110.471L73.6072 106.539L70.4776 110.471L52.4532 133.115L53.2015 104.183L53.3314 99.1591L48.4066 100.159L20.0434 105.92L39.2142 84.2377L42.5428 80.4728L38.1273 78.0735L12.6967 64.2552L41.3198 59.968L46.2897 59.2236L44.4494 54.5473L33.8507 27.6154L58.533 42.7298L62.8186 45.3541L64.4148 40.589L73.6072 13.1453L82.7996 40.589L84.3957 45.3541L88.6814 42.7298Z" fill="#FF7051" stroke="#05F2DB" stroke-width="8"/>
            </svg>
            `
        },
        {
            title: 'Phase 2',
            items: [
                "$Nono Ecosystem Development",
                "Market Expansion",
                "Community Governance",
                "50,000+Holder",
            ],
            icon: `<svg width="72" height="89" viewBox="0 0 72 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M88.6814 42.7298L113.364 27.6154L102.765 54.5473L100.925 59.2236L105.895 59.968L134.518 64.2552L109.087 78.0735L104.672 80.4728L108 84.2377L127.171 105.92L98.8078 100.159L93.883 99.1591L94.0129 104.183L94.7612 133.115L76.7368 110.471L73.6072 106.539L70.4776 110.471L52.4532 133.115L53.2015 104.183L53.3314 99.1591L48.4066 100.159L20.0434 105.92L39.2142 84.2377L42.5428 80.4728L38.1273 78.0735L12.6967 64.2552L41.3198 59.968L46.2897 59.2236L44.4494 54.5473L33.8507 27.6154L58.533 42.7298L62.8186 45.3541L64.4148 40.589L73.6072 13.1453L82.7996 40.589L84.3957 45.3541L88.6814 42.7298Z" fill="#50FF96" stroke="#05F2DB" stroke-width="8"/>
            </svg>
            `
        },
        {
            title: 'Phase 3',
            items: [
                "Nono MPC Wallet Launch",
                "Propelling $Nono to Go Viral on Social",
                "T2 exchange Listings",
                "200,000+Holders",
            ],
            icon: `<svg width="72" height="89" viewBox="0 0 72 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M88.6814 42.7298L113.364 27.6154L102.765 54.5473L100.925 59.2236L105.895 59.968L134.518 64.2552L109.087 78.0735L104.672 80.4728L108 84.2377L127.171 105.92L98.8078 100.159L93.883 99.1591L94.0129 104.183L94.7612 133.115L76.7368 110.471L73.6072 106.539L70.4776 110.471L52.4532 133.115L53.2015 104.183L53.3314 99.1591L48.4066 100.159L20.0434 105.92L39.2142 84.2377L42.5428 80.4728L38.1273 78.0735L12.6967 64.2552L41.3198 59.968L46.2897 59.2236L44.4494 54.5473L33.8507 27.6154L58.533 42.7298L62.8186 45.3541L64.4148 40.589L73.6072 13.1453L82.7996 40.589L84.3957 45.3541L88.6814 42.7298Z" fill="#FF7051" stroke="#6B6C42" stroke-width="8"/>
            </svg>
            `
        },
        {
            title: 'Phase 4',
            items: [
                "Nonochain Launch",
                "Becoming a Market Hotspot",
                "T1 exchange Listings",
                "500,000+Holders",
            ],
            icon: `<svg width="72" height="89" viewBox="0 0 72 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M88.6814 42.7298L113.364 27.6154L102.765 54.5473L100.925 59.2236L105.895 59.968L134.518 64.2552L109.087 78.0735L104.672 80.4728L108 84.2377L127.171 105.92L98.8078 100.159L93.883 99.1591L94.0129 104.183L94.7612 133.115L76.7368 110.471L73.6072 106.539L70.4776 110.471L52.4532 133.115L53.2015 104.183L53.3314 99.1591L48.4066 100.159L20.0434 105.92L39.2142 84.2377L42.5428 80.4728L38.1273 78.0735L12.6967 64.2552L41.3198 59.968L46.2897 59.2236L44.4494 54.5473L33.8507 27.6154L58.533 42.7298L62.8186 45.3541L64.4148 40.589L73.6072 13.1453L82.7996 40.589L84.3957 45.3541L88.6814 42.7298Z" fill="#FAFBFB" stroke="#DB79C7" stroke-width="8"/>
            </svg>
            `
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
                                <li><span><img src={checkImg} alt="" /></span></li>
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
                                    <figure className='star_shap' dangerouslySetInnerHTML={{__html:service.icon}}></figure>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
