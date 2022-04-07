import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
  return (
    <footer id="footer" class="footer-1 mt-5">
      <div class="main-footer widgets-dark typo-light">
        <div class="container">
          <div class="row text-left text-start">
            <div class="col-xs-12 col-sm-6 col-md-3 text-start">
              <div class="widget subscribe no-box">
                <h5 style={{color:'#3498db'}} class="widget-title text-start">
                  CarBD.Com<span></span>
                </h5>
                <p>One of the most renowned car seller company in Bangladesh.</p>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">
                  Quick Links<span></span>
                </h5>
                <ul class="thumbnail-widget">
                  <li>
                    <div class="thumb-content">
                      <a href="#.">New Car</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Old Car</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Car Servicing</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Event/Tickets</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">News</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Lifestyle</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">About</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">
                  Get Started<span></span>
                </h5>
                <p>Get access to your full Training and Marketing Suite.</p>
                <a class="btn newbtn" href="https://bit.ly/3m9avif" target="_blank">
                  Subscribe Now
                </a>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">
                  Contact Us<span></span>
                </h5>

                <p>
                  <a href="mailto:info@domain.com" title="glorythemes">
                    carbd@domain.com
                  </a>
                </p>
                <ul class="social-footer2">
                  <li class="">
                    <a title="youtube" target="_blank" href="https://bit.ly/3m9avif">
                      <i style={{fontSize:'25px',color:'orange'}} class="fa fa-youtube-square "></i>
                    </a>
                  </li>
                  <li class="">
                    <a href="https://www.facebook.com/" target="_blank" title="Facebook">
                      <i style={{fontSize:'25px'}} class="fa fa-facebook-square"></i>
                    </a>
                  </li>
                  <li class="">
                    <a href="https://twitter.com" target="_blank" title="Twitter">
                      <i style={{fontSize:'25px',color:'blue'}} class="fa fa-twitter-square"></i>
                    </a>
                  </li>
                  <li class="">
                    <a title="instagram" target="_blank" href="https://www.instagram.com/">
                      <i style={{fontSize:'25px',color:'white'}} class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <p><span style={{color:'#3498db'}}>CarBd.com </span>© 2021. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* <footer class="footer-bs">
      <div class="row">
        <div class="col-md-3 footer-brand animated fadeInLeft">
          <h2>Logo</h2>
          <p>
            Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec
            ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim,
            porta pellentesque ex mi ut sem.
          </p>
          <p>© 2014 BS3 UI Kit, All rights reserved</p>
        </div>
        <div class="col-md-4 footer-nav animated fadeInUp">
          <h4>Menu —</h4>
          <div class="col-md-6">
            <ul class="pages">
              <li>
                <a href="#">Travel</a>
              </li>
              <li>
                <a href="#">Nature</a>
              </li>
              <li>
                <a href="#">Explores</a>
              </li>
              <li>
                <a href="#">Science</a>
              </li>
              <li>
                <a href="#">Advice</a>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 footer-social animated fadeInDown">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">RSS</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 footer-ns animated fadeInRight">
          <h4>Newsletter</h4>
          <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
          <p>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for..." />
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">
                  <span class="glyphicon glyphicon-envelope"></span>
                </button>
              </span>
            </div>
          </p>
        </div>
      </div>
    </footer> */
