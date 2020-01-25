// import firebase from "firebase"

// import "firebase/firestore"
// import "firebase/auth"

// const config = {
//     apiKey: "AIzaSyAs9dEFgqSYgeEWINlRDtn-rZ6L7KIvusQ",
//     authDomain: "proggre-f829c.firebaseapp.com",
//     databaseURL: "https://proggre-f829c.firebaseio.com",
//     projectId: "proggre-f829c",
//     storageBucket: "proggre-f829c.appspot.com",
//     messagingSenderId: "714141583087",
//     appId: "1:714141583087:web:4bfbfd030ccf5a457f3d1a",
//     measurementId: "G-5RCNW09LK9"
// }

// firebase.initializeApp(config)

// export const createUserProfile = async userData => {
//     if (!userData) return

//     const userRef = firestore.doc(`/users/${userData.uid}`)

//     const snapshot = await userRef.get()

//     if (!snapshot.exists) {
//         const { displayName, email } = userData
//         const createdAt = new Date()

//         try {
//             await userRef.set({
//                 displayName,
//                 email,
//                 createdAt
//             })
//         } catch (e) {}
//     }

//     return userRef
// }

// export const auth = firebase.auth()
// export const firestore = firebase.firestore()

// const provider = new firebase.auth.GoogleAuthProvider()

// provider.setCustomParameters({
//     prompt: "select_account"
// })

// export const signInWithGoogle = () => auth.signInWithPopup(provider)

// export default firebase
