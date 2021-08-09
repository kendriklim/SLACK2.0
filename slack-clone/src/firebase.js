import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNJD1HUYZ-v7lMkVolEQtJCfB10WYKTEc",
  authDomain: "slack-clone-b05a1.firebaseapp.com",
  projectId: "slack-clone-b05a1",
  storageBucket: "slack-clone-b05a1.appspot.com",
  messagingSenderId: "830615336765",
  appId: "1:830615336765:web:ed2cb5b6ee39046475f754",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
