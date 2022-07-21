import * as firebase from 'firebase/firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC6BEyiiWTmjc6GTc01n5tS-6mPiEqu4cs",
  authDomain: "disneyplus-clone-f00a7.firebaseapp.com",
  projectId: "disneyplus-clone-f00a7",
  storageBucket: "disneyplus-clone-f00a7.appspot.com",
  messagingSenderId: "719822536263",
  appId: "1:719822536263:web:a7aba444bdfed404fa3b62"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;