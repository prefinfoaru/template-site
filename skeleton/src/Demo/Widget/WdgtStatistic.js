import React from 'react';
import {Row, Col, Card, Carousel, ProgressBar, Dropdown} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

class WdgtStatistic extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col sm={12}>
                        <Carousel controls={false}>
                            <Carousel.Item>
                                <Row className='no-gutters'>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-ethereum text-c-red f-22 m-r-5"/>Ethereum(ETH)</span>
                                                <h6 className="badge badge-light-danger float-right d-inline-block m-0">+1.5278</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-bitcoin text-c-yellow f-22 m-r-5"/>Bitcoin(BTC)</span>
                                                <h6 className="badge badge-light-warning float-right d-inline-block m-0">-0.997896</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-cloudsmith text-c-blue f-22 m-r-5"/>Ripple(RPL)</span>
                                                <h6 className="badge badge-light-primary float-rightd-inline-block m-0">-7.66789</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-asymmetrik text-c-yellow f-22 m-r-5"/>Neo(NEO)</span>
                                                <h6 className="badge badge-light-warning float-right d-inline-block m-0">+5.78789</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className='no-gutters'>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-ethereum text-c-red f-22 m-r-5"/>Ethereum(ETH)</span>
                                                <h6 className="badge badge-light-danger float-right d-inline-block m-0">-7.6648</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-bitcoin text-c-yellow f-22 m-r-5"/>Bitcoin(BTC)</span>
                                                <h6 className="badge badge-light-warning float-right d-inline-block m-0">+5.1024</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-cloudsmith text-c-blue f-22 m-r-5"/>Ripple(RPL)</span>
                                                <h6 className="badge badge-light-primary float-right d-inline-block m-0">+4.5896</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-asymmetrik text-c-yellow f-22 m-r-5"/>Neo(NEO)</span>
                                                <h6 className="badge badge-light-warning float-right d-inline-block m-0">+1.4563</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className='flat-card'>
                            <Card.Body className='p-0'>
                                <div className="row-table">
                                    <div className="col-sm-6 card-body br">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="icon feather icon-eye text-c-green mb-1 d-block"/>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>10k</h5>
                                                <span>Visitors</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 card-body">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="icon feather icon-music text-c-red mb-1 d-block"/>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>100%</h5>
                                                <span>Volume</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row-table">
                                    <div className="col-sm-6 card-body br">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="icon feather icon-file-text text-c-blue mb-1 d-block"/>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>2000 +</h5>
                                                <span>Files</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 card-body">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="icon feather icon-mail text-c-yellow mb-1 d-block"/>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>120</h5>
                                                <span>Mails</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className='flat-card'>
                            <Card.Body className='p-0'>
                                <div className="row-table">
                                    <div className="col-sm-6 card-body br">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="icon feather icon-share-2 text-c-purple mb-1 d-block"/>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>1000</h5>
                                                <span>Shares</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 card-body">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="icon feather icon-wifi text-c-purple mb-1 d-block"/>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>600</h5>
                                                <span>Network</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row-table">
                                    <div className="col-sm-6 card-body br">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="icon feather icon-rotate-ccw text-c-purple mb-1 d-block"/>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>3550</h5>
                                                <span>Returns</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 card-body">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="icon feather icon-shopping-cart text-c-purple mb-1 d-blockz"/>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>100%</h5>
                                                <span>Order</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className='flat-card widget-primary-card'>
                            <Card.Body className='p-0'>
                                <div className="row-table">
                                    <div className="col-sm-3 card-body">
                                        <i className="feather icon-star-on"/>
                                    </div>
                                    <div className="col-sm-9">
                                        <h4>4000 +</h4>
                                        <h6>Ratings Received</h6>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className='flat-card widget-purple-card'>
                            <Card.Body className='p-0'>
                                <div className="row-table">
                                    <div className="col-sm-3 card-body">
                                        <i className="fas fa-trophy"/>
                                    </div>
                                    <div className="col-sm-9">
                                        <h4>17</h4>
                                        <h6>Achievements</h6>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Row className='no-gutters'>
                            <Col xl={2} md={4}>
                                <Card>
                                    <Card.Body>
                                        <span>REALTY</span>
                                        <h6 className="float-right text-c-red d-inline-block m-0">-0.99</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card>
                                    <Card.Body>
                                        <span>TELCOM</span>
                                        <h6 className="float-right text-c-green d-inline-block m-0">+1.52</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card>
                                    <Card.Body>
                                        <span>CPSE</span>
                                        <h6 className="float-right text-c-green d-inline-block m-0">+5.78</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card>
                                    <Card.Body>
                                        <span>INFRA</span>
                                        <h6 className="float-right text-c-red d-inline-block m-0">-7.66</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card>
                                    <Card.Body>
                                        <span>TECK</span>
                                        <h6 className="float-right text-c-green d-inline-block m-0">+4.56</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card>
                                    <Card.Body>
                                        <span>BASMTR</span>
                                        <h6 className="float-right text-c-green d-inline-block m-0">+0.78</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} className='stastic-slider-full-card'>
                        <Row className='no-gutters'>
                            <Col xl={3} md={6}>
                                <Card className='rounded-0'>
                                    <Card.Body className='d-flex justify-content-between align-items-center'>
                                        <span className="d-flex justify-content-center align-items-center"><i className="fab fa-bitcoin text-c-yellow f-22 m-r-5"/>Bitcoin(BTC)</span>
                                        <h6 className="badge badge-light-warning float-right d-inline-block m-0">-0.997896</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className='rounded-0'>
                                    <Card.Body className='d-flex justify-content-between align-items-center'>
                                        <span className="d-flex justify-content-center align-items-center"><i className="fab fa-ethereum text-c-red f-22 m-r-5"/>Ethereum(ETH)</span>
                                        <h6 className="badge badge-light-danger float-right d-inline-block m-0">+1.1456</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className='rounded-0'>
                                    <Card.Body className='d-flex justify-content-between align-items-center'>
                                        <span className="d-flex justify-content-center align-items-center"><i className="fab fa-asymmetrik text-c-yellow f-22 m-r-5"/>Neo(NEO)</span>
                                        <h6 className="badge badge-light-warning  float-right d-inline-block m-0">+5.78787</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className='rounded-0'>
                                    <Card.Body className='d-flex justify-content-between align-items-center'>
                                        <span className="d-flex justify-content-center align-items-center"><i className="fab fa-cloudsmith text-c-green f-22 m-r-5"/>Ripple(RPL)</span>
                                        <h6 className="badge badge-light-success float-rightd-inline-block m-0">-7.99999</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h6>Devices</h6>
                                    </Col>
                                    <Col className='text-right'>
                                        <h2 className="mb-0">1042</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h3 className="m-0"><i className="fas fa-circle text-success f-10 m-r-5"/>66%</h3>
                                        <span className="ml-3">Desktop</span>
                                    </Col>
                                    <Col>
                                        <h3 className="m-0"><i className="fas fa-circle text-primary f-10 m-r-5"/>26%</h3>
                                        <span className="ml-3">Tablet</span>
                                    </Col>
                                    <Col>
                                        <h3 className="m-0"><i className="fas fa-circle text-danger f-10 m-r-5"/>8%</h3>
                                        <span className="ml-3">Mobile</span>
                                    </Col>
                                </Row>
                                <ProgressBar className='progressbar-stack mt-4'>
                                    <ProgressBar variant="success" now={65} key={1} style={{height: '8px'}} />
                                    <ProgressBar variant="primary" now={25} key={2} style={{height: '8px'}} />
                                    <ProgressBar variant="danger" now={10} key={3} style={{height: '8px'}} />
                                </ProgressBar>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <h6 className="mb-1">New York , NY</h6>
                                <span className="d-block mb-2">Monday 2:00 PM</span>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <h2 className="text-c-purple m-0"><i className="feather icon-cloud-snow text-muted mr-2"/>23<sup className="f-20">°</sup></h2>
                                    </div>
                                    <div className="col text-right">
                                        <div className="form-group mb-1">
                                            <label className="m-r-5 f-20 mb-0">°C</label>
                                            <div className="switch switch-primary d-inline">
                                                <input type="checkbox" id="switch-a-1" defaultChecked={true}/>
                                                <label htmlFor="switch-a-1" className="cr"/>
                                            </div>
                                            <label className="m-l-5 f-20 mb-0">°F</label>
                                        </div>
                                        <span className="d-block mt-1">Partly Cloudy</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <Row className='align-items-start'>
                                    <Col>
                                        <h2 className="mb-0">954</h2>
                                    </Col>
                                    <Col className='text-right'>
                                        <h6 className="">Location</h6>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col sm={6}>
                                        <span className="d-block"><i className="fas fa-circle text-c-green f-10 m-r-10"/>India</span>
                                        <span className="d-block"><i className="fas fa-circle text-c-red f-10 m-r-10"/>France</span>
                                        <span className="d-block"><i className="fas fa-circle text-c-blue f-10 m-r-10"/>Other</span>
                                    </Col>
                                    <Col sm={6}>
                                        <span className="d-block"><i className="fas fa-circle text-c-yellow f-10 m-r-10"/>United states</span>
                                        <span className="d-block"><i className="fas fa-circle text-c-purple f-10 m-r-10"/>United Kingdom</span>
                                    </Col>
                                </Row>

                                <ProgressBar className='mt-3'>
                                    <ProgressBar variant="success" now={35} key={1} label='65%' />
                                    <ProgressBar variant="danger" now={15} key={2} label='25%' />
                                    <ProgressBar variant="primary" now={10} key={3} label='10%' />
                                    <ProgressBar variant="warning" now={25} key={4} label='10%' />
                                    <ProgressBar variant="info" now={15} key={5} label='10%' />
                                </ProgressBar>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Overdue tasks</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h2 className="m-0"><i className="feather icon-arrow-up text-c-green"/>4</h2>
                                    </Col>
                                    <Col className="text-right">
                                        <h5 className="text-c-green m-0">15%</h5>
                                        <span className="d-block">Last Month:6</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm='auto'>
                                        <span>Revenue</span>
                                    </Col>
                                    <Col className='text-right'>
                                        <Dropdown className='float-right'>
                                            <Dropdown.Toggle variant="link" id="dropdown-basic" className="btn waves-effect waves-light btn-sm btn-outline-secondary ">
                                                This Year
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>1 Week</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>2 Month</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>3 Year</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                                <div className="mt-4">
                                    <ProgressBar now={60} style={{height: '10px'}} label='60%'/>
                                </div>
                                <Row>
                                    <Col sm='auto'>
                                        <span className="text-uppercase mt-2 d-block">Earning</span>
                                        <h5 className="mb-0">$6.455</h5>
                                    </Col>
                                    <Col className="text-right">
                                        <span className="text-uppercase mt-2 d-block">Expense</span>
                                        <h5 className="mb-0">$3.869</h5>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col sm='auto'>
                                        <span className="text-uppercase d-block">budget</span>
                                    </Col>
                                    <Col className="text-right">
                                        <span className="text-uppercase d-block">Earning</span>
                                        <h5 className="mb-0">$5,569 of $1,000</h5>
                                    </Col>
                                </Row>
                                <div className="mt-2">
                                    <ProgressBar variant='success' now={40} style={{height: '10px'}} label='40%'/>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className='p-0'>
                                <Row className="d-flex align-items-center m-0">
                                    <Col className="text-center">
                                        <div style={{padding:'20px 25px'}}>
                                            <h2 className="text-c-purple mb-0">19<sup className="f-20">°</sup></h2>
                                            <span>Sunny</span>
                                        </div>
                                    </Col>
                                    <Col className="text-center bg-primary p-0">
                                        <div style={{padding:'20px 25px'}}>
                                            <i className="feather icon-sun f-36 text-white"/>
                                            <h6 className="mt-2 mb-0 text-white f-w-400">New York , NY</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Row className='no-gutters statstic-data-card'>
                            <Col xl={3} md={6}>
                                <Card className='m-b-0'>
                                    <Card.Body className='border-bottom p-0'>
                                        <Row className="text-center m-0">
                                            <Col className="border-right">
                                                <h6 className="my-3 text-c-red">0.56%</h6>
                                            </Col>
                                            <Col className="border-right">
                                                <h6 className="my-3 text-c-red">0.88</h6>
                                            </Col>
                                            <Col>
                                                <h6 className="my-3 text-muted">160.40</h6>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body className='level-up text-right'>
                                        <span className="float-left"><i className="feather icon-trending-up text-c-green f-16 mr-2"/>SPY</span>
                                        <h3 className="d-inline-block m-0">CPSE</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className='m-b-0'>
                                    <Card.Body className='border-bottom p-0'>
                                        <Row className="text-center m-0">
                                            <Col className="border-right">
                                                <h6 className="my-3 text-c-green">0.76%</h6>
                                            </Col>
                                            <Col className="border-right">
                                                <h6 className="my-3 text-c-green">0.45</h6>
                                            </Col>
                                            <Col>
                                                <h6 className="my-3 text-muted">110.40</h6>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body className='level-down text-right'>
                                        <span className="float-left"><i className="feather icon-trending-down text-c-red f-16 mr-2"/>SPY</span>
                                        <h3 className="d-inline-block m-0">BANKEX</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className='m-b-0'>
                                    <Card.Body className='border-bottom p-0'>
                                        <Row className="text-center m-0">
                                            <Col className="border-right">
                                                <h6 className="my-3 text-c-red">1.26%</h6>
                                            </Col>
                                            <Col className="border-right">
                                                <h6 className="my-3 text-c-green">1.57</h6>
                                            </Col>
                                            <Col>
                                                <h6 className="my-3 text-muted">150.65</h6>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body className='level-down text-right'>
                                        <span className="float-left"><i className="feather icon-trending-down text-c-red f-16 mr-2"/>SPY</span>
                                        <h3 className="d-inline-block m-0">UTILS</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className='m-b-0'>
                                    <Card.Body className='border-bottom p-0'>
                                        <Row className="text-center m-0">
                                            <Col className="border-right">
                                                <h6 className="my-3 text-c-green">0.73%</h6>
                                            </Col>
                                            <Col className="border-right">
                                                <h6 className="my-3 text-c-green">0.65</h6>
                                            </Col>
                                            <Col>
                                                <h6 className="my-3 text-muted">120.34</h6>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Carousel controls={false}>
                                    <Carousel.Item>
                                        <Card>
                                            <Card.Body className='text-right'>
                                                <span className="float-left"><i className="feather icon-trending-down text-c-red f-16 mr-2"/>SPY</span>
                                                <h3 className="d-inline-block m-0">UTILS</h3>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Card>
                                            <Card.Body className='text-right'>
                                                <span className="float-left"><i className="feather icon-trending-up text-c-green f-16 mr-2"/>DIA</span>
                                                <h3 className="d-inline-block m-0">METAL</h3>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Card>
                                            <Card.Body className='level-up text-right'>
                                                <span className="float-left"><i className="feather icon-trending-down text-c-green f-16 mr-2"/>QQQ</span>
                                                <h3 className="d-inline-block m-0">OILGAS</h3>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Card>
                                            <Card.Body className='text-right'>
                                                <span className="float-left"><i className="feather icon-trending-down text-c-red f-16 mr-2"/>IWM</span>
                                                <h3 className="d-inline-block m-0">CDGS</h3>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='social-widget-card'>
                            <Card.Body className='bg-facebook'>
                                <h3 className="text-white m-0">1165 +</h3>
                                <span className="m-t-10">Facebook Users</span>
                                <i className="fab fa-facebook"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='social-widget-card'>
                            <Card.Body className='bg-twitter'>
                                <h3 className="text-white m-0">780 +</h3>
                                <span className="m-t-10">Twitter Users</span>
                                <i className="fab fa-twitter"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='social-widget-card'>
                            <Card.Body className='bg-linkedin'>
                                <h3 className="text-white m-0">998 +</h3>
                                <span className="m-t-10">Linked In Users</span>
                                <i className="fab fa-linkedin-in"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='social-widget-card'>
                            <Card.Body className='bg-googleplus'>
                                <h3 className="text-white m-0">650 +</h3>
                                <span className="m-t-10">Google Plus Users</span>
                                <i className="fab fa-google-plus-g"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className='comp-card'>
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col>
                                        <h6 className="m-b-20">Impressions</h6>
                                        <h3 className="text-c-blue">1,563</h3>
                                        <p className="m-b-0">May 23 - June 01 (2018)</p>
                                    </Col>
                                    <Col sm="auto">
                                        <i className="fas fa-eye badge-light-primary"/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className='comp-card'>
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col>
                                        <h6 className="m-b-20">Goal</h6>
                                        <h3 className="text-c-green">30,564</h3>
                                        <p className="m-b-0">May 28 - June 01 (2018)</p>
                                    </Col>
                                    <Col sm="auto">
                                        <i className="fas fa-bullseye badge-light-success"/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className='comp-card'>
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col>
                                        <h6 className="m-b-20">Impact</h6>
                                        <h3 className="text-c-yellow">42.6%</h3>
                                        <p className="m-b-0">May 30 - June 01 (2018)</p>
                                    </Col>
                                    <Col sm="auto">
                                        <i className="fas fa-hand-paper badge-light-warning"/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className='prod-p-card bg-c-red'>
                            <Card.Body>
                                <Row className="align-items-center m-b-25">
                                    <Col>
                                        <h6 className="m-b-5 text-white">Total Profit</h6>
                                        <h3 className="m-b-0 text-white">$1,783</h3>
                                    </Col>
                                    <Col sm='auto'>
                                        <i className="fas fa-money-bill-alt text-white"/>
                                    </Col>
                                </Row>
                                <p className="m-b-0 text-white"><span className="label label-danger m-r-10">+11%</span>From Previous Month</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className='prod-p-card bg-c-blue'>
                            <Card.Body>
                                <Row className="align-items-center m-b-25">
                                    <Col>
                                        <h6 className="m-b-5 text-white">Total Orders</h6>
                                        <h3 className="m-b-0 text-white">15,830</h3>
                                    </Col>
                                    <Col sm='auto'>
                                        <i className="fas fa-database text-white"/>
                                    </Col>
                                </Row>
                                <p className="m-b-0 text-white"><span className="label label-primary m-r-10">+12%</span>From Previous Month</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className='prod-p-card bg-c-green'>
                            <Card.Body>
                                <Row className="align-items-center m-b-25">
                                    <Col>
                                        <h6 className="m-b-5 text-white">Average Price</h6>
                                        <h3 className="m-b-0 text-white">$6,780</h3>
                                    </Col>
                                    <Col sm='auto'>
                                        <i className="fas fa-dollar-sign text-white"/>
                                    </Col>
                                </Row>
                                <p className="m-b-0 text-white"><span className="label label-success m-r-10">+52%</span>From Previous Month</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className='prod-p-card bg-c-yellow'>
                            <Card.Body>
                                <Row className="align-items-center m-b-25">
                                    <Col>
                                        <h6 className="m-b-5 text-white">Product Sold</h6>
                                        <h3 className="m-b-0 text-white">6,784</h3>
                                    </Col>
                                    <Col sm='auto'>
                                        <i className="fas fa-tags text-white"/>
                                    </Col>
                                </Row>
                                <p className="m-b-0 text-white"><span className="label label-warning m-r-10">+52%</span>From Previous Month</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Row className='no-gutters'>
                            <Col xl={2} md={4}>
                                <Card className='m-b-0'>
                                    <Card.Body className='border-bottom'>
                                        <span className="text-muted">Support Requests</span>
                                        <h3 className="mt-3 mb-0"><i className="feather icon-arrow-down text-c-red"/>25<sup className="text-c-red f-14 ml-1">-11%</sup></h3>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <span className="text-muted">Open Ticket</span>
                                        <h3 className="mt-3 mb-0"><i className="feather icon-arrow-down text-c-red"/>29<sup className="text-c-red f-14 ml-1">-11%</sup></h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card className='m-b-0'>
                                    <Card.Body className='border-bottom'>
                                        <span className="text-muted">Agent Response</span>
                                        <h3 className="mt-3 mb-0"><i className="feather icon-arrow-up text-c-green"/>8<sup className="text-c-green f-14 ml-1">+6%</sup></h3>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <span className="text-muted">Running Ticket</span>
                                        <h3 className="mt-3 mb-0"><i className="feather icon-arrow-down text-c-red"/>15<sup className="text-c-red f-14 ml-1">-13%</sup></h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card className='m-b-0'>
                                    <Card.Body className='border-bottom'>
                                        <span className="text-muted">Support Resolved</span>
                                        <h3 className="mt-3 mb-0"><i className="feather icon-arrow-down text-c-red"/>1<sup className="text-c-red f-14 ml-1">-11%</sup></h3>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <span className="text-muted">Solved Ticket</span>
                                        <h3 className="mt-3 mb-0"><i className="feather icon-arrow-up text-c-green"/>4<sup className="text-c-green f-14 ml-1">+5%</sup></h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card className='m-b-0'>
                                    <Card.Body className='border-bottom'>
                                        <span className="text-muted">Pending Ticket</span>
                                        <h3 className="mt-3 mb-0"><i className="feather icon-arrow-up text-c-green"/>1.56<sup className="text-c-green f-14 ml-1">+8%</sup></h3>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <span className="text-muted">Reassign Ticket</span>
                                        <h3 className="mt-3 mb-0"><i className="feather icon-arrow-down text-c-red"/>2<sup className="text-c-red f-14 ml-1">-11%</sup></h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card className='m-b-0'>
                                    <Card.Body className='border-bottom'>
                                        <span className="text-muted">Reopen Ticket</span>
                                        <h3 className="mt-3 mb-0"><i className="feather icon-arrow-up text-c-green"/>5.7%<sup className="text-c-green f-14 ml-1">+4%</sup></h3>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <span className="text-muted">Close Ticket</span>
                                        <h3 className="mt-3 mb-0"><i className="feather icon-arrow-up text-c-green"/>10<sup className="text-c-green f-14 ml-1">+9%</sup></h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card className='m-b-0'>
                                    <Card.Body className='border-bottom'>
                                        <span className="text-muted">Return Ticket</span>
                                        <h3 className="mt-3 mb-0"><i className="feather icon-arrow-down text-c-red"/>4<sup className="text-c-red f-14 ml-1">+7%</sup></h3>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <span className="text-muted">Satisfied Clients</span>
                                        <h3 className="mt-3 mb-0"><i className="feather icon-arrow-down text-c-red"/>3<sup className="text-c-red f-14 ml-1">+6%</sup></h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12}>
                        <Card className='proj-progress-card'>
                            <Card.Body>
                                <Row>
                                    <Col xl={3} md={6}>
                                        <h6>Published Project</h6>
                                        <h5 className="m-b-25">532<span className="text-c-red m-l-10 m-r-10">+1.69%</span></h5>
                                        <ProgressBar variant='danger' now={25}/>
                                    </Col>
                                    <Col xl={3} md={6}>
                                        <h6>Completed Task</h6>
                                        <h5 className="m-b-25">4,569<span className="text-c-blue m-l-10 m-r-10">-0.5%</span></h5>
                                        <ProgressBar now={65}/>
                                    </Col>
                                    <Col xl={3} md={6}>
                                        <h6>Successful Task</h6>
                                        <h5 className="m-b-25">89%<span className="text-c-green m-l-10 m-r-10">+0.99%</span></h5>
                                        <ProgressBar variant='success' now={85}/>
                                    </Col>
                                    <Col xl={3} md={6}>
                                        <h6>Ongoing Project</h6>
                                        <h5 className="m-b-25">365<span className="text-c-yellow m-l-10 m-r-10">+0.35%</span></h5>
                                        <ProgressBar variant='warning' now={45}/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className='proj-t-card'>
                            <Card.Body>
                                <Row className='align-items-center m-b-30'>
                                    <Col sm='auto'>
                                        <i className="far fa-calendar-check text-c-red f-30"/>
                                    </Col>
                                    <Col className='p-l-0'>
                                        <h6 className="m-b-5">Ticket Answered</h6>
                                        <h6 className="m-b-0 text-c-red">Live Update</h6>
                                    </Col>
                                </Row>
                                <Row className='align-items-center text-center'>
                                    <Col>
                                        <h6 className="m-b-0">327</h6>
                                    </Col>
                                    <Col>
                                        <i className="fas fa-exchange-alt text-c-red f-18"/>
                                    </Col>
                                    <Col>
                                        <h6 className="m-b-0">10 Days</h6>
                                    </Col>
                                </Row>
                                <h6 className="pt-badge badge-light-danger">53%</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className='proj-t-card'>
                            <Card.Body>
                                <Row className='align-items-center m-b-30'>
                                    <Col sm='auto'>
                                        <i className="fas fa-paper-plane text-c-green f-30"/>
                                    </Col>
                                    <Col className='p-l-0'>
                                        <h6 className="m-b-5">Project Launched</h6>
                                        <h6 className="m-b-0 text-c-green">Live Update</h6>
                                    </Col>
                                </Row>
                                <Row className='align-items-center text-center'>
                                    <Col>
                                        <h6 className="m-b-0">3 Year</h6>
                                    </Col>
                                    <Col>
                                        <i className="fas fa-exchange-alt text-c-green f-18"/>
                                    </Col>
                                    <Col>
                                        <h6 className="m-b-0">623</h6>
                                    </Col>
                                </Row>
                                <h6 className="pt-badge badge-light-success">76%</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className='proj-t-card'>
                            <Card.Body>
                                <Row className='align-items-center m-b-30'>
                                    <Col sm='auto'>
                                        <i className="fas fa-lightbulb text-c-yellow f-30"/>
                                    </Col>
                                    <Col className='p-l-0'>
                                        <h6 className="m-b-5">Unique Innovation</h6>
                                        <h6 className="m-b-0 text-c-yellow">Live Update</h6>
                                    </Col>
                                </Row>
                                <Row className='align-items-center text-center'>
                                    <Col>
                                        <h6 className="m-b-0">1 Month</h6>
                                    </Col>
                                    <Col>
                                        <i className="fas fa-exchange-alt text-c-yellow f-18"/>
                                    </Col>
                                    <Col>
                                        <h6 className="m-b-0">248</h6>
                                    </Col>
                                </Row>
                                <h6 className="pt-badge badge-light-warning">73%</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='ticket-card'>
                            <Card.Body>
                                <p className="m-b-25 badge-light-danger lbl-card"><i className="fas fa-folder-open m-r-5"/> Open Tickets</p>
                                <div className="text-center">
                                    <h2 className="m-b-0 d-inline-block text-c-red">128</h2>
                                    <p className="m-b-0 d-inline-block">Tickets</p>
                                    <p className="m-b-0 m-t-10"><i className="fas fa-caret-down m-r-10 f-18 text-c-red"/>From Previous Month</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='ticket-card'>
                            <Card.Body>
                                <p className="m-b-25 badge-light-primary lbl-card"><i className="fas fa-file-archive m-r-5"/> Close Tickets</p>
                                <div className="text-center">
                                    <h2 className="m-b-0 d-inline-block text-c-blue">134</h2>
                                    <p className="m-b-0 d-inline-block">Tickets</p>
                                    <p className="m-b-0 m-t-10"><i className="fas fa-caret-up m-r-10 f-18 text-c-blue"/>From Previous Month</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='ticket-card'>
                            <Card.Body>
                                <p className="m-b-25 badge-light-success lbl-card"><i className="fas fa-users m-r-5"/> New Clients</p>
                                <div className="text-center">
                                    <h2 className="m-b-0 d-inline-block text-c-green">307</h2>
                                    <p className="m-b-0 d-inline-block">Clients</p>
                                    <p className="m-b-0 m-t-10"><i className="fas fa-caret-up m-r-10 f-18 text-c-green"/>From Previous Month</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='ticket-card'>
                            <Card.Body>
                                <p className="m-b-25 badge-light-warning lbl-card"><i className="fas fa-database m-r-5"/> New Orders</p>
                                <div className="text-center">
                                    <h2 className="m-b-0 d-inline-block text-c-yellow">231</h2>
                                    <p className="m-b-0 d-inline-block">Orders</p>
                                    <p className="m-b-0 m-t-10"><i className="fas fa-caret-up m-r-10 f-18 text-c-yellow"/>From Previous Month</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className='analytic-card bg-c-green'>
                            <Card.Body>
                                <Row className="align-items-center m-b-25">
                                    <Col sm='auto'>
                                        <i className="fas fa-shopping-cart text-c-green f-18 analytic-icon"/>
                                    </Col>
                                    <Col className="text-right">
                                        <h3 className="m-b-5 text-white">15,678</h3>
                                        <h6 className="m-b-0 text-white">Total Sales</h6>
                                    </Col>
                                </Row>
                                <p className="m-b-0  text-white d-inline-block">Total Income : </p>
                                <h5 className=" text-white d-inline-block m-b-0 m-l-10">$2,451</h5>
                                <h6 className="m-b-0 d-inline-block text-white float-right"><i className="fas fa-caret-up m-r-10 f-18"/>10%</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className='analytic-card bg-c-blue'>
                            <Card.Body>
                                <Row className="align-items-center m-b-25">
                                    <Col sm='auto'>
                                        <i className="fas fa-users text-c-blue f-18 analytic-icon"/>
                                    </Col>
                                    <Col className="text-right">
                                        <h3 className="m-b-5 text-white">1,678</h3>
                                        <h6 className="m-b-0 text-white">Total Users</h6>
                                    </Col>
                                </Row>
                                <p className="m-b-0 text-white d-inline-block">Total Revenue : </p>
                                <h5 className="text-white d-inline-block m-b-0 m-l-10">$2,451</h5>
                                <h6 className="m-b-0 d-inline-block text-white float-right"><i className="fas fa-caret-up m-r-10 f-18"/>30%</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className='analytic-card bg-c-red'>
                            <Card.Body>
                                <Row className="align-items-center m-b-25">
                                    <Col sm='auto'>
                                        <i className="fas fa-file-code text-c-red f-18 analytic-icon"/>
                                    </Col>
                                    <Col className="text-right">
                                        <h3 className="m-b-5 text-white">15,678</h3>
                                        <h6 className="m-b-0 text-white">Total Project</h6>
                                    </Col>
                                </Row>
                                <p className="m-b-0 d-inline-block text-white">Active Projects : </p>
                                <h5 className="text-white d-inline-block m-b-0 m-l-10">$2,451</h5>
                                <h6 className="m-b-0 d-inline-block text-white float-right"><i className="fas fa-caret-down m-r-10 f-18"/>10%</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='social-res-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Facebook Source</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="m-b-10">Page Profile</p>
                                <div className="m-b-25">
                                    <ProgressBar variant="danger" now={25}/>
                                </div>
                                <p className="m-b-10">Favorite</p>
                                <div className="m-b-25">
                                    <ProgressBar variant="success" now={85}/>
                                </div>
                                <p className="m-b-10">Like Story</p>
                                <ProgressBar now={65}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='social-res-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Twitter Source</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="m-b-10">Wall Profile</p>
                                <div className="m-b-25">
                                    <ProgressBar variant="success" now={85}/>
                                </div>
                                <p className="m-b-10">Favorite</p>
                                <div className="m-b-25">
                                    <ProgressBar variant="danger" now={25}/>
                                </div>
                                <p className="m-b-10">Like Tweets</p>
                                <ProgressBar variant='warning' now={40}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='social-res-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Google+ Source</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="m-b-10">Profile</p>
                                <div className="m-b-25">
                                    <ProgressBar now={65}/>
                                </div>
                                <p className="m-b-10">Connect</p>
                                <div className="m-b-25">
                                    <ProgressBar variant="danger" now={15}/>
                                </div>
                                <p className="m-b-10">Like News</p>
                                <ProgressBar variant='success' now={95}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='social-res-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Linked-in Source</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="m-b-10">Profile</p>
                                <div className="m-b-25">
                                    <ProgressBar variant='warning' now={45}/>
                                </div>
                                <p className="m-b-10">Connect</p>
                                <div className="m-b-25">
                                    <ProgressBar variant="success" now={85}/>
                                </div>
                                <p className="m-b-10">Like News</p>
                                <ProgressBar variant='warning' now={35}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card className='product-progress-card'>
                            <Card.Body>
                                <Row className='pp-main'>
                                    <Col xl={3} md={6}>
                                        <div className="pp-cont">
                                            <div className="row align-items-center m-b-20">
                                                <div className="col-auto">
                                                    <i className="fas fa-cube f-24 text-mute"/>
                                                </div>
                                                <div className="col text-right">
                                                    <h2 className="m-b-0 text-c-blue">2476</h2>
                                                </div>
                                            </div>
                                            <div className="row align-items-center m-b-15">
                                                <div className="col-auto">
                                                    <p className="m-b-0">Total Product</p>
                                                </div>
                                                <div className="col text-right">
                                                    <p className="m-b-0 text-c-blue"><i className="fas fa-long-arrow-alt-up m-r-10"/>64%</p>
                                                </div>
                                            </div>
                                            <ProgressBar now={45}/>
                                        </div>
                                    </Col>
                                    <Col xl={3} md={6}>
                                        <div className="pp-cont">
                                            <div className="row align-items-center m-b-20">
                                                <div className="col-auto">
                                                    <i className="fas fa-tag f-24 text-mute"/>
                                                </div>
                                                <div className="col text-right">
                                                    <h2 className="m-b-0 text-c-red">843</h2>
                                                </div>
                                            </div>
                                            <div className="row align-items-center m-b-15">
                                                <div className="col-auto">
                                                    <p className="m-b-0">New Orders</p>
                                                </div>
                                                <div className="col text-right">
                                                    <p className="m-b-0 text-c-red"><i className="fas fa-long-arrow-alt-down m-r-10"/>34%</p>
                                                </div>
                                            </div>
                                            <ProgressBar now={75}/>
                                        </div>
                                    </Col>
                                    <Col xl={3} md={6}>
                                        <div className="pp-cont">
                                            <div className="row align-items-center m-b-20">
                                                <div className="col-auto">
                                                    <i className="fas fa-random f-24 text-mute"/>
                                                </div>
                                                <div className="col text-right">
                                                    <h2 className="m-b-0 text-c-yellow">63%</h2>
                                                </div>
                                            </div>
                                            <div className="row align-items-center m-b-15">
                                                <div className="col-auto">
                                                    <p className="m-b-0">Conversion Rate</p>
                                                </div>
                                                <div className="col text-right">
                                                    <p className="m-b-0 text-c-yellow"><i className="fas fa-long-arrow-alt-up m-r-10"/>64%</p>
                                                </div>
                                            </div>
                                            <ProgressBar now={65}/>
                                        </div>
                                    </Col>
                                    <Col xl={3} md={6}>
                                        <div className="pp-cont">
                                            <div className="row align-items-center m-b-20">
                                                <div className="col-auto">
                                                    <i className="fas fa-dollar-sign f-24 text-mute"/>
                                                </div>
                                                <div className="col text-right">
                                                    <h2 className="m-b-0 text-c-green">41M</h2>
                                                </div>
                                            </div>
                                            <div className="row align-items-center m-b-15">
                                                <div className="col-auto">
                                                    <p className="m-b-0">Conversion Rate</p>
                                                </div>
                                                <div className="col text-right">
                                                    <p className="m-b-0 text-c-green"><i className="fas fa-long-arrow-alt-up m-r-10"/>54%</p>
                                                </div>
                                            </div>
                                            <ProgressBar now={35}/>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default WdgtStatistic;