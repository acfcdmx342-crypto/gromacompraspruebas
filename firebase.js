import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  get,
  onValue,
  remove,
  update,
  query,        // Agregado
  orderByChild, // Agregado
  equalTo       // Agregado
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnK33xMAl4cnw_ME7qRlQYCrcYdeYuvrg",
  authDomain: "dbutecnologia-3cc53.firebaseapp.com",
  databaseURL: "https://dbutecnologia-3cc53-default-rtdb.firebaseio.com/",
  projectId: "dbutecnologia-3cc53",
  storageBucket: "dbutecnologia-3cc53.firebasestorage.app",
  messagingSenderId: "475519223164",
  appId: "1:475519223164:web:646a552e4b4fb3927250f9"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {
  database,
  ref,
  push,
  set,
  get,
  onValue,
  remove,
  update,
  query,
  orderByChild,
  equalTo
};
