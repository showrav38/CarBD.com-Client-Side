import React from 'react';
import Rating from 'react-star-rating-lite';
import { Card, Col } from 'react-bootstrap';
import './Review.css';
import avatar from '../../image/avatar2.jpg';
const Review = props => {
  const { review } = props;
  console.log(review);
  const { id, userReview, userRating,profilePic,userNameWhoOrdered } = review;
  return (
    <div className="item col-md-4">
      <div className="testimonial-wrapp">
        {' '}
        <span className="quoted">
          <i className="fa fa-quote-right" />
        </span>
        <div className="testimonial-text">
          <p className="bottom40">
            {userReview}
          </p>
        </div>
        <div className="testimonial-photo">
          <img alt="" src={profilePic} />
        </div>
        <div>
          <Rating color="orange" weight='24' value={userRating} readonly />
        </div>
        <Card.Title className="fw-bold text-white" style={{ background: '#643094' }}>
          Rating: {userRating}
        </Card.Title>
        <h4 className="darkcolor">{userNameWhoOrdered}</h4>
        <small className="defaultcolor">Businessman</small>{' '}
      </div>
    </div>

    /* <div className="resPadd" >
            <Col >
                <Card style={{ fontSize: 'larger', width: '350px', margin: '20px' }}>
                    <Card.Body>
                        <div>
                            <Rating value={userRating} readonly />

                        </div>

                        <Card.Title className="bg-dark fw-bold text-white">Rating: {userRating}</Card.Title>
                        <Card.Text style={{ color: 'black', fontWeight: '', height: '' }} > {userReview} </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div > */
  );
};

export default Review;
