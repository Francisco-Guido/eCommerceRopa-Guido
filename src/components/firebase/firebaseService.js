import { initializeApp } from "firebase/app";
import {
  addDoc,
  getFirestore,
  collection,
  getDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx2MTCWVxhw6uyKu7TO53Y2PwEddxVT_M",
  authDomain: "eccomerce-r.firebaseapp.com",
  projectId: "eccomerce-r",
  storageBucket: "eccomerce-r.appspot.com",
  messagingSenderId: "76543604526",
  appId: "1:76543604526:web:364893ab1104306e3bacbf",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const generateOrder = async (order) => {
  const newOrder = addDoc(collection(db, "orders"), {
    ...order,
  });
  return newOrder;
};

export const updateStock = async (itemId, quantity) => {
  const item = await getDoc(doc(db, "items", itemId));
  await updateDoc(doc(db, "items", itemId), {
    stock: item.data().stock - quantity,
  });
};
