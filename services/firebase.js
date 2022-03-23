// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection } from 'firebase/firestore';
// import * as firebase from 'firebase';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAWz9TnEzn8AcXTd9y_HGATKesMdXQtCn8",
//   authDomain: "intouch-62b9e.firebaseapp.com",
//   projectId: "intouch-62b9e",
//   storageBucket: "intouch-62b9e.appspot.com",
//   messagingSenderId: "464637178122",
//   appId: "1:464637178122:web:42f1d40d0aa18982a38af3",
//   measurementId: "G-KXP8BGGWZ8"
// };

// initializeApp(firebaseConfig)

// const db = getFirestore()

// const colRef = collection(db, 'users')

// Initialize Firebase
// let app;
// if(firebase.apps.length === 0) {
//     app = firebase.initializeApp(firebaseConfig);
// } else {
//     app = firebase.app()
// }

// const auth = firebase.auth()

// export { auth }

// import { initializeApp } from "firebase/app";
// import { 
//     getFirestore,
//     query,
//     orderBy,
//     onSnapshot,
//     collection,
//     getDoc, 
//     getDocs, 
//     addDoc,
//     updateDoc,
//     doc, 
//     serverTimestamp, 
//     arrayUnion
// } from "firebase/firestore";
// import * as firebase from 'firebase';
// import { getAuth, signInAnonymously} from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyAWz9TnEzn8AcXTd9y_HGATKesMdXQtCn8",
//     authDomain: "intouch-62b9e.firebaseapp.com",
//     projectId: "intouch-62b9e",
//     storageBucket: "intouch-62b9e.appspot.com",
//     messagingSenderId: "464637178122",
//     appId: "1:464637178122:web:42f1d40d0aa18982a38af3",
//     measurementId: "G-KXP8BGGWZ8",
// };

// // initialize firebase
// let app;
// if (firebase.apps.length === 0) {
//     app = firebase.initializeApp(firebaseConfig);
// } else {
//     app = firebase.app()
// }

// const auth = firebase.auth();

// export { auth }


// // const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app)

// export const authenticateAnonymously = () => {
//     return signInAnonymously(getAuth(app));
// };

// export const createProjectArray = (userName, userId) => {
//     const projectsColRef = collection(db, 'Projects')
//     return addDoc(projectsColRef, {
//             created: serverTimestamp(),
//             createdBy: userId,
//             users: [{ 
//                 userId: userId,
//                 name: userName
//             }]
//         });
// };

// export const getProjectArray = (projectArrayId) => {
//     const projectDocRef = doc(db, 'Projects', projectArrayId)
//     return getDoc(projectDocRef);
// };

// export const getProjectArrayItems = (projectArrayId) => {
//     const itemsColRef = collection(db, 'Projects', projectArrayId, 'items')
//     return getDocs(itemsColRef)
// }

// export const streamProjectArrayItems = (projectArrayId, snapshot, error) => {
//     const itemsColRef = collection(db, 'Projects', projectArrayId, 'items')
//     const itemsQuery = query(itemsColRef, orderBy('created'))
//     return onSnapshot(itemsQuery, snapshot, error);
// };

// export const addUserToProjectArray = (userName, projectArrayId, userId) => {
//     const groceryDocRef = doc(db, 'Projects', projectArrayId)
//     return updateDoc(groceryDocRef, {
//             users: arrayUnion({ 
//                 userId: userId,
//                 name: userName
//             })
//         });
// };

// export const addProjectArrayItem = (item, projectArrayId, userId) => {
//     return getProjectArrayItems(projectArrayId)
//         .then(querySnapshot => querySnapshot.docs)
//         .then(projectArrayItems => projectArrayItems.find(projectArrayItem => projectArrayItem.data().name.toLowerCase() === item.toLowerCase()))
//         .then( (matchingItem) => {
//             if (!matchingItem) {
//                 const itemsColRef = collection(db, 'Projects', projectArrayId, 'items')
//                 return addDoc(itemsColRef, {
//                         name: item,
//                         created: serverTimestamp(),
//                         createdBy: userId
//                     });
//             }
//             throw new Error('duplicate-item-error');
//         });
// };