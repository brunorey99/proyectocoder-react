import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBMvne_pV-Kj9smi9dvUqQu2p5AKIyFfzw",
  authDomain: "coder-react-1790d.firebaseapp.com",
  projectId: "coder-react-1790d",
  storageBucket: "coder-react-1790d.appspot.com",
  messagingSenderId: "704501840710",
  appId: "1:704501840710:web:ac0eea78955e41a9ec8347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);