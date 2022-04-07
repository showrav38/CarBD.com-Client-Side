import { getAuth, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [comment, setComment] = useState('');
  const {
    registerWithEmailandPass,
    auth,
    saveUser,
    setError,
    setUser,
    setLoading,
    signInWithGoogle,
  } = useAuth();
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
  // taking location for redirecting
  const location = useLocation();
  const redirect_url = location.state?.from || '/register';
  const history = useHistory();

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleRegister = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password must be at least 6 characters long!');
      return;
    }

    registerWithEmailandPass(name, email, password)
      .then(userCredential => {
        console.log(userCredential);
        setError('');
        setComment('Registation Done');
        const newUser = { email, displayName: name };
        // setUser(newUser);
        // save user to the database
        saveUser(email, name, 'POST');
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          //72-2 module er 10 mins e detail ase (firebase e log in logout hole auth sate auto update hoi but register korr time e update na korle state update hoi nah , tai auth state update korar jnnw firebase update profile kora hoise jate page reload na diyei kaj hoi)
          displayName: name,
        })
          .then(() => {})
          .catch(error => {});
        history.push(redirect_url); //after succcessfu registration it will go on home page
      })
      .catch(error => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="body">
        <div class="container">
          <div class="row px-3">
            <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
              <div class="img-left d-none d-md-flex"></div>
              <div class="card-body">
                <h4 class="titles text-center mt-1">Register Please</h4>
                <form onSubmit={handleRegister} class="form-box px-3">
                  <div class="form-input">
                    <span>
                      <i class="fa fa-user-o"></i>
                    </span>
                    <input
                      onBlur={handleNameChange}
                      type="text"
                      name=""
                      placeholder="Your Name"
                      tabindex="10"
                      required
                    />
                  </div>
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
                      Already have an account?
                      <Link to="/login" class="register-link">
                        Login Here
                      </Link>
                    </div>
                  </div>

                  <div class="mb-3">
                    <div className="m-3 fw-bold">{comment}</div>
                    <button
                      type="submit"
                      style={{ width: '100%' }}
                      class="btn btn-block text-uppercase"
                    >
                      Register
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
                      <a href="#" class="btn btn-block btn-facebook">
                        <i
                          style={{ fontSize: '50px', color: 'blue' }}
                          class="fa fa-facebook-square btn-facebook"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>

                    <div class="col-4">
                      <a onClick={handleGoogleLoginRedirect} href="#" class="btn btn-block">
                        <i
                          style={{ fontSize: '50px', color: 'goldenrod' }}
                          class="fa fa-google btn-google"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>

                    <div class="col-4">
                      <a href="#" class="btn btn-block">
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

export default Register;

/* <div className="login-form">
            <div>
                <h2 className="my-5">Register Here</h2>

                <form onSubmit={handleRegister} className="w-50 mx-auto my-5">
                    <div className="form-group row mt-5">
                        <label htmlFor="staicName" className="col-sm-2 col-form-label text-start">Name</label>
                        <div className="col-sm-10 mb-4">
                            <input onBlur={handleNameChange} type="text" className="form-control" id="staicName" placeholder="Enter Name" required />
                        </div>
                    </div>
                    <div className="form-group row ">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label text-start">Email</label>
                        <div className="col-sm-10 mb-4">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="staticEmail" placeholder="Enter email" required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label text-start">Password</label>
                        <div className="col-sm-10 mb-5">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword" placeholder="Password" required />
                        </div>
                    </div>
                    <div className="m-3 fw-bold">
                        {comment}
                    </div>
                    <input className="btn btn-dark" type="submit" value="Register" />
                </form>
                <div>
                    <p className="fs-4">Already have an account ?</p>
                    <p className="mb-5 fs-5"><Link to="/login">Login</Link></p>
                </div>
            </div >
        </div > */

// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const { registerWithEmailandPass, error, setError, setUser, user, setUserName } = useAuth();

//     // taking location for redirecting
//     const location = useLocation();
//     const redirect_url = location.state?.from || '/register';
//     const history = useHistory();

//     const handleNameChange = e => {
//         setName(e.target.value);
//     }
//     const handleEmailChange = e => {
//         setEmail(e.target.value);
//     }
//     const handlePasswordChange = e => {
//         setPassword(e.target.value);
//     }
//     const handleRegister = e => {
//         e.preventDefault();
//         console.log(email, password);
//         if (password.length < 6) {
//             setError('Password must be at least 6 characters long!')
//             return;
//         }

//         registerWithEmailandPass(name, email, password)
//             .then((userCredential) => {
//                 setUser(userCredential.user);
//                 setError('');
//                 setUserName(name);
//                 history.push(redirect_url);

//             })
//             .catch((error) => {
//                 setError(error.message);

//             });
//     }

//     return (
//         <div className="login-form">
//             <div>
//                 <h2 className="my-5">Register Here</h2>

//                 <form onSubmit={handleRegister} className="w-50 mx-auto my-5">
//                     <div className="form-group row mt-5">
//                         <label htmlFor="staicName" className="col-sm-2 col-form-label text-start">Name</label>
//                         <div className="col-sm-10 mb-4">
//                             <input onBlur={handleNameChange} type="text" className="form-control" id="staicName" placeholder="Enter Name" required />
//                         </div>
//                     </div>
//                     <div className="form-group row ">
//                         <label htmlFor="staticEmail" className="col-sm-2 col-form-label text-start">Email</label>
//                         <div className="col-sm-10 mb-4">
//                             <input onBlur={handleEmailChange} type="email" className="form-control" id="staticEmail" placeholder="Enter email" required />
//                         </div>
//                     </div>

//                     <div className="form-group row">
//                         <label htmlFor="inputPassword" className="col-sm-2 col-form-label text-start">Password</label>
//                         <div className="col-sm-10 mb-5">
//                             <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword" placeholder="Password" required />
//                         </div>
//                     </div>

//                     <input className="btn btn-dark" type="submit" value="Register" />
//                 </form>
//                 <div>
//                     <p className="fs-4">Already have an account ?</p>
//                     <p className="mb-5 fs-5"><Link to="/login">Login</Link></p>
//                 </div>
//             </div >
//         </div >
//     );
// };

// export default Register;
