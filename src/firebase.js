import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDdYuGZwpM8qu_EngrsoBSVJ3GZOM2U6p0",
    authDomain: "chat-3-6c314.firebaseapp.com",
    projectId: "chat-3-6c314",
    storageBucket: "chat-3-6c314.appspot.com",
    messagingSenderId: "938021407546",
    appId: "1:938021407546:web:8b6ffa32f1ef5925bd9e03"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

   export {db, auth, provider}

