import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMj1ECdVb-oNZ_yDnpsPuRff-fQq0_-uA",
  authDomain: "netflix-clone-react-9c679.firebaseapp.com",
  projectId: "netflix-clone-react-9c679",
  storageBucket: "netflix-clone-react-9c679.appspot.com",
  messagingSenderId: "120129132525",
  appId: "1:120129132525:web:929546b3e0dabda64879e4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const db = firebaseApp.firestore();
export default db;
