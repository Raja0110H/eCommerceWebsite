import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: `${process.env.REACT_APP_MY_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    databaseURL: `${process.env.REACT_APP_DATABASE_URL}`,
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId:`${process.env.REACT_APP_MESAGE_SENDER_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`,
    measurementId:`${process.env.REACT_APP_MEASUREMENT_ID}`,
  };

// Initiallize Firebase
firebase.initializeApp(firebaseConfig);

// Store user in database
export const createUserProfileDocument = async (userAuth, additionnalData) => {
    // If There is no user object data
    if(!userAuth) return;

    // Fetch this user in DB
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    // If user doesn't exist in DB
    if(!snapshot.exists) {
        // get name & email from Google account
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            // Create new user with these data
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionnalData
            })
        } catch (error) {
            console.log('error creaing user', error.message);
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch =  firestore.batch();

    objectsToAdd.forEach(object => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, object);
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

// Use Firebase authentication & firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Add sign-in with Google account
const provider = new firebase.auth.GoogleAuthProvider();

// Propmt user to choose a Google account when signing-in with Google
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;