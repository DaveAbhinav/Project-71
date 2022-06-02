import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCDn_5Daa47RQ8Sqv2XFmjk618Xatdpqs4",
    authDomain: "project-71-f85ad.firebaseapp.com",
    projectId: "project-71-f85ad",
    storageBucket: "project-71-f85ad.appspot.com",
    messagingSenderId: "1073693757126",
    appId: "1:1073693757126:web:7cce3b15b7c244c99391c7"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


