import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDQHhd90Z3VwNIWO6Qm5IQ_QrYQz6HASfw",
  authDomain: "crwn-db-83605.firebaseapp.com",
  projectId: "crwn-db-83605",
  storageBucket: "crwn-db-83605.appspot.com",
  messagingSenderId: "421411885215",
  appId: "1:421411885215:web:e248f668f8fda8bd79d2aa",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
