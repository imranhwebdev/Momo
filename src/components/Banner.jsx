import { React, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../assets/img/hero-img.png';
import socialIcon1 from '../assets/img/telegram.svg';
import socialIcon2 from '../assets/img/twitter.svg';
import socialIcon3 from '../assets/img/social-icon3.svg';
import socialIcon4 from '../assets/img/social-icon4.svg';
import socialIcon5 from '../assets/img/social-icon5.svg';
import star2 from '../assets/img/Star-2.png';
import copyTxt from '../assets/img/copy.png';
import banner_bottom_shap from '../assets/img/hero-sec-bottom-shap.png';

export default function Banner() {
    const [textToCopy, setTextToCopy] = useState('2J4sFeo4HXXqmkcpbUj5wHbb1s4dv4oxJVos8ktVYQS4');
    const [isCopied, setIsCopied] = useState(false);
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setIsCopied(true);
            })
            .catch(err => {
                console.error('Failed to copy to clipboard: ', err);
            });
    };


    const subtitle = "1,000X";
    const title = "$ NoNo";
    const desc = "Welcome to the Momo family, where fun meets finance! Momo is not just a meme; it's a movement, a community-driven token that brings people together in the world of decentralized finance. Buckle up and get ready for a thrilling ride to the moon with Momo!";
    const buttonData = [
        {
            socialIcon: socialIcon2,
            link: 'https://twitter.com/TokenMomo'
        }, {
            socialIcon: socialIcon1,
            link: 'https://t.me/momotoken2100'
        },
        {
            socialIcon: socialIcon3,
            link: 'https://solana.com/'
        },
        {
            socialIcon: socialIcon4,
            link: 'https://solscan.io/token/2J4sFeo4HXXqmkcpbUj5wHbb1s4dv4oxJVos8ktVYQS4'
        },
        {
            socialIcon: socialIcon5,
            link: 'https://www.geckoterminal.com/solana/pools/HY2VkFmtLsQKkSCiLNGv7y4EV9rretjWdu97QBMs2uFW'
        },
        // Add more buttons as needed
    ];
    return (
        <div className="banner" id='home'>
            <figure className='banner__shap d-none d-md-block'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1111" height="1189" viewBox="0 0 1111 1189" fill="none">
                    <path opacity="0.3" d="M718.882 1180.92L611.699 573.495L820.753 1153.45L718.882 1180.92ZM558.959 1188.14L718.882 1180.92L611.699 573.51L558.959 1188.14ZM504.503 1180.92L611.683 573.495L402.629 1153.47L504.503 1180.92ZM402.629 1153.47L611.699 573.495L260.566 1079.27L402.629 1153.47ZM216.98 1045.64L611.683 573.51L142.411 970.594L216.98 1045.64ZM142.411 970.594L611.699 573.495L56.2444 834.872L142.411 970.594ZM35.2314 783.815L611.683 573.495L0.764648 626.555L35.2314 783.815ZM0.764648 626.555L611.683 573.51L0.764648 520.45V626.555ZM7.94232 465.661L611.699 573.495L52.4393 309.365L7.94232 465.661ZM56.2444 312.129L611.683 573.51L108.985 220.24L56.2444 312.129ZM142.411 176.389L611.683 573.495L216.98 101.368L142.411 176.389ZM216.98 101.368L611.699 573.51L351.9 14.6769L216.98 101.368ZM402.629 -6.4638L611.683 573.495L504.503 -33.9188L402.629 -6.4638ZM504.503 -33.9188L611.683 573.495L664.423 -41.1401L504.503 -33.9188ZM718.882 -33.9362L611.699 573.495L820.737 -6.4638L718.882 -33.9362ZM820.737 -6.4638L611.683 573.495L962.818 67.7379L820.737 -6.4638ZM1006.39 101.368L611.683 573.495L1080.95 176.389L1006.39 101.368ZM1080.95 176.389L611.683 573.495L1167.12 312.112L1080.95 176.389ZM1188.15 363.167L611.683 573.495L1215.44 465.661L1188.15 363.167ZM1215.44 465.661L611.699 573.495L1222.62 626.535L1215.44 465.661ZM1215.44 681.341L611.683 573.51L1188.14 783.836L1215.44 681.341ZM1188.14 783.836L611.683 573.495L1114.4 926.763L1188.14 783.836ZM1080.97 970.594L611.683 573.495L1006.39 1045.62L1080.97 970.594ZM1006.39 1045.62L611.683 573.495L871.487 1132.31L1006.39 1045.62Z" fill="url(#paint0_radial_1_14)" fillOpacity="0.3" />
                    <defs>
                        <radialGradient id="paint0_radial_1_14" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(612.803 572.379) rotate(2.88448) scale(610.593 614.308)">
                            <stop stopColor="#B45DA2" />
                            <stop offset="0.46875" stopColor="#BB209B" />
                            <stop offset="0.734375" stopColor="#CF6FBB" />
                            <stop offset="1" stopColor="#FF90E8" />
                        </radialGradient>
                    </defs>
                </svg>
            </figure>
            <figure className='banner_bottom_shap'>
                <img src={banner_bottom_shap} alt="" />
            </figure>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="banner-content">
                            <h1 className="text-white">{title} <span className='sub_title'>{subtitle}</span></h1>
                            <p className='text-white'>{desc}</p>
                            <div className="social__icons">
                                {buttonData.map((button, index) => (
                                    <a target='_target' key={index} href={button.link} className="social_icons">
                                        <img src={button.socialIcon} alt="" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <figure className='text-center text-lg-end px-5 px-md-0 hero_right_img'>
                            <img src={bannerImg} alt="" />
                        </figure>
                        <div className="contract__box">
                            <figure className='star2'>
                                <img src={star2} alt="" />
                            </figure>
                            <div className="copytoclipboard">
                                <span>Contract:</span> <input readOnly type="text" value={textToCopy}
                                    onChange={(e) => setTextToCopy(e.target.value)} />
                                <button onClick={handleCopyToClipboard}> {isCopied && <span className='coppied'> <span className='copyed'>Copyed</span> </span>} <img src={copyTxt} /></button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
