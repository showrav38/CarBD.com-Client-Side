const firebaseConfig = {
  /* apiKey: 'AIzaSyBVdO_udnsklx0YTBdgtw667JJvt_FGyXg',
  authDomain: 'ass-12-12a67.firebaseapp.com',
  projectId: 'ass-12-12a67',
  storageBucket: 'ass-12-12a67.appspot.com',
  messagingSenderId: '1093306999814',
  appId: '1:1093306999814:web:100de147164e673a474f87', */
  apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

export default firebaseConfig;

// const firebaseConfig = {
//     apiKey: "AIzaSyClRhEZKtpaCzGiOreUPz9q35YOcrJoCq8",
//     authDomain: "assignment-12-220dc.firebaseapp.com",
//     projectId: "assignment-12-220dc",
//     storageBucket: "assignment-12-220dc.appspot.com",
//     messagingSenderId: "932073037778",
//     appId: "1:932073037778:web:dae7e58d116810426ff20b"
// };
// export default firebaseConfig;
