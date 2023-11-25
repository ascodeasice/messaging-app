import { initializeApp } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD08fuz_H-v1gL3MglNorlHtogIuZDkFr0",
  authDomain: "messaging-app-e0153.firebaseapp.com",
  projectId: "messaging-app-e0153",
  storageBucket: "messaging-app-e0153.appspot.com",
  messagingSenderId: "293340939796",
  appId: "1:293340939796:web:e608af4fb98dd405518901",
  measurementId: "G-4N1J3YSK3W"
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const auth = getAuth(app);

export { app, auth };