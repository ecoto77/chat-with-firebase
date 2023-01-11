import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
 import './index';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBxiAYsoS5gCJ3xIYrzTvOnUd2iFlFZsD4",
    authDomain: "fir-chat-15213.firebaseapp.com",
    projectId: "fir-chat-15213",
    storageBucket: "fir-chat-15213.appspot.com",
    messagingSenderId: "779480686562",
    appId: "1:779480686562:web:6a1ef068f8670a40fae3bb"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
db.collection('todos').getDocs();
const todoCol = collection(db, 'todos');
const snapshot = await getDocs(todoCol);

//Detect auth state

onAuthStateChanged(auth, user => {
    if(user) {
        console.log('logged in!')
    }else{
        console.log('no User')
    }
})


