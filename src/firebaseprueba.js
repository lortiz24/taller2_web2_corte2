import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCJM1v-Nu6wZnzIc3FMyiaMXXARL6nEix4",
  authDomain: "taller2corte2-84a55.firebaseapp.com",
  projectId: "taller2corte2-84a55",
  storageBucket: "taller2corte2-84a55.appspot.com",
  messagingSenderId: "81437530992",
  appId: "1:81437530992:web:6bf0356bfca5ce42464db5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}