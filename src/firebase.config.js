// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUGgF5rE5NieL2WTj4WfuYqMsMXiGCzZs",
  authDomain: "elite-electro.firebaseapp.com",
  projectId: "elite-electro", 
  storageBucket: "elite-electro.appspot.com", 
  messagingSenderId: "1045357607116",
  appId: "1:1045357607116:web:a64a7f997c54685e8f6a69"  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export default app;  