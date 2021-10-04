import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBAWl-BtA5ul0dWisf8kDnUd_KJ62grND8",
  authDomain: "shop-da139.firebaseapp.com",
  projectId: "shop-da139",
  storageBucket: "shop-da139.appspot.com",
  messagingSenderId: "838888742400",
  appId: "1:838888742400:web:5ae46c53b100aefc6d42e5",
  measurementId: "G-DX0Q5D16XQ"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth}; 
