import React from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import './Banner.css';
import web from '../../image/car.png'

const Banner = () => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-md-1 d-flex justify-content-center flex-column cab">
                  <h1>
                    Buy Your Car From <strong className="brand-name"> CarBD.Com</strong>
                  </h1>
                  <h2 className="my-3">One of the most renowned Car seller in Bangladesh.</h2>
                  <div className="mt-3 mb-view">
                    <NavLink to="/explore" className="btn-get-started">
                      Explore
                    </NavLink>
                  </div>
                </div>

                <div className="col-md-6 order-1 order-md-2 header-img animated">
                  <img src={web} className="img-fluid size " alt="home img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

/* <div>
      <div className="banner-container">
        <div className="">
          <div className="row d-flex banner align-items-center justify-content-center">
            <div className="container">
              <div className="col-md-8 text-center">
               
                <h1 className="title">
                  MyCar Services Limited
                  <br />
                  Where Best car service has the most Priority.
                </h1>

               
                <p className="text-white text-center mt-3">
                  One of the best car selling company in Bangladesh,the most experienced service providers with
                  <br />
                  there vast of knowlendge and experinece.
                </p>

                
                <Link to="/explore">
                  <button className="mt-3 about-btn">Explore Car</button>
                </Link>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div> */

/* import React from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            
            <Card className=" p-5 bt-4 mt-4">
                <Container className="p-3 ">
                    <Row>
                        <Col xs={12} md={3} className="pt-5 mb-2">
                            <h1 className="textColor">Welcome to <span style={{ color: '#F76C22' }}>CarMax</span> PlatForm</h1>
                            <Button variant="danger"><Link style={{ margin: '10px', textDecoration: 'none', color: 'white' }} to="/explore"> Explore and Order</Link></Button>{' '}
                        </Col>
                        <Col xs={12} md={9}>
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img
                                        style={{ height: '400px', width: '550px' }}
                                        className="d-block w-100"
                                        src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption >
                                        <h5 className="fw-bold" style={{ color: 'black' }}>Quality Care</h5>
                                        <p>
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: '400px', width: '550px' }}
                                        className="d-block w-100"
                                        src="https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h5 className="fw-bold" style={{ color: 'black' }}>Quality Care</h5>
                                        <p>
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: '400px', width: '550px' }}
                                        className="d-block w-100"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkCO4ivr8ekmy7mwlk0HdBVPZJMhfnclepA&usqp=CAU"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h5 style={{ color: 'black' }}>Quality Care</h5>
                                        <p>
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>

    );
};

export default Banner; */
