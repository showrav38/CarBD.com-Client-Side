import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import {
  getAuth,
  signInWithPopup,
  getIdToken,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useHistory, useLocation } from 'react-router-dom';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [loading, setLoading] = useState(true);
  const [newLoading, setNewLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const history = useHistory();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // history.push('../components/Home/Home.js');
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const setUserName = name => {
    updateProfile(auth.currentUser, { displayName: name }).then(result => {});
  };

  const registerWithEmailandPass = (name, email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUsingEmailandPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        getIdToken(user).then(idToken => {
          console.log(idToken);
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  useEffect(() => {
    fetch(`https://calm-anchorage-33077.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.admin);
        setAdmin(data.admin);
      });
  }, [user.email]);

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://calm-anchorage-33077.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then();
  };

  useEffect(() => {
    setNewLoading(true);
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        getIdToken(user).then(idToken => {
          console.log(idToken);
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setNewLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  return {
    signInWithGoogle,
    user,
    setUser,
    admin,
    token,
    saveUser,
    auth,
    logOut,
    registerWithEmailandPass,
    error,
    setError,
    signInUsingEmailandPassword,
    setUserName,
    loading,
    setLoading,
    newLoading,
    setNewLoading,
  };
};

export default useFirebase;

// initializeAuthentication();

// const useFirebase = () => {

//     const [user, setUser] = useState({});
//     const auth = getAuth();
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     const history = useHistory();

//     const signInWithGoogle = () => {
//         setLoading(true);
//         const googleProvider = new GoogleAuthProvider();

//         return signInWithPopup(auth, googleProvider)

//     }
//     const logOut = () => {
//         setLoading(true);
//         signOut(auth)
//             .then(() => {
//                 // history.push('../components/Home/Home.js');
//             })
//             .finally(() => {
//                 setLoading(false);
//             })
//     }
//     const setUserName = name => {
//         updateProfile(auth.currentUser, { displayName: name })
//             .then(result => { })
//     }

//     const registerWithEmailandPass = (name, email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const signInUsingEmailandPassword = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)

//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, user => {
//             if (user) {
//                 setUser(user);
//             }
//             else {
//                 setUser({});
//             }
//             setLoading(false);
//         });
//         return () => unsubscribe;
//     }, []);

//     return {
//         signInWithGoogle,
//         user,
//         setUser,
//         logOut,
//         registerWithEmailandPass,
//         error,
//         setError,
//         signInUsingEmailandPassword,
//         setUserName,
//         loading,
//         setLoading
//     }
// }

// export default useFirebase;
