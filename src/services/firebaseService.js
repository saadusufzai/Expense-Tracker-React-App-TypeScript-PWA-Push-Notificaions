import firebase from 'firebase'
import 'firebase/messaging';

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
  const messaging = firebase.messaging();

  // Add the public key generated from the console here.
  messaging.usePublicVapidKey("BFN0dNPehp22ZpbBSW7qWHEaVw2COPWxr4BErccnjQVUY6zRTnFL3dRN2J9HJIol-vZ-KbZOPhFlcDx0NipHL2cY");

export const configureNotification = ()=>{
    Notification.requestPermission().then((permission)=>{
        console.log(permission)
        if(permission === 'granted'){
            messaging.getToken().then((currentToken)=>{
                if(currentToken){
                    console.log('TOKEN => ')
                    console.log( currentToken)
                } else {
                    console.log(' No Instance ID token available. Request permission to generate one.')
                }
            }).catch((err)=>{
                console.log('An Error occured while retreving token. ', err)
            })
        }
    })
}