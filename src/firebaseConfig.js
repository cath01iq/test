import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAaT2A_TwDIfuDC-w89n_4SPmCU8HtePVE",
  authDomain: "testproject-d58ad.firebaseapp.com",
  projectId: "testproject-d58ad",
  storageBucket: "testproject-d58ad.appspot.com",
  messagingSenderId: "768803034392",
  appId: "1:768803034392:web:802e2a13372a66c007fa6d",
  measurementId: "G-5K0H57N28D"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);