import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3kMxazy633uQ4BKTvWYF8hFZEl0PP_as",
  authDomain: "tree-of-abstraction.firebaseapp.com",
  databaseURL: "https://tree-of-abstraction.firebaseio.com",
  projectId: "tree-of-abstraction",
  storageBucket: "tree-of-abstraction.appspot.com",
  messagingSenderId: "161683871914",
  appId: "1:161683871914:web:7cd83dc09d276698c8d8d3",
  measurementId: "G-SPG691QK9Z",
};

firebase.initializeApp(firebaseConfig);

// const db = firebase.database();

// const writeUserData = (userId: string, name: string, email: string) => {
//   firebase
//     .database()
//     .ref("users/" + userId)
//     .set({
//       username: name,
//       email: email,
//     });
// };

// writeUserData("1", "test2", "test@test.test");

// const dbRef = firebase.database().ref();
// dbRef
//   .child("users")
//   .child("1")
//   .get()
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

export const test = 1;
