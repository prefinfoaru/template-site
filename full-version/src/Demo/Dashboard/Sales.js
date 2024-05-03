import React from 'react';
import Chart from "react-apexcharts";
import {Row, Col, Card, Table} from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import annualProfit from './chart/annual-profit';
import saleSatisfaction from './chart/sale-satisfaction';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

class Sales extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={6} xl={3}>
                        <Card className='prod-p-card bg-c-red'>
                            <Card.Body>
                                <Row className="align-items-center m-b-0">
                                    <Col>
                                        <h6 className="m-b-5 text-white">Total Profit</h6>
                                        <h3 className="m-b-0 text-white">$1,783</h3>
                                    </Col>
                                    <Col sm='auto'>
                                        <i className="fas fa-money-bill-alt text-white"/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className='prod-p-card bg-c-blue'>
                            <Card.Body>
                                <Row className="align-items-center m-b-0">
                                    <Col>
                                        <h6 className="m-b-5 text-white">Total Orders</h6>
                                        <h3 className="m-b-0 text-white">15,830</h3>
                                    </Col>
                                    <Col sm='auto'>
                                        <i className="fas fa-database text-white"/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className='prod-p-card bg-c-green'>
                            <Card.Body>
                                <Row className="align-items-center m-b-0">
                                    <Col>
                                        <h6 className="m-b-5 text-white">Average Price</h6>
                                        <h3 className="m-b-0 text-white">$6,780</h3>
                                    </Col>
                                    <Col sm='auto'>
                                        <i className="fas fa-dollar-sign text-white"/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className='prod-p-card bg-c-yellow'>
                            <Card.Body>
                                <Row className="align-items-center m-b-0">
                                    <Col>
                                        <h6 className="m-b-5 text-white">Product Sold</h6>
                                        <h3 className="m-b-0 text-white">6,784</h3>
                                    </Col>
                                    <Col sm='auto'>
                                        <i className="fas fa-tags text-white"/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={7}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Department wise annual recurring and profit</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...annualProfit} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={5}>
                        <Card className='feed-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Feeds</Card.Title>
                            </Card.Header>
                            <Card.Body className='scrollable-body' style={{height: '370px'}}>
                                <PerfectScrollbar>
                                    <div className="row m-b-25 m-t-5 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-bell badge-light-primary feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-14">Just Now</span></h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-shopping-cart badge-light-danger feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6 className="m-b-5">New order received <span className="text-muted float-right f-14">30 min ago</span></h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-file-text badge-light-success feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-14">Just Now</span></h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-bell badge-light-primary feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6 className="m-b-5">You have 4 tasks Done. <span className="text-muted float-right f-14">1 hours ago</span></h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-file-text badge-light-success feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6 className="m-b-5">You have 2 pending tasks. <span className="text-muted float-right f-14">Just Now</span></h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-shopping-cart badge-light-danger feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6 className="m-b-5">New order received <span className="text-muted float-right f-14">4 hours ago</span></h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-shopping-cart badge-light-danger feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6 className="m-b-5">New order Done <span className="text-muted float-right f-14">Just Now</span></h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-file-text badge-light-success feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6 className="m-b-5">You have 5 pending tasks. <span className="text-muted float-right f-14">5 hours ago</span></h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row m-b-0 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-bell badge-light-primary feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6 className="m-b-5">You have 4 tasks Done. <span className="text-muted float-right f-14">2 hours ago</span></h6>
                                            </a>
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} md={12}>
                        <Card className='table-card m-b-0'>
                            <Card.Header>
                                <Card.Title as='h5'>New Products</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0' style={{height: '300px'}}>
                                <PerfectScrollbar>
                                    <Table responsive hover className='mb-0'>
                                        <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Image</th>
                                            <th>Status</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>HeadPhone</td>
                                            <td><img src="assets/images/widget/p1.jpg" alt="" className="img-20" /></td>
                                            <td>
                                                <div><label className="badge badge-light-warning">Pending</label></div>
                                            </td>
                                            <td>$10</td>
                                            <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16  text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Iphone 6</td>
                                            <td><img src="assets/images/widget/p2.jpg" alt="" className="img-20" /></td>
                                            <td>
                                                <div><label className="badge badge-light-danger">Cancel</label></div>
                                            </td>
                                            <td>$20</td>
                                            <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16  text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Jacket</td>
                                            <td><img src="assets/images/widget/p3.jpg" alt="" className="img-20" /></td>
                                            <td>
                                                <div><label className="badge badge-light-success">Success</label></div>
                                            </td>
                                            <td>$35</td>
                                            <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Sofa</td>
                                            <td><img src="assets/images/widget/p4.jpg" alt="" className="img-20" /></td>
                                            <td>
                                                <div><label className="badge badge-light-danger">Cancel</label></div>
                                            </td>
                                            <td>$85</td>
                                            <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Iphone 6</td>
                                            <td><img src="assets/images/widget/p2.jpg" alt="" className="img-20" /></td>
                                            <td>
                                                <div><label className="badge badge-light-success">Success</label></div>
                                            </td>
                                            <td>$20</td>
                                            <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a></td>
                                        </tr>
                                        <tr>
                                            <td>HeadPhone</td>
                                            <td><img src="assets/images/widget/p1.jpg" alt="" className="img-20" /></td>
                                            <td>
                                                <div><label className="badge badge-light-warning">Pending</label></div>
                                            </td>
                                            <td>$50</td>
                                            <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Iphone 6</td>
                                            <td><img src="assets/images/widget/p2.jpg" alt="" className="img-20" /></td>
                                            <td>
                                                <div><label className="badge badge-light-danger">Cancel</label></div>
                                            </td>
                                            <td>$30</td>
                                            <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} md={12}>
                        <Card>
                            <Card.Body>
                                <h6>Customer Satisfaction</h6>
                                <span>It takes continuous effort to maintain high customer satisfaction levels.Internal and external quality measures are often tied together.,as the opinion...</span>
                                <span className="text-c-blue d-block">Learn more..</span>
                                <Row className="d-flex justify-content-center align-items-center">
                                    <Col>
                                        <Chart {...saleSatisfaction}/>
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

export default Sales;