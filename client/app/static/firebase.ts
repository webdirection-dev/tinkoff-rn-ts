import { initializeApp } from "firebase/app"
import {getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB6rvIj25yBRyRhiZ9PYOizXIQG4Vm-6fs",
    authDomain: "tinkoff-rn.firebaseapp.com",
    projectId: "tinkoff-rn",
    storageBucket: "tinkoff-rn.appspot.com",
    messagingSenderId: "819756738110",
    appId: "1:819756738110:web:4ebebdbd9a24f0c636d36f",
    measurementId: "G-SZC0KXPGQJ"
}

initializeApp(firebaseConfig)

export const auth = getAuth()
export const logout = signOut(auth)
export const db = getFirestore()

export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)
export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password)
