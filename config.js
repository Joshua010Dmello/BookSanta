import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCN_9NkUP4IxS1TGTReuqekHDDbcOqZoSU",
  authDomain: "booksanta-d56ef.firebaseapp.com",
  databaseURL: "https://booksanta-d56ef.firebaseio.com",
  projectId: "booksanta-d56ef",
  storageBucket: "booksanta-d56ef.appspot.com",
  messagingSenderId: "177187540761",
  appId: "1:177187540761:web:6680801ba2e3a8f3a1ff88",
  measurementId: "G-BDX6HVK22L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
