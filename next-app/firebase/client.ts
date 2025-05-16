// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import {Auth, getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvIJ0ENAhAc3Fp95J_IgBjL-h4puRPTgE",
  authDomain: "fire-course-next.firebaseapp.com",
  projectId: "fire-course-next",
  storageBucket: "fire-course-next.firebasestorage.app",
  messagingSenderId: "421403716834",
  appId: "1:421403716834:web:ba16e3d3fc118a9f1842bb"
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;

if(!currentApps.length){
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app)
    
}else{
    const app = currentApps[0]; 
    auth = getAuth(app)
}
export {auth};
// import {auth,storage} from '@/firebase/client'