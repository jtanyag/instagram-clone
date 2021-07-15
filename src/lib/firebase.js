import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Import seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyC5OFPQY4RkXOaipbaAPw6dyZO8fMKdSNc",
  authDomain: "instagram-b5740.firebaseapp.com",
  projectId: "instagram-b5740",
  storageBucket: "instagram-b5740.appspot.com",
  messagingSenderId: "817500163065",
  appId: "1:817500163065:web:37ea63ef2a52acdab78b28"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Only run once!
// seedDatabase(firebase);

export { firebase, FieldValue };