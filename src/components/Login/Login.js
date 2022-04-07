import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    signInUsingEmailandPassword,
    saveUser,
    auth,
    user,
    error,
    setUser,
    setError,
    loading,
    setLoading,
  } = useAuth();

  const alerts = () => {
    alert('Currently Not available please use google sign in');
  };

  // taking location for redirecting
  const location = useLocation();
  const redirect_url = location.state?.from || '/home';

  const history = useHistory();

  const handleGoogleLoginRedirect = () => {
    signInWithGoogle()
      .then(result => {
        setUser(result.user);
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setError('');
        history.push(redirect_url);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleLogin = e => {
    e.preventDefault();
    console.log(email, password);
    signInUsingEmailandPassword(email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        history.push(redirect_url);
        setError('');
      })
      .catch(error => {
        setError('Wrong Email/Password');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
  const { signInWithGoogle } = useAuth();
  return (
    <div>
      <div className="body">
        <div class="container">
          <div class="row px-3">
            <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
              <div class="img-left d-none d-md-flex"></div>
              <div class="card-body">
                <h4 class="titles text-center mt-1">Login into account</h4>
                <form onClick={handleLogin} class="form-box px-3">
                  <div class="form-input">
                    <span>
                      <i class="fa fa-envelope-o"></i>
                    </span>
                    <input
                      onBlur={handleEmailChange}
                      type="email"
                      name=""
                      placeholder="Email Address"
                      tabindex="10"
                      required
                    />
                  </div>
                  <div class="form-input">
                    <span>
                      <i class="fa fa-key"></i>
                    </span>
                    <input
                      onBlur={handlePasswordChange}
                      type="password"
                      name=""
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <hr class="my-4" />

                    <div class="text-center mb-2">
                      Don't have an account?
                      <Link to="/register" class="register-link">
                        Register here
                      </Link>
                    </div>
                  </div>

                  <div class="mb-3">
                    <button
                      type="submit"
                      style={{ width: '100%' }}
                      class="btn btn-block text-uppercase"
                    >
                      Login
                    </button>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <a href="#" class="forget-link">
                      Forget Password?
                    </a>
                  </div>

                  <div class="text-center mb-3">or login with</div>

                  <div class="row mb-3">
                    <div style={{ fontSize: '20px' }} class="col-4">
                      <a onClick={alerts} href="#" class="btn btn-block btn-facebook">
                        <i
                          style={{ fontSize: '50px', color: 'blue' }}
                          class="fa fa-facebook-square btn-facebook"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>

                    <div class="col-4">
                      <a onClick={handleGoogleLoginRedirect} class="btn btn-block">
                        <i
                          style={{ fontSize: '50px', color: 'goldenrod' }}
                          class="fa fa-google btn-google"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>

                    <div class="col-4">
                      <a onClick={alerts} class="btn btn-block">
                        <i
                          style={{ fontSize: '50px', color: '#2eb7e5' }}
                          class="fa fa-twitter-square  btn-twitter"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

/* <div >
            <div className="login-container">
                <h2 className="display-5 text-primary mt-4">Please Login</h2>
                <div className="login-form">
                    <div>
                        <form onSubmit={handleLogin} className="w-50 mx-auto my-5">
                            <div className="form-group row mt-5">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10 mb-4">
                                    <input onBlur={handleEmailChange} type="email" className="form-control" id="staticEmail" placeholder="Enter email" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10 mb-2">
                                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="form-group row"><p className="text-danger"></p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <h5>{error}</h5>
                                <div> <input className="btn btn-dark ms-4 me-4" type="submit" value="Login" /></div>
                                <div>
                                    <button className="button" onClick={handleGoogleLoginRedirect}><span className="google-icon">{googleIcon}</span></button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div >

                <h3 className="fw-light text-success mt-5">Not Registered?</h3>
                <Link to="/register">Click Here to Register</Link>
            </div>
        </div> */

// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useHistory, useLocation } from 'react-router';
// import './Login.css';
// import useAuth from '../../hooks/useAuth';

// const Login = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const { signInUsingEmailandPassword, user, setUser, setError, error } = useAuth();

//     // taking location for redirecting
//     const location = useLocation();
//     const redirect_url = location.state?.from || '/home';

//     const history = useHistory();

//     const handleGoogleLoginRedirect = () => {
//         signInWithGoogle()
//             .then(result => {
//                 setUser(result.user);
//                 history.push(redirect_url);
//             })
//     }

//     const handleEmailChange = e => {
//         setEmail(e.target.value);

//     }
//     const handlePasswordChange = e => {
//         setPassword(e.target.value);
//     }
//     const handleLogin = e => {
//         e.preventDefault();
//         console.log(email, password);
//         signInUsingEmailandPassword(email, password)
//             .then((userCredential) => {
//                 setUser(userCredential.user);
//                 history.push(redirect_url);
//                 setError('');
//             })
//             .catch((error) => {
//                 setError(error.message);
//             });;

//     }

//     const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
//     const { signInWithGoogle } = useAuth();
//     return (
//         <div >
//             <div className="login-container">
//                 <h2 className="display-5 text-primary mt-4">Please Login</h2>
//                 <div className="login-form">
//                     <div>
//                         <form onSubmit={handleLogin} className="w-50 mx-auto my-5">
//                             <div className="form-group row mt-5">
//                                 <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
//                                 <div className="col-sm-10 mb-4">
//                                     <input onBlur={handleEmailChange} type="email" className="form-control" id="staticEmail" placeholder="Enter email" required />
//                                 </div>
//                             </div>
//                             <div className="form-group row">
//                                 <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
//                                 <div className="col-sm-10 mb-2">
//                                     <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword" placeholder="Password" required />
//                                 </div>
//                             </div>
//                             <div className="form-group row"><p className="text-danger"></p>
//                             </div>

//                             <div className="d-flex justify-content-center">

//                                 <div> <input className="btn btn-dark mt-2" type="submit" value="Login" /></div>
//                                 <div>
//                                     <button className="button" onClick={handleGoogleLoginRedirect}><span className="google-icon">{googleIcon}</span></button>
//                                 </div>

//                             </div>
//                         </form>

//                     </div>
//                 </div >

//                 <h3 className="fw-light text-success mt-5">Not Registered?</h3>
//                 <Link to="/register">Click Here to Register</Link>
//             </div>
//         </div>
//     );
// };

// export default Login;
