import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

class CommonContent extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
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
                </Row>
            </Aux>
        );
    }
}

export default CommonContent;