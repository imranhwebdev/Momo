import { React, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutTxtImg from '../assets/img/About-Momo.png';
import aboutimg from '../assets/img/about_img.png';

export default function About() {
    const AboutTxt = "<strong> More Than Just a Meme – </strong> At Nono, we believe in the transformative power of memes to bring delight and exhilaration to the world of crypto. Our mission is to build a token that transcends mere hype, fostering a vibrant community centered around values like transparency, inclusivity, and good-natured fun. Join us in shaping the future of finance with a touch of humor and a whole lot of heart."
    return (
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
                                <svg width="1222" height="372" viewBox="0 0 1222 372" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M718.188 607.994L611.005 0.569031L820.06 580.521L718.188 607.994ZM558.266 615.214L718.188 607.994L611.005 0.584534L558.266 615.214ZM503.81 607.994L610.989 0.569031L401.935 580.541L503.81 607.994ZM401.935 580.541L611.005 0.569031L259.873 506.34L401.935 580.541ZM216.287 472.711L610.989 0.584534L141.718 397.668L216.287 472.711ZM141.718 397.668L611.005 0.569031L55.5511 261.946L141.718 397.668ZM34.5381 210.89L610.989 0.569031L0.0712891 53.6295L34.5381 210.89ZM0.0712891 53.6295L610.989 0.584534L0.0712891 -52.476V53.6295ZM7.24896 -107.265L611.005 0.569031L51.7459 -263.561L7.24896 -107.265ZM55.5511 -260.797L610.989 0.584534L108.291 -352.685L55.5511 -260.797ZM141.718 -396.537L610.989 0.569031L216.287 -471.558L141.718 -396.537ZM216.287 -471.558L611.005 0.584534L351.206 -558.249L216.287 -471.558ZM401.935 -579.39L610.989 0.569031L503.81 -606.845L401.935 -579.39ZM503.81 -606.845L610.989 0.569031L663.729 -614.066L503.81 -606.845ZM718.188 -606.862L611.005 0.569031L820.044 -579.39L718.188 -606.862ZM820.044 -579.39L610.989 0.569031L962.125 -505.188L820.044 -579.39ZM1005.69 -471.558L610.989 0.569031L1080.26 -396.537L1005.69 -471.558ZM1080.26 -396.537L610.989 0.569031L1166.43 -260.814L1080.26 -396.537ZM1187.46 -209.759L610.989 0.569031L1214.75 -107.265L1187.46 -209.759ZM1214.75 -107.265L611.005 0.569031L1221.93 53.6089L1214.75 -107.265ZM1214.75 108.415L610.989 0.584534L1187.44 210.91L1214.75 108.415ZM1187.44 210.91L610.989 0.569031L1113.71 353.837L1187.44 210.91ZM1080.28 397.668L610.989 0.569031L1005.69 472.69L1080.28 397.668ZM1005.69 472.69L610.989 0.569031L870.793 559.38L1005.69 472.69Z" fill="url(#paint0_radial_166_493)" fill-opacity="0.67" />
                                    <defs>
                                        <radialGradient id="paint0_radial_166_493" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(612.109 -0.546638) rotate(2.88448) scale(610.593 614.308)">
                                            <stop stopColor="#4689B4" />
                                            <stop offset="0.326658" stopColor="#2883BB" />
                                            <stop offset="0.734375" stopColor="#5E92B3" stopOpacity="0.11" />
                                            <stop offset="1" stopColor="#66BCF2" stopOpacity="0" />
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
