import firebase from 'firebase/app'
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDXtCJEHHZIG9rCgkoNc6nLRruUjUZmpZo",
  authDomain: "fir-react-auth-57b44.firebaseapp.com",
  projectId: "fir-react-auth-57b44",
  storageBucket: "fir-react-auth-57b44.appspot.com",
  messagingSenderId: "609711529785",
  appId: "1:609711529785:web:c330b935e5bce328bf52e8",
  measurementId: "G-WDR9XS1YTF"
})

  export default app