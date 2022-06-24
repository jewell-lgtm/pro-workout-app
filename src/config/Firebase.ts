import Constants from "expo-constants";
import firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.apiKey,
  authDomain: Constants.manifest?.extra?.authDomain,
  projectId: Constants.manifest?.extra?.projectId,
  storageBucket: Constants.manifest?.extra?.storageBucket,
  messagingSenderId: Constants.manifest?.extra?.messagingSenderId,
  appId: Constants.manifest?.extra?.appId,
};

let Firebase: firebase.app.App;

export const getFirebase = (): firebase.app.App => {
  if (firebase.apps.length === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
  }
  return Firebase;
};
