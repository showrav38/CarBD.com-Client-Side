import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';
// import '../../index.css'
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div id='new1'className="test12">
      <div className="container-fluid nav_bg">
        <div className="row" style={{ backgroundColor: 'aliceblue' }}>
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink exact className="navbar-brand" to="/">
                  CarBD.com
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link test1"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link test1"
                        to="/explore"
                      >
                        Explore
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" className="nav-link test1" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link test1"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                    {user?.displayName && (
                      <>
                        <li className="nav-item">
                          <NavLink
                            activeClassName="menu_active"
                            className="nav-link test1"
                            to="/dashboard"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        {/* <li className="nav-item">
                          <NavLink
                            activeClassName="menu_active"
                            className="nav-link test1"
                            to="/myorder"
                          >
                            Myorder
                          </NavLink>
                        </li> */}
                      </>
                    )}
                    <li className="nav-item">
                      {user?.email ? (
                        <NavLink className="nav-link test1" to="/">
                          <button className="btn btn-primary" onClick={logOut}>
                            LogOut
                          </button>
                        </NavLink>
                      ) : (
                        <NavLink className="nav-link test1" to="/login">
                          <button className="btn btn-primary">Log in</button>
                        </NavLink>
                      )}
                    </li>
                    {user?.displayName && (
                      <a
                        style={{
                          fontSize: '16px',
                          textDecoration: 'none',
                          color: 'black',
                          textAlign: 'right',
                          marginTop: '14px',
                        }}
                        href="#"
                      >
                        user:{user?.displayName}
                      </a>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

/* import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="" style={{ height: '', backgroundColor: '#565555' }} variant="dark" fixed="top" collapseOnSelect expand="lg" className="border-bottom border-2 border-white">
                <Container>
                    <NavLink as={Link} to="/" style={{ textDecoration: 'none' }}><h3 className="textExtra"><span id="textMain"> MyCar </span>Services</h3></NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center " style={{ height: '', backgroundColor: '#565555' }}>
                        <Nav.Link as={HashLink} to="/home#home" style={{ margin: '10px', textDecoration: 'none', color: 'white' }} >Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/explore" style={{ margin: '10px', textDecoration: 'none', color: 'white' }} >Explore</Nav.Link>

                        {user?.displayName ?
                            <div style={{ width: '400px' }}>
                                <div class="row">
                                    <div class="col">
                                        <Nav.Link as={Link} to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}
                                        >Dashboard</Nav.Link>
                                    </div>
                                    <div class="col">
                                        <NavLink as={Link} to="/manage" style={{ textDecoration: 'none', color: 'white' }}
                                        >Manage Order</NavLink>
                                    </div>
                                    <div class="col">
                                        <NavLink as={Link} to="/addService" style={{ textDecoration: 'none', color: 'white' }}
                                        >Add Services</NavLink>
                                    </div>
                                    <div class="col">
                                        <Button onClick={logOut} variant="light">Logout</Button>
                                    </div>
                                </div>

                            </div>
                            :
                            <NavLink as={Link} to="/login" style={{ margin: '10px', textDecoration: 'none', fontWeight: "bold", color: 'goldenrod' }}
                            >Login</NavLink>}
                        <Navbar.Text>
                            {user.displayName &&
                                <a href="/login" style={{ textDecoration: 'none', paddingLeft: '5px', color: 'yellow', fontWeight: 'bold' }}>User: {user?.displayName}</a>}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header; */
