import React from 'react';
import Chart from "react-apexcharts";
import {
    Row,
    Col,
    Card,
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
    ProgressBar,
    Table
} from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import userAnalytics from './chart/user-analytics';
import sessionAnalytics from './chart/session-analytics';
import pageViewAnalytics from './chart/page-view-analytics';
import pageSessionAnalytics from './chart/page-session-analytics';
import avgSessionAnalytics from './chart/avg-session-analytics';
import bounceRateAnalytics from './chart/bounce-rate-analytics';
import dailyVisitor from './chart/daily-visitor';

import Aux from "../../hoc/_Aux";

class Analytics extends React.Component {
    state = {
        dailyVisitor: dailyVisitor
    };

    dailyVisitorHandler = (unit) => {
        let minState, maxState;
        switch (unit) {
            case '1m':
                minState = new Date('28 Jan 2013').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case '6m':
                minState = new Date('27 Sep 2012').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            default:
            case '1y':
                minState = new Date('27 Feb 2012').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case 'ytd':
                minState = new Date('01 Jan 2013').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case 'all':
                minState = undefined;
                maxState = undefined;
                break;
        }
        this.setState(prevState => ({
            ...prevState,
            dailyVisitor: {
                ...prevState.dailyVisitor,
                options: {
                    ...prevState.dailyVisitor.options,
                    xaxis: {
                        min: minState,
                        max: maxState
                    }
                }
            }
        }));
    };

    render() {
        return (
            <Aux>
                <Row className="no-gutters">
                    <Col xl={2} md={4} sm={6}>
                        <Card>
                            <Card.Body>
                                <span>User</span>
                                <h3>798</h3>
                                <Chart {...userAnalytics} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <Card>
                            <Card.Body>
                                <span>Session</span>
                                <h3>486</h3>
                                <Chart {...sessionAnalytics} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <Card>
                            <Card.Body>
                                <span>Page view</span>
                                <h3>9454</h3>
                                <Chart {...pageViewAnalytics} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <Card>
                            <Card.Body>
                                <span>Page / Session</span>
                                <h3>7.15</h3>
                                <Chart {...pageSessionAnalytics} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <Card>
                            <Card.Body>
                                <span>Avg. Session Time</span>
                                <h3>00:04:30</h3>
                                <Chart {...avgSessionAnalytics} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <Card>
                            <Card.Body>
                                <span>Bounce Rate</span>
                                <h3>1.55%</h3>
                                <Chart {...bounceRateAnalytics} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={8}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Daily Visitor</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ButtonToolbar>
                                    <ToggleButtonGroup variant="radio" name="options" defaultValue='1y'>
                                        <ToggleButton variant='outline-primary' value='1m' size="sm" onClick={() => this.dailyVisitorHandler('1m')}>1M</ToggleButton>
                                        <ToggleButton variant='outline-primary' value='6m' size="sm" onClick={() => this.dailyVisitorHandler('6m')}>6M</ToggleButton>
                                        <ToggleButton variant='outline-primary' value='1y' size="sm" onClick={() => this.dailyVisitorHandler('1y')}>1Y</ToggleButton>
                                        <ToggleButton variant='outline-primary' value='ytd' size="sm" onClick={() => this.dailyVisitorHandler('ytd')}>YTD</ToggleButton>
                                        <ToggleButton variant='outline-primary' value='all' size="sm" onClick={() => this.dailyVisitorHandler('all')}>All</ToggleButton>
                                    </ToggleButtonGroup>
                                </ButtonToolbar>
                                <Chart {...this.state.dailyVisitor} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
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
                    </Col>
                    <Col sm={12}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Campaign Monitor</Card.Title>
                            </Card.Header>
                            <Card.Body className='p-0' style={{height: '362px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th><span>Campaign date</span></th>
                                            <th><span>Click</span></th>
                                            <th><span>Cost</span></th>
                                            <th><span>CTR</span></th>
                                            <th><span>ARPU</span></th>
                                            <th><span>ECPI</span></th>
                                            <th><span>ROI</span></th>
                                            <th><span>Revenue</span></th>
                                            <th><span>Conversions</span></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>08-11-2016</td>
                                            <td>786
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" now={60} style={{height: '4px'}} />
                                                </div>
                                            </td>
                                            <td>485
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="50"/>
                                                </div>
                                            </td>
                                            <td>769
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>45,3%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="60"/>
                                                </div>
                                            </td>
                                            <td>6,7%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="30"/>
                                                </div>
                                            </td>
                                            <td>8,56
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="40"/>
                                                </div>
                                            </td>
                                            <td>10:55
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>33.8%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="40"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>15-10-2016</td>
                                            <td>786
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="65"/>
                                                </div>
                                            </td>
                                            <td>523
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="80"/>
                                                </div>
                                            </td>
                                            <td>736
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="80"/>
                                                </div>
                                            </td>
                                            <td>78,3%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>6,6%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>7,56
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="44"/>
                                                </div>
                                            </td>
                                            <td>4:30
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="68"/>
                                                </div>
                                            </td>
                                            <td>76.8%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="90"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>08-08-2017</td>
                                            <td>624
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="45"/>
                                                </div>
                                            </td>
                                            <td>436
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="55"/>
                                                </div>
                                            </td>
                                            <td>756
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="95"/>
                                                </div>
                                            </td>
                                            <td>78,3%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="38"/>
                                                </div>
                                            </td>
                                            <td>6,4%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="30"/>
                                                </div>
                                            </td>
                                            <td>9,45
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="41"/>
                                                </div>
                                            </td>
                                            <td>9:05
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="67"/>
                                                </div>
                                            </td>
                                            <td>8.63%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="41"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11-12-2017</td>
                                            <td>423
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="54"/>
                                                </div>
                                            </td>
                                            <td>123
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>756
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="75"/>
                                                </div>
                                            </td>
                                            <td>78,6%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="60"/>
                                                </div>
                                            </td>
                                            <td>45,6%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="90"/>
                                                </div>
                                            </td>
                                            <td>6,85
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="30"/>
                                                </div>
                                            </td>
                                            <td>7:45
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="40"/>
                                                </div>
                                            </td>
                                            <td>33.8%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="80"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>05-06-2015</td>
                                            <td>465
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="66"/>
                                                </div>
                                            </td>
                                            <td>463
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="50"/>
                                                </div>
                                            </td>
                                            <td>456
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="30"/>
                                                </div>
                                            </td>
                                            <td>68,6%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="30"/>
                                                </div>
                                            </td>
                                            <td>76,6%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="32"/>
                                                </div>
                                            </td>
                                            <td>7,56
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>8:45
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="71"/>
                                                </div>
                                            </td>
                                            <td>39.8%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="38"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>08-11-2016</td>
                                            <td>786
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="43"/>
                                                </div>
                                            </td>
                                            <td>485
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>769
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="69"/>
                                                </div>
                                            </td>
                                            <td>45,3%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="90"/>
                                                </div>
                                            </td>
                                            <td>6,7%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="80"/>
                                                </div>
                                            </td>
                                            <td>8,56
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="41"/>
                                                </div>
                                            </td>
                                            <td>10:55
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="55"/>
                                                </div>
                                            </td>
                                            <td>33.8%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>15-10-2016</td>
                                            <td>786
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="61"/>
                                                </div>
                                            </td>
                                            <td>523
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="45"/>
                                                </div>
                                            </td>
                                            <td>736
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>78,3%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="60"/>
                                                </div>
                                            </td>
                                            <td>6,6%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="30"/>
                                                </div>
                                            </td>
                                            <td>7,56
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="40"/>
                                                </div>
                                            </td>
                                            <td>4:30
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>76.8%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="40"/>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Analytics;