import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDj8uE6drb4_yVRC2TcRy0AWAtinIpKVn0",
    authDomain: "deveen-shopping-app.firebaseapp.com",
    projectId: "deveen-shopping-app",
    storageBucket: "deveen-shopping-app.appspot.com",
    messagingSenderId: "144171583172",
    appId: "1:144171583172:web:4fa1ca4957fc9908bb2b91",
    measurementId: "G-HZC427K7JT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};