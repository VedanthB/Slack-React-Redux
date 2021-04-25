import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDRC8kFDXATcvgb1EjCxzeYw0LakJU9-TE",
    authDomain: "slack-clone-99c4d.firebaseapp.com",
    projectId: "slack-clone-99c4d",
    storageBucket: "slack-clone-99c4d.appspot.com",
    messagingSenderId: "90934957996",
    appId: "1:90934957996:web:c78e55bcfffe9b2594cc09",
    measurementId: "G-E3JYKBQFCN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth , provider , db};