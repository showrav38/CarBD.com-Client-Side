import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div>
      <div class="about-us container-fluid">
        <div>
          <h1 className="text-center mt-5 mb-5">About Us</h1>
        </div>
        <div class="container-fluid">
          <div class="row m-b-n30 align-items-center">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div class="col-md-5 order-first m-b-30">
                  <div class="about-image service-layer-image ">
                    <img
                      class="about-image-1 img-fluid"
                      src="https://template.hasthemes.com/triball/triball/assets/images/about/about-2.png"
                      alt="About Image"
                      style={{ width: '320px' }}
                    />
                    <img
                      class="about-image-2 img-fluid"
                      src="https://template.hasthemes.com/triball/triball/assets/images/about/about-3.png"
                      alt="About Image"
                      style={{ width: '300px' }}
                    />
                  </div>
                </div>
                <div /* style={{ marginLeft: '48px' }} */ class="col-md-6 order-lg-last pc">
                  <div class="about-content mw-100">
                    <div class="banner-content section-heading">
                      <h3 style={{ color: '#643094' }}>CarBd.Com</h3>
                      <h5 class="banner-title">Car Sensation Since 1971. </h5>
                      <div class="title-icon-divider">
                        <i class="fas fa-suitcase-rolling"></i>
                      </div>
                    </div>
                    <h2 class="title">
                      Fast Service, Talented People <br /> Secure Payment.
                    </h2>
                    <p>
                      Best car service provider of bangladesh from the very beginning of the
                      country.We are determined and committed to our customer for providing best
                      service. Best car service provider of bangladesh from the very beginning of
                      the country.We are determined and committed to our customer for providing best
                      service. Best car service provider of bangladesh from the very beginning of
                      the country.We are determined and committed to our customer for providing best
                      service.....
                    </p>
                    <div className="mt-3 mb-view">
                    <NavLink to="/about" className="btn-get-started">
                      Read More
                    </NavLink>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

/* <div id="about" className="p-5 ">
            <Container className="p-3">
                <Row>
                    <Col xs={12} md={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/2fiPzzYsCBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col >
                    <Col xs={12} md={6}>
                        <h2 className="text-C">Our Goal</h2>
                        <p className="textP">
                            Our goal is to provide sustainable and effective Car  delivery service by following these 3 targets are like appropriate access in the site for the premium Car demo , assurance of quality workforce, services and acceptable cost to public</p>
                        <p className="textP">Every dealership's primary goal is to sell cars, helping to increase your chances for success, try setting goals that are specific, measurable, attainable, realistic and time-based (SMART). We are promised to keep track of our performance will give you a better grasp on what to improve</p>
                    </Col>

                </Row >
            </Container >
        </div > */

{
  /* <div class="section section-margin about-us">
      <div class="container-fluid">
        <div class="row m-b-n30 align-items-center">
          <div className="col-md-10 mx-auto">
            <div className="row">
              <div class="col-md-5 order-first m-b-30">
                <div class="about-image service-layer-image ">
                  <img
                    class="about-image-1 img-fluid"
                    src="https://template.hasthemes.com/triball/triball/assets/images/about/about-2.png"
                    alt="About Image"
                    style={{width:'320px'}}
                  />
                  <img
                    class="about-image-2 img-fluid"
                    src="https://template.hasthemes.com/triball/triball/assets/images/about/about-3.png"
                    alt="About Image"
                    style={{width:'300px'}}
                  />
                </div>
              </div>
              <div class="col-md-6 m-b-30 order-lg-last">
                <div class="about-content mw-100">
                  <div class="banner-content section-heading">
                    <h5>O NAMA</h5>
                    <h4 class="banner-title">NAŠA MISIJA JE NULTA EMISIJA</h4>
                    <div class="title-icon-divider">
                      <i class="fas fa-suitcase-rolling"></i>
                    </div>
                  </div>
                  <h2 class="title">
                    Fast Service, Talented People <br /> Secure Payment
                  </h2>
                  <p>
                    Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur mag ni dolores
                    eos qui ratione voluptatem sequi nesciunt. Neque porro quisq uam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur some of the main Problems some of
                    the main need more imporvement to solve the business policy
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */
}
