import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCikIh8MrJJnAywlWLhWAhDxhMlTPd7XkU",
  authDomain: "agrosols.firebaseapp.com",
  projectId: "agrosols",
  storageBucket: "agrosols.appspot.com",
  messagingSenderId: "173254513600",
  appId: "1:173254513600:web:25f569234ab76b29e9ae25",
  measurementId: "G-54SHW8ZZYV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { db, auth, provider, firebaseApp, storage };