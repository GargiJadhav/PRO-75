import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import "firebase/compat/firestore"


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCXQ0SQA70cPfbxlWm0tnOukly8OJO7mLQ",
  authDomain: "bedtimestories-688c9.firebaseapp.com",
  projectId: "bedtimestories-688c9",
  storageBucket: "bedtimestories-688c9.appspot.com",
  messagingSenderId: "958150480593",
  appId: "1:958150480593:web:252f12e347da9236efabf0"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
