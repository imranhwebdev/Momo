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
    const [textToCopy, setTextToCopy] = useState('0xfaab404d00c4c4dacce9475baec16c945292cd36');
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
    const desc = "Welcome to the Nono family, where fun meets finance! Nono is not just a meme; it's a movement, a community-driven token that brings people together in the world of decentralized finance. Buckle up and get ready for a thrilling ride to the moon with Nono!";
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
            link: 'https://solscan.io/token/0xfaab404d00c4c4dacce9475baec16c945292cd36'
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
                <svg width="1111" height="1189" viewBox="0 0 1111 1189" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M718.882 1181.39L611.699 573.968L820.753 1153.92L718.882 1181.39ZM558.959 1188.61L718.882 1181.39L611.699 573.984L558.959 1188.61ZM504.503 1181.39L611.683 573.968L402.629 1153.94L504.503 1181.39ZM402.629 1153.94L611.699 573.968L260.566 1079.74L402.629 1153.94ZM216.98 1046.11L611.683 573.984L142.411 971.067L216.98 1046.11ZM142.411 971.067L611.699 573.968L56.2444 835.345L142.411 971.067ZM35.2314 784.289L611.683 573.968L0.764648 627.029L35.2314 784.289ZM0.764648 627.029L611.683 573.984L0.764648 520.923V627.029ZM7.94232 466.134L611.699 573.968L52.4393 309.838L7.94232 466.134ZM56.2444 312.603L611.683 573.984L108.985 220.714L56.2444 312.603ZM142.411 176.863L611.683 573.968L216.98 101.841L142.411 176.863ZM216.98 101.841L611.699 573.984L351.9 15.1506L216.98 101.841ZM402.629 -5.99017L611.683 573.968L504.503 -33.4452L402.629 -5.99017ZM504.503 -33.4452L611.683 573.968L664.423 -40.6665L504.503 -33.4452ZM718.882 -33.4626L611.699 573.968L820.737 -5.99017L718.882 -33.4626ZM820.737 -5.99017L611.683 573.968L962.818 68.2116L820.737 -5.99017ZM1006.39 101.841L611.683 573.968L1080.95 176.863L1006.39 101.841ZM1080.95 176.863L611.683 573.968L1167.12 312.585L1080.95 176.863ZM1188.15 363.641L611.683 573.968L1215.44 466.134L1188.15 363.641ZM1215.44 466.134L611.699 573.968L1222.62 627.008L1215.44 466.134ZM1215.44 681.815L611.683 573.984L1188.14 784.31L1215.44 681.815ZM1188.14 784.31L611.683 573.968L1114.4 927.237L1188.14 784.31ZM1080.97 971.067L611.683 573.968L1006.39 1046.09L1080.97 971.067ZM1006.39 1046.09L611.683 573.968L871.487 1132.78L1006.39 1046.09Z" fill="url(#paint0_radial_166_16)" fill-opacity="0.67" />
                    <defs>
                        <radialGradient id="paint0_radial_166_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(612.803 572.853) rotate(2.88448) scale(610.593 614.308)">
                            <stop stopColor="white" />
                            <stop offset="0.326658" stopColor="#9292FF" />
                            <stop offset="0.734375" stopColor="#ADADFF" stop-opacity="0.08" />
                            <stop offset="1" stopColor="#5353FF" stop-opacity="0" />
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
