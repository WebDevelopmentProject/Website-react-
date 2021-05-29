import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBjo4UM4_ySdcovf3gjYrBfaysgsYrJqXM",
  authDomain: "upheld-apricot-291706.firebaseapp.com",
  databaseURL: "https://upheld-apricot-291706-default-rtdb.firebaseio.com",
  projectId: "upheld-apricot-291706",
  storageBucket: "upheld-apricot-291706.appspot.com",
  messagingSenderId: "889372019006",
  appId: "1:889372019006:web:1960615eee983e1b6fc46f",
  measurementId: "G-33THY6W5HE"
});
const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();
export {db,auth,storage};