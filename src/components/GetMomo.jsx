import { React, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import socialIcon1 from '../assets/img/telegram.svg';
import socialIcon2 from '../assets/img/twitter.svg';
import socialIcon3 from '../assets/img/social-icon3.svg';
import socialIcon4 from '../assets/img/social-icon4.svg';
import socialIcon5 from '../assets/img/social-icon5.svg';
import getMomoTopShap from '../assets/img/get-momo-top-shap.png';

export default function GetMomo() {
    const Momo_btn = "GET NONO";
    const Momo_btn_link = "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=2J4sFeo4HXXqmkcpbUj5wHbb1s4dv4oxJVos8ktVYQS4&fixed=in";
    const buttonData = [
        {
            socialIcon: socialIcon1,
            link: 'https://t.me/momotoken2100'
        },
        {
            socialIcon: socialIcon2,
            link: 'https://twitter.com/TokenMomo'
        },
        {
            socialIcon: socialIcon3,
            link: 'https://solana.com/'
        },
        {
            socialIcon: socialIcon4,
            link: 'https://bscscan.com/'
        },
        {
            socialIcon: socialIcon5,
            link: 'https://www.geckoterminal.com/solana/pools/HY2VkFmtLsQKkSCiLNGv7y4EV9rretjWdu97QBMs2uFW'
        },
        // Add more buttons as needed
    ];
    return (
        <div className="get_momo" id='getmomo'>
            <figure className='get_momo_top_shap'>
                <img src={getMomoTopShap} alt="get nono top shap" />
            </figure>
            <Container>
            <Row className='justify-content-center text-center'>
                <Col lg={12}>
                    <div className="section__title">
                        <h2>Catch nono <span className="d-block">the unfogettable elephant token!</span></h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12} className='text-center'>
                    <a target='_blank' rel="noreferrer" href={Momo_btn_link} className='boxed_btn'>{Momo_btn}</a>
                    <div className="social__icons">
                        {buttonData.map((button, index) => (
                            <a target='_target' key={index} href={button.link} className="social_icons">
                                <img src={button.socialIcon} alt="" />
                            </a>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
        </div >
    )
}
