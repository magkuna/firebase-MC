import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBSNyaxSSJHMSvlai5RQPwQ6R-44oyKjNo",
  authDomain: "aplikacja-bevent.firebaseapp.com",
  databaseURL: "https://aplikacja-bevent.firebaseio.com",
  projectId: "aplikacja-bevent",
  storageBucket: "aplikacja-bevent.appspot.com",
  messagingSenderId: "439121374171"
};
firebase.initializeApp(config);
  export const database = firebase.database()