import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//import {initializeApp} from 'firebase/app';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBGbbJuVPwwRGR-XVm9t9dtU3UCA1hwk8",
  authDomain: "cart-bdf15.firebaseapp.com",
  projectId: "cart-bdf15",
  storageBucket: "cart-bdf15.appspot.com",
  messagingSenderId: "332443144406",
  appId: "1:332443144406:web:049dc50e2fc31e90f9f977"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
