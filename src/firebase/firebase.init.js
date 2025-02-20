// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwrVsFrTutsfz68xYwWKSlA1B-XQu4yWo",
  authDomain: "dragon-news-27763.firebaseapp.com",
  projectId: "dragon-news-27763",
  storageBucket: "dragon-news-27763.firebasestorage.app",
  messagingSenderId: "627994747506",
  appId: "1:627994747506:web:f28c9423d4f86569bb18eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app