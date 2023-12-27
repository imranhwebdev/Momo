import {React, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import socialIcon1 from '../assets/img/telegram.svg';
import socialIcon2 from '../assets/img/twitter.svg';
import socialIcon3 from '../assets/img/social-icon3.svg';
import socialIcon4 from '../assets/img/social-icon4.svg';
import socialIcon5 from '../assets/img/social-icon5.svg';
import getMomoTopShap from '../assets/img/get-momo-top-shap.png';

export default function GetMomo(){
    const Momo_btn = "GET MOMO";
    const Momo_btn_link = "https://google.com";
    const buttonData = [
        { 
            socialIcon: socialIcon1, 
            link: '#' 
        },
        { 
            socialIcon: socialIcon2, 
            link: '#' 
        },
        { 
            socialIcon: socialIcon3, 
            link: '#' 
        },
        { 
            socialIcon: socialIcon4, 
            link: '#' 
        },
        { 
            socialIcon: socialIcon5, 
            link: '#' 
        },
        // Add more buttons as needed
      ];
    return(
        <div className="get_momo" id='getmomo'>
            <figure className='get_momo_top_shap'>
                <img src={getMomoTopShap} alt="get momo top shap" />
            </figure>
            <Container>
                <SectionTitle title={'Missed $PEPE Get MOMO'} />
                <Row>
                    <Col lg={12} className='text-center'>
                       <a href={Momo_btn_link} className='boxed_btn'>{Momo_btn}</a>
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
        </div>
    )
}
