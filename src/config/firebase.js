import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "REDACTED_CONFIGURE_LOCALLY",
  authDomain: "REDACTED_CONFIGURE_LOCALLY.firebaseapp.com",
  projectId: "REDACTED_CONFIGURE_LOCALLY",
  storageBucket: "REDACTED_CONFIGURE_LOCALLY.appspot.com",
  messagingSenderId: "191408035958",
  appId: "REDACTED_CONFIGURE_LOCALLY",
  measurementId: "REDACTED_CONFIGURE_LOCALLY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
