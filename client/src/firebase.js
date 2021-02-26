import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export const firestore = firebase.firestore();
export default app;

export const generateUserDocument = async (user, moreData) => {
  // Check to see if there is user data.
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const getCurrentContent = await userRef.get();
  if (!getCurrentContent.exists) {
    // If user data isn't present we want to write some
    const { email, displayName } = user;
    try {
      await userRef.set({
        displayName,
        email,
        ...moreData,
      });
    } catch (err) {
      console.error("There was a problem creating the user document", err);
    }
  }
  return getUserDocument(user.uid);
};
// Return user data using getUserDocument
const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDoc = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDoc.data(),
    };
  } catch (err) {
    console.error("Could not fetch the user", err);
  }
};
