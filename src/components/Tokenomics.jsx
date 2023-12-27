import {React, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import aboutTxtImg from '../assets/img/About-Momo.png';
import aboutimg from '../assets/img/about_img.png';

export default function Tokenomics(){
    return(
        <div className="tokenomics" id='tokenomics'>
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
