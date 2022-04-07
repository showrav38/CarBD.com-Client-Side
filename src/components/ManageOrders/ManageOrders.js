import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';
import { useLocation } from 'react-router';
import './ManageOrders.css';

const ManageOrders = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_url = window.location.href || '/home';

  const { user } = useAuth();
  const uid = user.uid;
  console.log(uid);
  const [orderedAll, setOrderedAll] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    const url = 'https://calm-anchorage-33077.herokuapp.com/orders';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setOrderedAll(data);
        console.log(orderedAll);
      });
  }, []);

  const handleDeleteUser = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    console.log(id);
    if (proceed) {
      const url = `https://calm-anchorage-33077.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: 'DELETE',
      }).then(res =>
        res.json().then(data => {
          if (data.deletedCount > 0) {
            alert('deleted successfully');
          }
          const remainingUsers = orderedAll.filter(order => order._id !== id);
          setOrderedAll(remainingUsers);
        })
      );
    }
  };
  const handleUpdateUser = id => {
    const proceed = window.confirm('Are you sure, you want to approve?');
    console.log(id);
    if (proceed) {
      const url = `https://calm-anchorage-33077.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          if (data.modifiedCount > 0) {
            alert('approved successfully');
            // window.location.href = '';
            // history.push(redirect_url);
            window.location.reload();
          }
        });
    }
  };

  return (
    <div>
      <Dashboard></Dashboard>
      <div className="pt-4 bt-4 mt-4 fw-bolder table-responsive">
        <h2 className="pt-4 bt-4 mt-4 text-center">Manage Order</h2>

        <table className="table w-75 mx-auto  ">
          <thead>
            <tr>
              <th scope="col">Order Name</th>
              <th scope="col">Order Status</th>
              <th scope="col">Order Delete</th>
              <th scope="col">Pending status Change</th>
              <th scope="col">Price</th>
              <th scope="col">Buyer Name</th>
              <th scope="col">Buyer Address</th>
              <th scope="col">Buyer Contact</th>
            </tr>
          </thead>
          {orderedAll.map(order => (
            <tbody key={order._id}>
              <tr className="table-primary">
                <td>{order.name}</td>
                <td>{order.orderStatus}</td>
                <td>
                  {' '}
                  <button
                    className="my-2 btn btn-primary"
                    onClick={() => handleDeleteUser(order._id)}
                  >
                    {' '}
                    Delete
                  </button>
                </td>
                <td>
                  {order.orderStatus === 'pending' ? (
                    <button
                      className="my-2 btn btn-primary"
                      onClick={() => handleUpdateUser(order._id)}
                    >
                      {' '}
                      Approve it
                    </button>
                  ) : (
                    ''
                  )}
                </td>
                <td>{order.price}</td>
                <td>{order.userNameWhoOrdered}</td>
                <td>{order.userAddress}</td>
                <td>{order.userContact}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
