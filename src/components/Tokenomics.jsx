import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { Col, Container, Row } from "react-bootstrap";
import tokenomics_top_shap from '../assets/img/tokenomics_shap.png';
const Tokenomics = () => {
    const [Area, setArea] = useState({
        series: [25, 20, 25, 20, 10],
        options: {
            colors: ['#FF90E8', '#FF90E8', '#23A094', '#F1F333', '#FFC900'],
            labels: ['Early Investor - ', 'Liquidity - ', 'Marketing - ', 'Airdrop - ', 'Team\'s tokens - '],
            fill: {
              opacity: 1
            },
            states: {
              active: {
                filter: {
                  type: 'none'
                }
              },
              hover: {
                filter: {
                  type: 'none'
                }
              }
            },
            stroke: {
              show: false
            },
            plotOptions: {
              pie: {
                expandOnClick: false,
                donut:{
                    labels:{
                        show:true,
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'TOTAL',
                            fontSize: '16px',
                            fontFamily: 'Urbanist", sans-serif',
                            fontWeight: 'bold',
                            color: '#ADA9B2',                            
                            formatter: function (w) {
                                let valPercent = w.config.series.reduce((a, b) => a + b);
                                return Math.round(valPercent) + "%"
                            }
                          }
                    }
                }
              }
            },
            legend: {
              show: false,
              position: 'bottom',
              formatter: function (val, opts) {
                return opts.w.config.series[opts.seriesIndex] + '%'
              },
              labels: {
                colors: "#9EACC9"
              },
              onItemHover: {
                highlightDataSeries: false
              },
            },
            dataLabels: {
              enabled: false
            },
            tooltip: {
              y: {
                formatter: function(value) {
                  return value + '%';
                }
              }
            }
          },
    });
    return(
        <div className="tokenomics">
          <figure className='tokenomics_top_shap'>
            <img src={tokenomics_top_shap} alt="" />
          </figure>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10} md={12}>
                        <div className="section-title text-center">
                            <h2 className='mb-0'>Tokenomics</h2>
                        </div>
                        <Row className='align-items-center'>
                            <Col md={12}>
                                <div className="tokencharts-list">
                                    <ul className='text-center'>
                                        {
                                            Area.series.map((el, i) => {
                                                return(
                                                    <li key={i} className="d-inline-block">
                                                        <div className="d-flex align-items-center">
                                                            <div className="dot" style={{backgroundColor: Area.options.colors[i]}}></div>
                                                            <div className="content">{Area.options.labels[i]}</div>
                                                            <div><strong className="fw-bold">{el + '%'}</strong></div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </Col>
                            <Col md={12}>
                              <div className="chart__area">
                                <ReactApexChart options={Area.options} series={Area.series} type="donut" />
                              </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Tokenomics;