import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTsM0oCblDApk2Wkx-7AZshDw4VR98aRs",
    authDomain: "facebook-clone-4990d.firebaseapp.com",
    projectId: "facebook-clone-4990d",
    storageBucket: "facebook-clone-4990d.appspot.com",
    messagingSenderId: "47092019514",
    appId: "1:47092019514:web:2343423ef6986b017a6003",
    measurementId: "G-9K6K4GKL2H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;