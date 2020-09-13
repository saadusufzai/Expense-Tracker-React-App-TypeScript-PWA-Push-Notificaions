importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyAq-fr4tEh3nB1IMufWDJC2AjUT_jXdig0",
    authDomain: "expense-tracker-e8f17.firebaseapp.com",
    databaseURL: "https://expense-tracker-e8f17.firebaseio.com",
    projectId: "expense-tracker-e8f17",
    storageBucket: "expense-tracker-e8f17.appspot.com",
    messagingSenderId: "315169262351",
    appId: "1:315169262351:web:6326c4adb94a1c81650c7a",
    measurementId: "G-W2V6FC9Z9W"
  };


  firebase.initializeApp(firebaseConfig);
  firebase.messaging();