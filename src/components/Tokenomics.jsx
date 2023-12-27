import {React, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import aboutTxtImg from '../assets/img/About-Momo.png';
import aboutimg from '../assets/img/about_img.png';
import tokenomics_shap from "../assets/img/tokenomics_shap.png";

export default function Tokenomics(){
    return(
        <div className="tokenomics" id='tokenomics'>
            <figure className='tokenomics_top_shap'>
                <img src={tokenomics_shap} alt="get momo top shap" />
            </figure>
            <Container>
                <SectionTitle title={'TOKENOMICS'}/>
                <Row>
                    <Col lg={12}>
                       
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}
