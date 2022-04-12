import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAmq0GgIPRcdHWXbleamh-pRZbxgnP888c",
    authDomain: "movie-app--pro.firebaseapp.com",
    projectId: "movie-app--pro",
    storageBucket: "movie-app--pro.appspot.com",
    messagingSenderId: "487628658701",
    appId: "1:487628658701:web:d12b303e4111f964f09d44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser =async (email, password,navigate)=> {
   try { 
       let userCredential = await createUserWithEmailAndPassword(auth, email, password)
   } 
   navigate("/");
   catch (error) {
    alert(error.message)
   }    
  
}

export const signIN =async (email, password)=> {
    try {
   let userCredential= await signInWithEmailAndPassword(auth, email, password);
        catch (error) { 
            alert(error.message)
        }
}