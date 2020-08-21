import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDnwf4GFg6YRJDePirloHQLqERj-S1a9Mo",
  authDomain: "reels-clever.firebaseapp.com",
  databaseURL: "https://reels-clever.firebaseio.com",
  projectId: "reels-clever",
  storageBucket: "reels-clever.appspot.com",
  messagingSenderId: "94273706377",
  appId: "1:94273706377:web:34d4b09ddc53b41719e958"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;