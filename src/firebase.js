
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJIWWo2t0R9vbDpvO4i6FLUPvrFh3lb24",
  authDomain: "taller3debweb.firebaseapp.com",
  projectId: "taller3debweb",
  storageBucket: "taller3debweb.appspot.com",
  messagingSenderId: "374009522876",
  appId: "1:374009522876:web:7a477d1af05570f25b3eb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export  {db}