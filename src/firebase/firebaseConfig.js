import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKEZv5GbJVXJxc6_WGE2zcyBrGT-wnTVM",
  authDomain: "netflix-clone-b016d.firebaseapp.com",
  projectId: "netflix-clone-b016d",
  storageBucket: "netflix-clone-b016d.appspot.com",
  messagingSenderId: "1081539080987",
  appId: "1:1081539080987:web:a8c0296e188503a300d9be",
  measurementId: "G-6G773M8W1K",
};

// Initialize Firebase
//export const app = initializeApp(firebaseConfig);
export default firebase.initializeApp(firebaseConfig);
