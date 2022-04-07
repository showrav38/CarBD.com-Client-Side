import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import UseDataR from '../../hooks/UseDataR';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews] = UseDataR();

  console.log(reviews);

  return (
    <div style={{ backgroundColor: 'rgb(255,255,255)' }}>
      <section id="our-testimonial" className="padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              <div className="heading-title bottom30 wow fadeInUp" data-wow-delay="300ms">
                {' '}
                <div className="mt-5 formb">
                  <h1 className="text-center">Our Customer Review</h1>
                </div>
                {/* <h2 style={{ color: 'rgb(255, 115, 0) ' }}>What People Say</h2> */}
              </div>
            </div>
          </div>
          <div className="row">
            {reviews.length === 0 ? (
              <Spinner animation="border" className="mx-auto mb-2" />
            ) : (
              <div className="container-fluid">
                <div className="row">
                  <div className="col-10 mx-auto">
                    <div className="row">
                      {reviews.map(review => (
                        <Review key={review._id} review={review}></Review>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
    /* <div id="BikeServices" className="backgroundServices">
            <div>
                <h2 className="p-5 textCol">Customer Reviews</h2>
                <div className="service-container">
                    {
                        reviews.length === 0 ?
                            <Spinner animation="border" className="mx-auto mb-2" /> :
                            <Row xs={1} md={3} className="g-4 pb-4 px-4">
                                {
                                    reviews.map(review => <Review key={review._id}
                                        review={review}></Review>)
                                }
                            </Row>
                    }
                </div>
            </div>
        </div> */
  );
};

export default Reviews;

// const firebaseConfig = {
//     apiKey: "AIzaSyClRhEZKtpaCzGiOreUPz9q35YOcrJoCq8",
//     authDomain: "assignment-12-220dc.firebaseapp.com",
//     projectId: "assignment-12-220dc",
//     storageBucket: "assignment-12-220dc.appspot.com",
//     messagingSenderId: "932073037778",
//     appId: "1:932073037778:web:dae7e58d116810426ff20b"
// };
// export default firebaseConfig;
