import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAKSlS64ecuLne47J6921sl2meGaZEC99s",
    authDomain: "maltimart-e9f01.firebaseapp.com",
    projectId: "maltimart-e9f01",
    storageBucket: "maltimart-e9f01.appspot.com",
    messagingSenderId: "1003534139776",
    appId: "1:1003534139776:web:c6218135d11cba80db4165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;