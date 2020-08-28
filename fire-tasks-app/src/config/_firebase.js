import firebase from "firebase/app";
import "firebase/firebase-firestore";

// Set your app configuration:
var firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.firestore();

export const tasksRef = databaseRef.collection("tasks");