
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwxx-1fbrI1ynovHUkp_j-PnPnN-EEvNU",
    authDomain: "projectstracker-422cf.firebaseapp.com",
    projectId: "projectstracker-422cf",
    storageBucket: "projectstracker-422cf.appspot.com",
    messagingSenderId: "675131603152",
    appId: "1:675131603152:web:ba6bb5aaedaf12f7e486d5"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();


  export { firebaseApp, db };