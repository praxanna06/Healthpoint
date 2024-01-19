import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc, onSnapshot,
  query, where,
  orderBy
} from 'firebase/firestore'

import{
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
  getAuth
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCtjDlNTweiAYUybQJf4evSIJ5rLiqaKXo",
  authDomain: "fiarbase-681a2.firebaseapp.com",
  projectId: "fiarbase-681a2",
  storageBucket: "fiarbase-681a2.appspot.com",
  messagingSenderId: "403339410585",
  appId: "1:403339410585:web:68cb9d6ff555cd5e43cc08"
}

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

// collection ref
const colRef = collection(db, 'Doctor')
onSnapshot(colRef, (snapshot) => {
    // console.log(snapshot.docs)
    let Doctor = []
    snapshot.docs.forEach((doc) => {
      Doctor.push({ ...doc.data(), id: doc.id })
    })
    console.log(Doctor)
  })

  const loginForm = document.querySelector('.login')
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
  
    const uname = loginForm.username.value
    const password = loginForm.password.value
  
    signInWithEmailAndPassword(auth, uname+"@gmail.com", password)
      .then(cred => {
        console.log('user logged in:', cred.user)
        loginForm.reset()
      })
      .catch(err => {
        console.log(err.message)
        alert("invalid credentials")
      })
  })