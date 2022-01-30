import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAfY6heTASz-BqtQJt_Pc77uLFd4KwG53g",
    authDomain: "react-hooks-notes-6e02b.firebaseapp.com",
    databaseURL: "https://react-hooks-notes-6e02b-default-rtdb.firebaseio.com",
    projectId: "react-hooks-notes-6e02b",
    storageBucket: "react-hooks-notes-6e02b.appspot.com",
    messagingSenderId: "445334549548",
    appId: "1:445334549548:web:258c7b9238b7c69cf0cd89"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);