import {React, useState} from 'react';
import ReactApexChart from "react-apexcharts";
import { Col, Container, Row } from "react-bootstrap";
import tokenomics_top_shap from '../assets/img/tokenomics_shap.png';
import tokenomics_donut_m_img from '../assets/img/donut_middle_img.png';
import tokenomics_donut_star from '../assets/img/donut_star.png';
import copyTxt from '../assets/img/copy.png';
const Tokenomics = () => {
    const donutCommentTxt = "LP tokens are burnt, and contract ownership is renounced. The team's tokens will locked until January 1, 2028";
    const [Area, setArea] = useState({
        series: [25, 20, 25, 20, 10],
        options: {
            colors: ['#FF90E8', '#FF7051', '#23A094', '#F1F333', '#FFC900'],
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
                customScale: 1,
                donut:{
                  size: '45%',
                    labels:{
                        show:true,
                        total: {
                            show: false,
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

     // Calculate total percentage
    //  const totalPercentage = Area.series.reduce((a, b) => a + b);
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
    return(
        <div className="tokenomics" id='tokenomics'>
          <figure className='tokenomics_top_shap'>
            <img src={tokenomics_top_shap} alt="" />
          </figure>
            <Container>
                <Row className="justify-content-center">
                    <Col>
                        <div className="section-title text-center">
                            <h2 className='mb-0'>Tokenomics</h2>
                        </div>
                        <Row className='align-items-center'>
                            <Col md={12}>
                              <div className="total_count text-center">
                                 {/* {Math.round(totalPercentage) + "%"} */}
                                 <span>Token total supply</span>
                                 <h4>2,099,991,041,457.75</h4>
                              </div>
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
                                <figure className='donut_m_img'>
                                  <img src={tokenomics_donut_m_img} alt="donut middle img" />
                                </figure>
                                <ReactApexChart options={Area.options} series={Area.series} type="donut" />
                              </div>
                              <div className="donut_bottom_area d-flex align-items-start">
                                  <div className="dbla">
                                    <img src={tokenomics_donut_star} alt="" />
                                    <p>{donutCommentTxt}</p>
                                  </div>
                                  <div className="tokenomics_copyTxt copytoclipboard">
                                    Contract: <input readOnly type="text"  value={textToCopy}
                                        onChange={(e) => setTextToCopy(e.target.value)}/>

                                      <button onClick={handleCopyToClipboard}> {isCopied && <span className='coppied'> 
                                        <span className='copyed'>Copyed</span> </span>} <img src={copyTxt}/>
                                      </button>
                                  </div>
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