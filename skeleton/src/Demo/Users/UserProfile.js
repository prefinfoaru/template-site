import React from 'react';
import {Row, Col, Card, Dropdown, Carousel} from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Gallery from '../../App/components/Gallery';
import Aux from "../../hoc/_Aux";

import DEMO from "../../store/constant";

import profileCover from '../../assets/images/profile/cover.jpg';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';
import avatar5 from '../../assets/images/user/avatar-5.jpg';

import bg1 from '../../assets/images/profile/bg-1.jpg';
import bg2 from '../../assets/images/profile/bg-2.jpg';
import bg3 from '../../assets/images/profile/bg-3.jpg';

import slider5 from '../../assets/images/widget/slider5.jpg';
import slider7 from '../../assets/images/widget/slider7.jpg';
import slider6 from '../../assets/images/widget/slider6.jpg';

import image1 from '../../assets/images/light-box/l1.jpg';
import image2 from '../../assets/images/light-box/l2.jpg';
import image3 from '../../assets/images/light-box/l3.jpg';
import image4 from '../../assets/images/light-box/l4.jpg';
import image5 from '../../assets/images/light-box/l5.jpg';
import image6 from '../../assets/images/light-box/l6.jpg';

import thumb1 from '../../assets/images/light-box/sl1.jpg';
import thumb2 from '../../assets/images/light-box/sl2.jpg';
import thumb3 from '../../assets/images/light-box/sl3.jpg';
import thumb4 from '../../assets/images/light-box/sl4.jpg';
import thumb5 from '../../assets/images/light-box/sl5.jpg';
import thumb6 from '../../assets/images/light-box/sl6.jpg';

class UserProfile extends React.Component {
    state = {
        activeProfileTab: 'home',
        isPersonalEdit: false,
        isContactEdit: false,
        isOtherEdit: false
    };

    render() {
        const profileTabClass = 'nav-link text-reset';
        const profileTabActiveClass = 'nav-link text-reset active';

        const profilePanClass = 'tab-pane fade';
        const profilePanActiveClass = 'tab-pane fade show active';
        return (
            <Aux>
                <div className='user-profile user-card mb-4'>
                    <Card.Header className='border-0 p-0 pb-0'>
                        <div className="cover-img-block">
                            <img src={profileCover} alt="" className="img-fluid"/>
                            <div className="overlay"/>
                            <div className="change-cover">
                                <Dropdown>
                                    <Dropdown.Toggle variant="link" id="dropdown-basic" className='drp-icon text-white'>
                                        <i className="feather icon-camera"/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href={DEMO.BLANK_LINK}><i className="feather icon-upload-cloud mr-2"/>upload new</Dropdown.Item>
                                        <Dropdown.Item href={DEMO.BLANK_LINK}><i className="feather icon-image mr-2"/>from photos</Dropdown.Item>
                                        <Dropdown.Item href={DEMO.BLANK_LINK}><i className="feather icon-film mr-2"/>upload video</Dropdown.Item>
                                        <Dropdown.Item href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 mr-2"/>remove</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body className='py-0'>
                        <div className="user-about-block m-0">
                            <Row>
                                <Col md={4} className='text-center mt-n5'>
                                    <div className="change-profile text-center">
                                        <Dropdown className='w-auto d-inline-block'>
                                            <Dropdown.Toggle as='a' variant="link" id="dropdown-basic">
                                                <div className="profile-dp">
                                                    <div className="position-relative d-inline-block">
                                                        <img className="img-radius img-fluid wid-100" src={avatar5} alt="User"/>
                                                    </div>
                                                    <div className="overlay">
                                                        <span>change</span>
                                                    </div>
                                                </div>
                                                <div className="certificated-badge">
                                                    <i className="fas fa-certificate text-c-blue bg-icon"/>
                                                    <i className="fas fa-check front-icon text-white"/>
                                                </div>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}><i className="feather icon-upload-cloud mr-2"/>upload new</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}><i className="feather icon-image mr-2"/>from photos</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}><i className="feather icon-film mr-2"/>upload video</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 mr-2"/>remove</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <h5 className="mb-1">Lary Doe</h5>
                                    <p className="mb-2 text-muted">UI/UX Designer</p>
                                </Col>
                                <Col md={8} className='mt-md-4'>
                                    <Row>
                                        <Col>
                                            <a href={DEMO.BLANK_LINK} className="mb-1 text-muted d-flex align-items-end text-h-primary"><i className="feather icon-globe mr-2 f-18"/>www.phoenixcoded.net</a>
                                            <div className="clearfix"/>
                                            <a href="mailto:demo@domain.com" className="mb-1 text-muted d-flex align-items-end text-h-primary"><i className="feather icon-mail mr-2 f-18"/>demo@domain.com</a>
                                            <div className="clearfix"/>
                                            <a href={DEMO.BLANK_LINK} className="mb-1 text-muted d-flex align-items-end text-h-primary"><i className="feather icon-phone mr-2 f-18"/>+1 9999-999-999</a>
                                        </Col>
                                        <Col>
                                            <div className="media">
                                                <i className="feather icon-map-pin mr-2 mt-1 f-18"/>
                                                <div className="media-body">
                                                    <p className="mb-0 text-muted">4289 Calvin Street</p>
                                                    <p className="mb-0 text-muted">Baltimore, near MD Tower Maryland,</p>
                                                    <p className="mb-0 text-muted">Maryland (21201)</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <ul className="nav nav-tabs profile-tabs nav-fill" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className={this.state.activeProfileTab === 'home' ? profileTabActiveClass : profileTabClass} onClick={() => {this.setState({activeProfileTab: 'home'})}} id="home-tab" href={DEMO.BLANK_LINK}><i className="feather icon-home mr-2"/>Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={this.state.activeProfileTab === 'profile' ? profileTabActiveClass : profileTabClass} onClick={() => {this.setState({activeProfileTab: 'profile'})}} id="profile-tab" href={DEMO.BLANK_LINK}><i className="feather icon-user mr-2"/>Profile</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={this.state.activeProfileTab === 'contact' ? profileTabActiveClass : profileTabClass} onClick={() => {this.setState({activeProfileTab: 'contact'})}} id="contact-tab" href={DEMO.BLANK_LINK}><i className="feather icon-phone mr-2"/>My Contacts</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={this.state.activeProfileTab === 'gallery' ? profileTabActiveClass : profileTabClass} onClick={() => {this.setState({activeProfileTab: 'gallery'})}} id="gallery-tab" href={DEMO.BLANK_LINK}><i className="feather icon-image mr-2"/>Gallery</a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </div>
                <Row>
                    <Col md={8} className='order-md-2'>
                        <div className="tab-content">
                            <div className={this.state.activeProfileTab === 'home' ? profilePanActiveClass : profilePanClass} id='home'>
                                <Card>
                                    <Card.Header>
                                        <h5 className="font-weight-normal"><a href={DEMO.BLANK_LINK} className="text-h-primary text-reset"><b className="font-weight-bolder">Josephin Doe</b></a> posted on your timeline</h5>
                                        <p className="mb-0 text-muted">50 minutes ago</p>
                                    </Card.Header>
                                    <a href={DEMO.BLANK_LINK}><img src={bg1} alt="" className="img-fluid"/></a>
                                    <Card.Body>
                                        <a href={DEMO.BLANK_LINK} className="text-h-primary">
                                            <h6>The new Lorem Ipsum is simply</h6>
                                        </a>
                                        <p className="text-muted mb-0">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </Card.Body>
                                    <Card.Body className='border-top border-bottom'>
                                        <ul className="list-inline m-0">
                                            <li className="list-inline-item"><a href={DEMO.BLANK_LINK} className="text-danger text-h-danger"><i className="feather icon-heart-on mr-2"/>Like</a></li>
                                            <li className="list-inline-item"><a href={DEMO.BLANK_LINK} className="text-muted text-h-primary"><i className="feather icon-message-square mr-2"/>Comment</a></li>
                                            <li className="list-inline-item"><a href={DEMO.BLANK_LINK} className="text-muted text-h-primary"><i className="feather icon-share-2 mr-2"/>Share</a></li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Body>
                                        <Row className="justify-content-between mb-4">
                                            <Col sm='auto'><a href={DEMO.BLANK_LINK} className="text-muted text-h-primary">Comment (50)</a></Col>
                                            <Col sm='auto'><a href={DEMO.BLANK_LINK} className="text-muted text-h-primary">See All</a></Col>
                                        </Row>
                                        <div className="media mb-0">
                                            <img src={avatar2} alt="user" className="img-radius wid-30 align-top m-r-15"/>
                                            <div className="media-body">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6 className="mb-0 text-h-primary">Alex Thompson</h6>
                                                </a>
                                                <p className="m-b-0">Looking Very nice type and scrambled
                                                    <a href={DEMO.BLANK_LINK} className="text-muted text-h-danger ml-1"><small>Like</small></a>
                                                    <a href={DEMO.BLANK_LINK} className="text-muted text-h-primary ml-1"><small>Comment</small></a>
                                                </p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="media mb-0">
                                            <img src={avatar3} alt="user" className="img-radius wid-30 align-top m-r-15"/>
                                            <div className="media-body">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6 className="mb-0 text-h-primary">Alex Thompson</h6>
                                                </a>
                                                <p className="m-b-0">Nice Pic printing and typesetting industry
                                                    <a href={DEMO.BLANK_LINK} className="text-muted text-h-danger ml-1"><small>Like</small></a>
                                                    <a href={DEMO.BLANK_LINK} className="text-muted text-h-primary ml-1"><small>Comment</small></a>
                                                </p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="media mb-0">
                                            <img src={avatar1} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                            <div className="media-body">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control form-control border-0 shadow-none px-0" placeholder="Write comment hear !. . ."/>
                                                    <div className="input-group-append">
                                                        <button className="btn  btn-primary" type="button"><i className="feather icon-message-circle"/></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <h5 className="font-weight-normal"><a href={DEMO.BLANK_LINK} className="text-h-primary text-reset"><b className="font-weight-bolder">Josephin Doe</b></a> posted on your timeline</h5>
                                        <p className="mb-0 text-muted">50 minutes ago</p>
                                    </Card.Header>
                                    <a href={DEMO.BLANK_LINK}><img src={bg2} alt="" className="img-fluid"/></a>
                                    <Card.Body>
                                        <a href={DEMO.BLANK_LINK} className="text-h-primary">
                                            <h6>The new Lorem Ipsum is simply</h6>
                                        </a>
                                        <p className="text-muted mb-0">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </Card.Body>
                                    <Card.Body className='border-top border-bottom'>
                                        <ul className="list-inline m-0">
                                            <li className="list-inline-item"><a href={DEMO.BLANK_LINK} className="text-muted text-h-danger"><i className="feather icon-heart-on mr-2"/>Like</a></li>
                                            <li className="list-inline-item"><a href={DEMO.BLANK_LINK} className="text-muted text-h-primary"><i className="feather icon-message-square mr-2"/>Comment</a></li>
                                            <li className="list-inline-item"><a href={DEMO.BLANK_LINK} className="text-muted text-h-primary"><i className="feather icon-share-2 mr-2"/>Share</a></li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Body>
                                        <Row className="justify-content-between mb-4">
                                            <Col sm='auto'><a href={DEMO.BLANK_LINK} className="text-muted text-h-primary">Comment (50)</a></Col>
                                            <Col sm='auto'><a href={DEMO.BLANK_LINK} className="text-muted text-h-primary">See All</a></Col>
                                        </Row>
                                        <div className="media mb-0">
                                            <img src={avatar3} alt="user" className="img-radius wid-30 align-top m-r-15"/>
                                            <div className="media-body">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6 className="mb-0 text-h-primary">Alex Thompson</h6>
                                                </a>
                                                <p className="m-b-0">Nice Pic printing and typesetting industry
                                                    <a href={DEMO.BLANK_LINK} className="text-muted text-h-danger ml-1"><small>Like</small></a>
                                                    <a href={DEMO.BLANK_LINK} className="text-muted text-h-primary ml-1"><small>Comment</small></a>
                                                </p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="media mb-0">
                                            <img src={avatar1} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                            <div className="media-body">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control form-control border-0 shadow-none px-0" placeholder="Write comment hear !. . ."/>
                                                    <div className="input-group-append">
                                                        <button className="btn  btn-primary" type="button"><i className="feather icon-message-circle"/></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <h5 className="font-weight-normal"><a href={DEMO.BLANK_LINK} className="text-h-primary text-reset"><b className="font-weight-bolder">Josephin Doe</b></a> posted on your timeline</h5>
                                        <p className="mb-0 text-muted">50 minutes ago</p>
                                    </Card.Header>
                                    <a href={DEMO.BLANK_LINK}><img src={bg3} alt="" className="img-fluid"/></a>
                                    <Card.Body>
                                        <a href={DEMO.BLANK_LINK} className="text-h-primary">
                                            <h6>The new Lorem Ipsum is simply</h6>
                                        </a>
                                        <p className="text-muted mb-0">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </Card.Body>
                                    <Card.Body className='border-top border-bottom'>
                                        <ul className="list-inline m-0">
                                            <li className="list-inline-item"><a href={DEMO.BLANK_LINK} className="text-muted text-h-danger"><i className="feather icon-heart-on mr-2"/>Like</a></li>
                                            <li className="list-inline-item"><a href={DEMO.BLANK_LINK} className="text-muted text-h-primary"><i className="feather icon-message-square mr-2"/>Comment</a></li>
                                            <li className="list-inline-item"><a href={DEMO.BLANK_LINK} className="text-muted text-h-primary"><i className="feather icon-share-2 mr-2"/>Share</a></li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Body>
                                        <Row className="justify-content-between mb-4">
                                            <Col sm='auto'><a href={DEMO.BLANK_LINK} className="text-muted text-h-primary">Comment (0)</a></Col>
                                            <Col sm='auto'><a href={DEMO.BLANK_LINK} className="text-muted text-h-primary">See All</a></Col>
                                        </Row>
                                        <div className="media mb-0">
                                            <img src={avatar1} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                            <div className="media-body">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control form-control border-0 shadow-none px-0" placeholder="Write comment hear !. . ."/>
                                                    <div className="input-group-append">
                                                        <button className="btn  btn-primary" type="button"><i className="feather icon-message-circle"/></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className={this.state.activeProfileTab === 'profile' ? profilePanActiveClass : profilePanClass} id='profile'>
                                <Card>
                                    <Card.Body className='d-flex align-items-center justify-content-between'>
                                        <h5 className="mb-0">Personal details</h5>
                                        <button type="button" className="btn btn-primary btn-sm rounded m-0 float-right" onClick={() => this.setState({isPersonalEdit: !this.state.isPersonalEdit})}>
                                            <i className={this.state.isPersonalEdit ? 'feather icon-x' : 'feather icon-edit'}/>
                                        </button>
                                    </Card.Body>
                                    <Card.Body className={this.state.isPersonalEdit ? 'border-top pro-det-edit collapse' : 'border-top pro-det-edit collapse show'}>
                                        <Row className="form-group">
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Full Name</label>
                                            <Col sm={9}>
                                                Lary Doe
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Gender</label>
                                            <Col sm={9}>
                                                Male
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Birth Date</label>
                                            <Col sm={9}>
                                                16-12-1994
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Martial Status</label>
                                            <Col sm={9}>
                                                Unmarried
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Location</label>
                                            <Col sm={9}>
                                                <p className="mb-0 text-muted">4289 Calvin Street</p>
                                                <p className="mb-0 text-muted">Baltimore, near MD Tower Maryland,</p>
                                                <p className="mb-0 text-muted">Maryland (21201)</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Body className={this.state.isPersonalEdit ? 'border-top pro-det-edit collapse show' : 'border-top pro-det-edit collapse'}>
                                        <Row className="form-group">
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Full Name</label>
                                            <Col sm={9}>
                                                <input type="text" className="form-control" placeholder="Full Name" defaultValue="Lary Doe"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Gender</label>
                                            <Col sm={9}>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" defaultValue='male' defaultChecked />
                                                    <label className="custom-control-label" htmlFor="customRadioInline1">Male</label>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" defaultValue='female' />
                                                    <label className="custom-control-label" htmlFor="customRadioInline2">Female</label>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Birth Date</label>
                                            <Col sm={9}>
                                                <input type="date" className="form-control" defaultValue="1994-12-16"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Martial Status</label>
                                            <Col sm={9}>
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option defaultValue=''>Select Marital Status</option>
                                                    <option defaultValue='married'>Married</option>
                                                    <option defaultValue='unmarried' defaultChecked>Unmarried</option>
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Location</label>
                                            <Col sm={9}>
                                                <textarea className="form-control" defaultValue='4289 Calvin Street,  Baltimore, near MD Tower Maryland, Maryland (21201)'/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="col-sm-3 col-form-label"/>
                                            <Col sm={9}>
                                                <button type="submit" className="btn btn-primary" onClick={() => this.setState({isPersonalEdit: !this.state.isPersonalEdit})}>Save</button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body className='d-flex align-items-center justify-content-between'>
                                        <h5 className="mb-0">Contact Information</h5>
                                        <button type="button" className="btn btn-primary btn-sm rounded m-0 float-right" onClick={() => this.setState({isContactEdit: !this.state.isContactEdit})}>
                                            <i className={this.state.isContactEdit ? 'feather icon-x' : 'feather icon-edit'}/>
                                        </button>
                                    </Card.Body>
                                    <Card.Body className={this.state.isContactEdit ? 'border-top pro-det-edit collapse' : 'border-top pro-det-edit collapse show'}>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Mobile Number</label>
                                            <Col sm={9}>
                                                +1 9999-999-999
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Email Address</label>
                                            <Col sm={9}>
                                                demo@domain.com
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Twitter</label>
                                            <Col sm={9}>
                                                twitter@phonixcoded
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Skype</label>
                                            <Col sm={9}>
                                                skype@phonixcoded
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Body className={this.state.isContactEdit ? 'border-top pro-det-edit collapse show' : 'border-top pro-det-edit collapse'}>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Mobile Number</label>
                                            <Col sm={9}>
                                                <input type="text" className="form-control" placeholder="Full Name" defaultValue="+1 9999-999-999"/>
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Email Address</label>
                                            <Col sm={9}>
                                                <input type="text" className="form-control" placeholder="Ema" defaultValue="demo@domain.com"/>
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Twitter</label>
                                            <Col sm={9}>
                                                <input type="text" className="form-control" placeholder="Twitter" defaultValue="twitter@domain.com"/>
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Skype</label>
                                            <Col sm={9}>
                                                <input type="text" className="form-control" placeholder="Skype" defaultValue="skype@domain.com"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="col-sm-3 col-form-label"/>
                                            <Col sm={9}>
                                                <button type="submit" className="btn btn-primary" onClick={() => this.setState({isContactEdit: !this.state.isContactEdit})}>Save</button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body className='d-flex align-items-center justify-content-between'>
                                        <h5 className="mb-0">Other Information</h5>
                                        <button type="button" className="btn btn-primary btn-sm rounded m-0 float-right" onClick={() => this.setState({isOtherEdit: !this.state.isOtherEdit})}>
                                            <i className={this.state.isOtherEdit ? 'feather icon-x' : 'feather icon-edit'}/>
                                        </button>
                                    </Card.Body>
                                    <Card.Body className={this.state.isOtherEdit ? 'border-top pro-det-edit collapse' : 'border-top pro-det-edit collapse show'}>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Occupation</label>
                                            <Col sm={9}>
                                                Designer
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Skills</label>
                                            <Col sm={9}>
                                                C#, Javascript, Scss
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Jobs</label>
                                            <Col sm={9}>
                                                Phoenixcoded
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Body className={this.state.isOtherEdit ? 'border-top pro-det-edit collapse show' : 'border-top pro-det-edit collapse'}>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Occupation</label>
                                            <Col sm={9}>
                                                <input type="text" className="form-control" placeholder="Full Name" defaultValue="Designer"/>
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Skills</label>
                                            <Col sm={9}>
                                                <input type="text" className="form-control" placeholder="Skill" defaultValue="C#, Javascript, Scss"/>
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <label className="col-sm-3 col-form-label font-weight-bolder">Jobs</label>
                                            <Col sm={9}>
                                                <input type="text" className="form-control" placeholder="Skill" defaultValue="Phoenixcoded"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="col-sm-3 col-form-label"/>
                                            <Col sm={9}>
                                                <button type="submit" className="btn btn-primary" onClick={() => this.setState({isOtherEdit: !this.state.isOtherEdit})}>Save</button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className={this.state.activeProfileTab === 'contact' ? profilePanActiveClass : profilePanClass} id='contact'>
                                <Row>
                                    <Col md={6}>
                                        <Card className='user-card user-card-1'>
                                            <Card.Header className='border-0 p-2 pb-0'>
                                                <div className="cover-img-block">
                                                    <Carousel indicators={false}>
                                                        <Carousel.Item>
                                                            <img src={slider5} alt="" className="img-fluid"/>
                                                        </Carousel.Item>
                                                        <Carousel.Item>
                                                            <img src={slider6} alt="" className="img-fluid"/>
                                                        </Carousel.Item>
                                                        <Carousel.Item>
                                                            <img src={slider7} alt="" className="img-fluid"/>
                                                        </Carousel.Item>
                                                    </Carousel>
                                                </div>
                                            </Card.Header>
                                            <Card.Body className='pt-0'>
                                                <div className="user-about-block text-center">
                                                    <Row className="align-items-end">
                                                        <Col className='text-left pb-3'>
                                                            <a href={DEMO.BLANK_LINK} className='text-c-yellow'><i className="icon feather icon-star text-c-yellow f-20"/></a>
                                                        </Col>
                                                        <Col><img className="img-radius img-fluid wid-80" src={avatar4} alt="User"/></Col>
                                                        <Col className='text-right pb-3'>
                                                            <Dropdown>
                                                                <Dropdown.Toggle variant="link" id="dropdown-basic" className='drp-icon text-muted'>
                                                                    <i className="feather icon-more-horizontal"/>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Action</Dropdown.Item>
                                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Another action</Dropdown.Item>
                                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Something else</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className="text-center">
                                                    <h6 className="mb-1 mt-3">Joseph William</h6>
                                                    <p className="mb-3 text-muted">UI/UX Designer</p>
                                                    <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                    <p className="mb-0">been the industry's standard</p>
                                                </div>
                                                <hr className="wid-80 b-wid-3 my-4"/>
                                                <Row className="text-center">
                                                    <Col>
                                                        <h6 className="mb-1">37</h6>
                                                        <p className="mb-0">Mails</p>
                                                    </Col>
                                                    <Col>
                                                        <h6 className="mb-1">2749</h6>
                                                        <p className="mb-0">Followers</p>
                                                    </Col>
                                                    <Col>
                                                        <h6 className="mb-1">678</h6>
                                                        <p className="mb-0">Following</p>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={6}>
                                        <Card className='user-card user-card-1'>
                                            <Card.Header className='border-0 p-2 pb-0'>
                                                <div className="cover-img-block">
                                                    <img src={slider6} alt="" className="img-fluid"/>
                                                </div>
                                            </Card.Header>
                                            <Card.Body className='pt-0'>
                                                <div className="user-about-block text-center">
                                                    <Row className="align-items-end">
                                                        <Col className='text-left pb-3'>
                                                            <a href={DEMO.BLANK_LINK} className='text-c-yellow'><i className="icon feather icon-star-on text-c-yellow f-20"/></a>
                                                        </Col>
                                                        <Col>
                                                            <div className="position-relative d-inline-block">
                                                                <img className="img-radius img-fluid wid-80" src={avatar5} alt="User"/>
                                                                <div className="certificated-badge">
                                                                    <i className="fas fa-certificate text-c-blue bg-icon"/>
                                                                    <i className="fas fa-check front-icon text-white"/>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col className='text-right pb-3'>
                                                            <Dropdown>
                                                                <Dropdown.Toggle variant="link" id="dropdown-basic" className='drp-icon text-muted'>
                                                                    <i className="feather icon-more-horizontal"/>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Action</Dropdown.Item>
                                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Another action</Dropdown.Item>
                                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Something else</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className="text-center">
                                                    <h6 className="mb-1 mt-3">Suzen</h6>
                                                    <p className="mb-3 text-muted">UI/UX Designer</p>
                                                    <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                    <p className="mb-0">been the industry's standard</p>
                                                </div>
                                                <hr className="wid-80 b-wid-3 my-4"/>
                                                <Row className="text-center">
                                                    <Col>
                                                        <h6 className="mb-1">37</h6>
                                                        <p className="mb-0">Mails</p>
                                                    </Col>
                                                    <Col>
                                                        <h6 className="mb-1">2749</h6>
                                                        <p className="mb-0">Followers</p>
                                                    </Col>
                                                    <Col>
                                                        <h6 className="mb-1">678</h6>
                                                        <p className="mb-0">Following</p>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={6}>
                                        <Card className='user-card user-card-1'>
                                            <Card.Header className='border-0 p-2 pb-0'>
                                                <div className="cover-img-block">
                                                    <img src={slider7} alt="" className="img-fluid"/>
                                                </div>
                                            </Card.Header>
                                            <Card.Body className='pt-0'>
                                                <div className="user-about-block text-center">
                                                    <Row className="align-items-end">
                                                        <Col/>
                                                        <Col>
                                                            <div className="position-relative d-inline-block">
                                                                <img className="img-radius img-fluid wid-80" src={avatar1} alt="User"/>
                                                                <div className="certificated-badge">
                                                                    <i className="fas fa-certificate text-c-blue bg-icon"/>
                                                                    <i className="fas fa-check front-icon text-white"/>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col/>
                                                    </Row>
                                                </div>
                                                <div className="text-center">
                                                    <h6 className="mb-1 mt-3">John Doe</h6>
                                                    <p className="mb-3 text-muted">UI/UX Designer</p>
                                                    <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                    <p className="mb-0">been the industry's standard</p>
                                                </div>
                                                <hr className="wid-80 b-wid-3 my-4"/>
                                                <Row className="text-center">
                                                    <Col>
                                                        <h6 className="mb-1">37</h6>
                                                        <p className="mb-0">Mails</p>
                                                    </Col>
                                                    <Col>
                                                        <h6 className="mb-1">2749</h6>
                                                        <p className="mb-0">Followers</p>
                                                    </Col>
                                                    <Col>
                                                        <h6 className="mb-1">678</h6>
                                                        <p className="mb-0">Following</p>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                            <Card.Body className='hover-data text-white btn-page'>
                                                <div className="">
                                                    <h4 className="text-white">Hire Me?</h4>
                                                    <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                    <p className="mb-3">been the industry's standard</p>
                                                    <button type="button" className="btn waves-effect waves-light btn-warning"><i className="feather icon-link"/> Meating</button>
                                                    <button type="button" className="btn waves-effect waves-light btn-danger"><i className="feather icon-download"/> Resume</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={6}>
                                        <Card className='user-card user-card-2 shape-center'>
                                            <Card.Header className='border-0 p-2 pb-0'>
                                                <div className="cover-img-block">
                                                    <Carousel indicators={false}>
                                                        <Carousel.Item>
                                                            <img src={slider6} alt="" className="img-fluid"/>
                                                        </Carousel.Item>
                                                        <Carousel.Item>
                                                            <img src={slider7} alt="" className="img-fluid"/>
                                                        </Carousel.Item>
                                                        <Carousel.Item>
                                                            <img src={slider5} alt="" className="img-fluid"/>
                                                        </Carousel.Item>
                                                    </Carousel>
                                                </div>
                                            </Card.Header>
                                            <Card.Body className='pt-0'>
                                                <div className="user-about-block text-center">
                                                    <Row className="align-items-end">
                                                        <Col className='text-left pb-3'>
                                                            <a href={DEMO.BLANK_LINK} className='text-c-yellow'><i className="icon feather icon-star text-c-yellow f-20"/></a>
                                                        </Col>
                                                        <Col><img className="img-radius img-fluid wid-80" src={avatar5} alt="User"/></Col>
                                                        <Col className='text-right pb-3'>
                                                            <Dropdown>
                                                                <Dropdown.Toggle variant="link" id="dropdown-basic" className='drp-icon text-muted'>
                                                                    <i className="feather icon-more-horizontal"/>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Action</Dropdown.Item>
                                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Another action</Dropdown.Item>
                                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Something else</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className="text-center">
                                                    <h6 className="mb-1 mt-3">Suzen</h6>
                                                    <p className="mb-3 text-muted">UI/UX Designer</p>
                                                    <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                    <p className="mb-0">been the industry's standard</p>
                                                </div>
                                                <hr className="wid-80 b-wid-3 my-4"/>
                                                <Row className="text-center">
                                                    <Col>
                                                        <h6 className="mb-1">37</h6>
                                                        <p className="mb-0">Mails</p>
                                                    </Col>
                                                    <Col>
                                                        <h6 className="mb-1">2749</h6>
                                                        <p className="mb-0">Followers</p>
                                                    </Col>
                                                    <Col>
                                                        <h6 className="mb-1">678</h6>
                                                        <p className="mb-0">Following</p>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                            <div className={this.state.activeProfileTab === 'gallery' ? profilePanActiveClass : profilePanClass} id='gallery'>
                                <Gallery images={[
                                    {src: image1, thumbnail: thumb1, caption:"Gallery Image 1", useForDemo:true},
                                    {src: image2, thumbnail: thumb2, caption:"Gallery Image 2", useForDemo:true},
                                    {src: image3, thumbnail: thumb3, caption:"Gallery Image 3", useForDemo:true},
                                    {src: image4, thumbnail: thumb4, caption:"Gallery Image 4", useForDemo:true},
                                    {src: image5, thumbnail: thumb5, caption:"Gallery Image 5", useForDemo:true},
                                    {src: image6, thumbnail: thumb6, caption:"Gallery Image 6", useForDemo:true}
                                ]} backdropClosesModal />
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='order-md-1'>
                        <Card>
                            <Card.Header className='d-flex align-items-center justify-content-between'>
                                <h5 className="mb-0">Friends</h5>
                                <span className="badge badge-light-primary float-right">100+</span>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href={DEMO.BLANK_LINK}><img src={avatar1} alt="user" className="img-radius mb-2 wid-50" data-toggle="tooltip" title="Joseph William"/></a></li>
                                    <li className="list-inline-item"><a href={DEMO.BLANK_LINK}><img src={avatar2} alt="user" className="img-radius mb-2 wid-50" data-toggle="tooltip" title="Sara Soudein"/></a></li>
                                    <li className="list-inline-item"><a href={DEMO.BLANK_LINK}><img src={avatar3} alt="user" className="img-radius mb-2 wid-50" data-toggle="tooltip" title="John Doe"/></a></li>
                                    <li className="list-inline-item"><a href={DEMO.BLANK_LINK}><img src={avatar4} alt="user" className="img-radius mb-2 wid-50" data-toggle="tooltip" title="Joseph William"/></a></li>
                                    <li className="list-inline-item"><a href={DEMO.BLANK_LINK}><img src={avatar5} alt="user" className="img-radius wid-50" data-toggle="tooltip" title="Sara Soudein"/></a></li>
                                    <li className="list-inline-item"><a href={DEMO.BLANK_LINK}><img src={avatar1} alt="user" className="img-radius wid-50" data-toggle="tooltip" title="Joseph William"/></a></li>
                                    <li className="list-inline-item"><a href={DEMO.BLANK_LINK}><img src={avatar2} alt="user" className="img-radius wid-50" data-toggle="tooltip" title="Sara Soudein"/></a></li>
                                    <li className="list-inline-item"><a href={DEMO.BLANK_LINK}><img src={avatar3} alt="user" className="img-radius wid-50" data-toggle="tooltip" title="John Doe"/></a></li>
                                </ul>
                            </Card.Body>
                        </Card>
                        <Card className='new-cust-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Message</Card.Title>
                            </Card.Header>
                            <div style={{height: '415px'}}>
                                <PerfectScrollbar>
                                    <Card.Body className='p-b-0'>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar1} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>Alex Thompson</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar2} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>John Doue</h6>
                                                </a>
                                                <p className="m-b-0">stay hungry stay foolish!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar3} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>Alex Thompson</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status deactive"><i className="far fa-clock m-r-10"/>30 min ago</span>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar4} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>John Doue</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status deactive"><i className="far fa-clock m-r-10"/>10 min ago</span>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar5} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>Shirley Hoe</h6>
                                                </a>
                                                <p className="m-b-0">stay hungry stay foolish!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar1} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>John Doue</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar2} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>James Alexander</h6>
                                                </a>
                                                <p className="m-b-0">stay hungry stay foolish!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar3} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>John Doue</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status deactive"><i className="far fa-clock m-r-10"/>10 min ago</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </PerfectScrollbar>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default UserProfile