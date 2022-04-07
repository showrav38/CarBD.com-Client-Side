import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './More.css';

const More = () => {
    return (
        <div id="more" className="margin">
            <h2 className="p-5">Premium Services</h2>
            <Container className="p-3">
                <Row>
                    <Col xs={12} md={6}>
                        <h2 className="text-C pb-4">Feed Back Zone</h2>
                        <form className=" text-dark row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputName4" className="form-label">Name</label>
                                <input type="text" className="form-control" id="inputName4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputContact4" className="form-label">Contact Number</label>
                                <input type="number" className="form-control" id="inputContact4" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputProblem" className="form-label">Your Feedback</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>

                            <div className="col-12 pb-2">
                                <Button variant="primary"><Link style={{ margin: '10px', textDecoration: 'none', color: 'white' }} to="/"> Submit</Link></Button>{' '}
                            </div>
                        </form>
                    </Col >
                    <Col xs={12} md={6} style={{ backgroundColor: '' }}>
                        <Row className=" text-C b-4">
                            <Col xs={12} md={12} className="p-2">
                                <h2> Running Offer(30% OFF)</h2>
                                <div className="container">
                                    <img className="paddingImg" src="https://demo.hasthemes.com/aahar-preview/aahar/images/beef/2.jpg" alt="Snow" width="450px" height="400px" />
                                    <div className="fs-1 fw-bolder text-black-50 centered">Buy 3 and grab 30% OFF</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row >
            </Container >
        </div >
    );
};

export default More;