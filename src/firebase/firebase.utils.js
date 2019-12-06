import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDjqTPcqsQ2Esxyjrj_thiitGIUiysYV_4",
    authDomain: "burgez-web.firebaseapp.com",
    databaseURL: "https://burgez-web.firebaseio.com",
    projectId: "burgez-web",
    storageBucket: "burgez-web.appspot.com",
    messagingSenderId: "583547335043",
    appId: "1:583547335043:web:c37b951d1f0ad0b41186b6"
};
firebase.initializeApp(config);

const storage = firebase.storage();
export const storageRef = storage.ref();


export default firebase;