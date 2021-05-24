import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCK4lj9K8_OYjzBkwWhToUrSLC0b4CpHtA",
    authDomain: "slack-clone-4ad41.firebaseapp.com",
    projectId: "slack-clone-4ad41",
    storageBucket: "slack-clone-4ad41.appspot.com",
    messagingSenderId: "562674350268",
    appId: "1:562674350268:web:434644ad6e2c5d6b56f8b9",
    measurementId: "G-GEPQ43LJRS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db};