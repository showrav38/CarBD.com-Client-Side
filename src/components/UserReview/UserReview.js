import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';

const UserReview = () => {
  const { user } = useAuth();
  const history = useHistory();

  const reviewRef = useRef();
  const ratingRef = useRef();
  const imgRef = useRef();

  const newUser = {};
  newUser.userNameWhoOrdered = user.displayName;
  newUser.email = user.email;
  newUser.userid = user.uid;

  console.log(newUser);

  const handleAddUser = e => {
    const review = reviewRef.current.value;
    const rating = ratingRef.current.value;
    const img = imgRef.current.value;
    newUser.userReview = review;
    newUser.userRating = rating;
    newUser.profilePic = img;
    fetch('https://calm-anchorage-33077.herokuapp.com/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('successfully added the user');
          // history.push('/uReview');
          window.location.reload();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Dashboard></Dashboard>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <h2 class="mt-3 text-primary text-center">Give your Review</h2>
            {/* <form onSubmit={handleAddUser} className="row g-3 "> */}
            <form onSubmit={handleAddUser} className="row g-3 ">
              <div class="col-12 col-md-6 mx-auto">
                <label for="inputName1" class="form-label fw-bold">
                  Profile Pic Link
                </label>
                <input type="text" class="form-control" placeholder='your profile pic link' id="inputName1" ref={imgRef} required />
                <label for="inputName4" class="form-label fw-bold mt-3">
                  Review
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="inputName4"
                  ref={reviewRef}
                  placeholder='type your review'
                  required
                />
                <label for="inputContact4" class="form-label fw-bold mt-3">
                  Rating
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputContact4"
                  ref={ratingRef}
                  placeholder='from 1 to 5' 
                  required
                />
                <button type="submit" class="btn btn-primary mt-3">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
