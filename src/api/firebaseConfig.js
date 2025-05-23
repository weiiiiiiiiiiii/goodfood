import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAGMeecLlR78clHSUPxxnhkyc6z6Yw0yjs",
    authDomain: "goodfood-f55f8.firebaseapp.com",
    projectId: "goodfood-f55f8",
    storageBucket: "goodfood-f55f8.firebasestorage.app",
    messagingSenderId: "909907730486",
    appId: "1:909907730486:web:432fdda7997c50662ff897"
};

const app_length = getApps().length > 0;
const app = app_length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };