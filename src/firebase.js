import { initializeApp } from "firebase/app";

// Use fixed values directly
const firebaseConfig = {
  apiKey: "AIzaSyA9x-RrnPcGEUmmP3NBHkQPKamknN7NHE8",
  authDomain: "munns-quiz.firebaseapp.com",
  projectId: "munns-quiz",
  storageBucket: "munns-quiz.appspot.com",
  messagingSenderId: "334237009811",
  appId: "1:334237009811:web:bdfc75522b5e1f7c850a66",
  databaseURL: "https://munns-quiz-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
export default app;
