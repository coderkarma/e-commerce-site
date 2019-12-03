import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDUKCeGvSWcDGgIubJNQcCqli2ToUJZya8',
  authDomain: 'ecommerce-624d9.firebaseapp.com',
  databaseURL: 'https://ecommerce-624d9.firebaseio.com',
  projectId: 'ecommerce-624d9',
  storageBucket: 'ecommerce-624d9.appspot.com',
  messagingSenderId: '523172374492',
  appId: '1:523172374492:web:a7d6f53509f476700c5119',
  measurementId: 'G-RR1BXFW5J4'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
