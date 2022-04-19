import { initializeApp } from "firebase/app";
import { clientCredentials } from "../firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { useState } from 'react';
import { GetContext } from "../context/Context";

const GetFromDb = () => {
  initializeApp(clientCredentials);
  const db = getFirestore();
  const colRef = collection(db, 'establishments');

  getDocs(colRef)
    .then((snapshot) => {
      let establishments = [];
      snapshot.docs.map(item => {
        establishments.push({ ...item.data(), id: item.id })
      })
      console.log(establishments);
      
    })
    .catch(err => {
      console.log(err.message)
    })
}
 
export default GetFromDb;