import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBx2MTCWVxhw6uyKu7TO53Y2PwEddxVT_M",
  authDomain: "eccomerce-r.firebaseapp.com",
  projectId: "eccomerce-r",
  storageBucket: "eccomerce-r.appspot.com",
  messagingSenderId: "76543604526",
  appId: "1:76543604526:web:364893ab1104306e3bacbf",
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
