import firebase from "firebase/app";
import "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD6o-nJj5qiDi1nVzIYenDntCVfsGkEyx8",
  authDomain: "fire-tasks-a3674.firebaseapp.com",
  databaseURL: "https://fire-tasks-a3674.firebaseio.com",
  projectId: "fire-tasks-a3674",
  storageBucket: "fire-tasks-a3674.appspot.com",
  messagingSenderId: "949414732563",
  appId: "1:949414732563:web:74c800b643ada93f1970e6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.firestore();

export const tasksRef = databaseRef.collection("tasks");
