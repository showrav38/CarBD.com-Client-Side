import React from 'react';
import { NavLink } from 'react-router-dom';
import './Contact.css';
const Contact = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          {/* <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <h2 class="form-title">Get in Touch</h2>
          </div> */}
          <div className="my-4 formb">
            <h1 className="text-center">Contact Us</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form
              id="contact-form"
              name="myForm"
              class="form"
              action="#"
              onsubmit="return validateForm()"
              method="POST"
              role="form"
            >
              <div class="form-group">
                <label class="form-label" id="nameLabel" for="name"></label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  tabindex="1"
                />
              </div>

              <div class="form-group">
                <label class="form-label" id="emailLabel" for="email"></label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  tabindex="2"
                />
              </div>

              <div class="form-group">
                <label class="form-label" id="subjectLabel" for="sublect"></label>
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  tabindex="3"
                />
              </div>

              <div class="form-group">
                <label class="form-label" id="messageLabel" for="message"></label>
                <textarea
                  rows="6"
                  cols="60"
                  name="message"
                  class="form-control"
                  id="message"
                  placeholder="Your message"
                  tabindex="4"
                ></textarea>
              </div>

              <div class="text-center margin-top-25">
                <div className="mt-3 mb-view">
                  <NavLink to="/explore" className="btn-get-started">
                    Send Message
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
