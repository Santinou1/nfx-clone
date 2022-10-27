import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7gOlrLQ-ZeHOMUsOpfzS-J5z62QHNUiU",
    authDomain: "netflix-clone-b5e6e.firebaseapp.com",
    projectId: "netflix-clone-b5e6e",
    storageBucket: "netflix-clone-b5e6e.appspot.com",
    messagingSenderId: "603394362682",
    appId: "1:603394362682:web:d2d3b0e72ea1e79cbd5403"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db= firebaseApp.firestore()
  const auth= firebase.auth()

  export { auth, db };
