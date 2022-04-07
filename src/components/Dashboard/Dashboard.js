import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logOut, admin } = useAuth();
  console.log(admin);

  return (
    <div className="container">
      <h2 className="text-center m-3">Please Choose Your Option</h2>
      <div className="row">
      
          {!admin && (
            <div
              class="btn-group pt-3 mbl1"
              style={{ display: 'flex', justifyContent: 'center' }}
              aria-label="Basic example"
            >
              <div class="m-3">
                <Link to="/pay">
                  {' '}
                  <button type="button" class="btn btn-primary ">
                    Pay
                  </button>
                </Link>
              </div>
              <div class="m-3">
                <Link to="/myOrders">
                  <button type="button" class="btn btn-primary ">
                    Myorder
                  </button>
                </Link>
              </div>
              <div class="m-3">
                <Link to="/uReview">
                  {' '}
                  <button type="button" class="btn btn-primary ">
                    Review
                  </button>
                </Link>
                <br />
              </div>
              <div class="m-3">
                <Link to="/home">
                  {' '}
                  <button onClick={logOut} type="button" class="btn btn-primary ">
                    Log Out
                  </button>
                </Link>
              </div>
            </div>
          )}
        
      </div>

      {admin && (
        <div class="btn-group pt-3 mbl1" aria-label="Basic example">
          <div class="m-1">
            <Link to="/manage">
              {' '}
              <button type="button" class="btn btn-primary ">
                Manage all Orders
              </button>
            </Link>
          </div>
          <div class="m-1">
            <Link to="/addService">
              {' '}
              <button type="button" class="btn btn-primary ">
                Add product
              </button>
            </Link>
          </div>
          <div class="m-1">
            <Link to="/makeAdmin">
              {' '}
              <button type="button" class="btn btn-primary ">
                Make Admin
              </button>
            </Link>
          </div>
          <div class="m-1">
            <Link to="/managePro">
              {' '}
              <button type="button" class="btn btn-primary ">
                Manage Products
              </button>
            </Link>
          </div>
          <div class="m-1">
            <Link to="/home">
              {' '}
              <button onClick={logOut} type="button" class="btn btn-primary ">
                Log Out
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
