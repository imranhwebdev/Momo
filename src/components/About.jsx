import {React, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutTxtImg from '../assets/img/About-Momo.png';
import aboutimg from '../assets/img/about_img.png';

export default function About(){
    const AboutTxt = "<strong> More Than Just a Meme – </strong> At Momo, we believe in the transformative power of memes to bring delight and exhilaration to the world of crypto. Our mission is to build a token that transcends mere hype, fostering a vibrant community centered around values like transparency, inclusivity, and good-natured fun. Join us in shaping the future of finance with a touch of humor and a whole lot of heart."
    return(
        <div className="about_us" id='about'>
            <Container>
                <Row>
                    <Col lg={12} className='text-center'>
                        <figure className='img_txt'>
                            <img src={aboutTxtImg} alt="aboutTxtImg" />
                        </figure>
                        <figure className='about_img'>
                            <img src={aboutimg} alt="" />
                        </figure>
                        <div className="about_content_box">
                            <figure className='about_content_shap'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1223 372" fill="none">
                                <path opacity="0.3" d="M718.796 607.52L611.613 0.0953979L820.667 580.047L718.796 607.52ZM558.873 614.741L718.796 607.52L611.613 0.110901L558.873 614.741ZM504.417 607.52L611.597 0.0953979L402.543 580.068L504.417 607.52ZM402.543 580.068L611.613 0.0953979L260.48 505.867L402.543 580.068ZM216.894 472.237L611.597 0.110901L142.325 397.194L216.894 472.237ZM142.325 397.194L611.613 0.0953979L56.1585 261.472L142.325 397.194ZM35.1455 210.416L611.597 0.0953979L0.678711 53.1559L35.1455 210.416ZM0.678711 53.1559L611.597 0.110901L0.678711 -52.9496V53.1559ZM7.85638 -107.739L611.613 0.0953979L52.3533 -264.035L7.85638 -107.739ZM56.1585 -261.27L611.597 0.110901L108.899 -353.159L56.1585 -261.27ZM142.325 -397.01L611.597 0.0953979L216.894 -472.032L142.325 -397.01ZM216.894 -472.032L611.613 0.110901L351.814 -558.722L216.894 -472.032ZM402.543 -579.863L611.597 0.0953979L504.417 -607.318L402.543 -579.863ZM504.417 -607.318L611.597 0.0953979L664.337 -614.54L504.417 -607.318ZM718.796 -607.336L611.613 0.0953979L820.651 -579.863L718.796 -607.336ZM820.651 -579.863L611.597 0.0953979L962.732 -505.661L820.651 -579.863ZM1006.3 -472.032L611.597 0.0953979L1080.87 -397.01L1006.3 -472.032ZM1080.87 -397.01L611.597 0.0953979L1167.04 -261.288L1080.87 -397.01ZM1188.07 -210.232L611.597 0.0953979L1215.36 -107.739L1188.07 -210.232ZM1215.36 -107.739L611.613 0.0953979L1222.54 53.1353L1215.36 -107.739ZM1215.36 107.941L611.597 0.110901L1188.05 210.437L1215.36 107.941ZM1188.05 210.437L611.597 0.0953979L1114.31 353.364L1188.05 210.437ZM1080.88 397.194L611.597 0.0953979L1006.3 472.217L1080.88 397.194ZM1006.3 472.217L611.597 0.0953979L871.401 558.906L1006.3 472.217Z" fill="url(#paint0_radial_1_511)" fill-opacity="0.4"/>
                                <defs>
                                    <radialGradient id="paint0_radial_1_511" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(612.717 -1.02029) rotate(0.0991948) scale(647.254 651.192)">
                                    <stop stop-color="#B6961F"/>
                                    <stop offset="0.46875" stop-color="#DCB31D"/>
                                    <stop offset="0.734375" stop-color="#CAA314"/>
                                    <stop offset="1" stop-color="#FFC900" stop-opacity="0"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                            </figure>
                       
                            <p dangerouslySetInnerHTML={{ __html: AboutTxt }} />
                        </div>
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}
