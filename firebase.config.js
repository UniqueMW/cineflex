// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBprUGjyHF57q_PBiXvB6IM7UETF5iHRpY',
  authDomain: 'cineflex-53fde.firebaseapp.com',
  projectId: 'cineflex-53fde',
  storageBucket: 'cineflex-53fde.appspot.com',
  messagingSenderId: '790367320156',
  appId: '1:790367320156:web:6ad516ccec05a3aa2d4e99'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app)

export { app, auth, database }
