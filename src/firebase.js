import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbfriPw6qlw86MdMlhEnmMEA9aZiK8Gcg",
  authDomain: "netflix-clone-c26ad.firebaseapp.com",
  projectId: "netflix-clone-c26ad",
  storageBucket: "netflix-clone-c26ad.appspot.com",
  messagingSenderId: "539957560879",
  appId: "1:539957560879:web:3c7ba508dabb1e7bfc28da"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db;