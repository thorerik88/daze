import { initializeApp } from "firebase/app";
import { clientCredentials } from "../firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { useState } from 'react';
import { GetContext } from "../context/Context";

export const GetImageUrl = (imageName) => {
  const storage = getStorage();
  getDownloadURL(ref(storage, imageName))
    .then ((url) => {
      return {url}
    })
}

export const GetFromDb = () => {
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