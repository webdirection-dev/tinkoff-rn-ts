import { initializeApp } from "firebase/app"
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
export const db = getFirestore()
