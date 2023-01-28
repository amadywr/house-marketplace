import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAE2ByzVxgBUXkKjV9p4b_37vqrzvYLI7A',
  authDomain: 'house-marketplace-43044.firebaseapp.com',
  projectId: 'house-marketplace-43044',
  storageBucket: 'house-marketplace-43044.appspot.com',
  messagingSenderId: '100805209031',
  appId: '1:100805209031:web:5ea6438d9a856599d887e2',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
