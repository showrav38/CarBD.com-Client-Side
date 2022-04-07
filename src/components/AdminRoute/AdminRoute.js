import React, { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminRoute = props => {
  const { user, newLoading, admin } = useAuth();
  const { children, ...rest } = props;
  console.log(newLoading, admin);
  const [isLoading, setIsLoading] = useState(false);
  // const [isData, setIsData] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      fetch(`https://calm-anchorage-33077.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('userDetails', JSON.stringify(data));
        })
        .finally(() => setIsLoading(false));
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="test10">
        <Spinner animation="border" />;
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};
export default AdminRoute;
/* const { user, loading, admin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (user) {
      setIsLoading(true);
      fetch(`http://localhost:3005/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('userDetails', JSON.stringify(data));
        })
        .finally(() => setIsLoading(false));
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="test10">
        <Spinner animation="border" />;
      </div>
    );
  }
  const userDetails = localStorage.getItem('userDetails')
    ? JSON.parse(localStorage.getItem('userDetails') || '{}')
    : { role: '', email: '' };
  console.log(user.email, admin);
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        admin===true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  ); */
