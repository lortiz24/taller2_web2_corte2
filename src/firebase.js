
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDua9_uUhc_WD_o2XkP6KSMGPd8Hsx8mfc",
  authDomain: "taller3debwe.firebaseapp.com",
  projectId: "taller3debwe",
  storageBucket: "taller3debwe.appspot.com",
  messagingSenderId: "182752513620",
  appId: "1:182752513620:web:60e9c87711309310efa7c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export  {db}