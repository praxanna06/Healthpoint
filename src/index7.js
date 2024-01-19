import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc, onSnapshot,
  query, where,
  orderBy
} from 'firebase/firestore'

import{
  createUserWithEmailAndPassword,
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
const colRef = collection(db, 'Pharmacy')
onSnapshot(colRef, (snapshot) => {
    // console.log(snapshot.docs)
    let Pharmacy = []
    snapshot.docs.forEach((doc) => {
      Pharmacy.push({ ...doc.data(), id: doc.id })
    })
    Pharmacy.log(Patient)
  })

const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault() 
  addDoc(colRef, {
    name: signupForm.name.value,
    address: signupForm.address.value,
    phno: signupForm.phno.value,
    username: signupForm.username.value,
    password: signupForm.password.value
    
  })
  const uname = signupForm.username.value
  const password = signupForm.password.value
  createUserWithEmailAndPassword(auth, uname+"@gmail.com", password)
    .then((cred) => {
      console.log('user created: ', cred.user)
    })
    .catch((err) => {
      console.log(err.message)
    })
})