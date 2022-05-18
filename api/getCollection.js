import { initializeApp } from "firebase/app";
import { clientCredentials } from "../firebaseConfig";
import { getDocs, collection ,getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const getStaticProps = async () => {

  initializeApp(clientCredentials);
  const db = getFirestore();  
  const colRef = collection(db, 'establishments');
  

    const storage = getStorage();
    const snapshot = await getDocs(colRef);
    const establishments = [];

    for await (let establishment of snapshot.docs) {
      const imageRef = ref(storage, establishment.data().image_url);
      const imageUrl = await getDownloadURL(imageRef);
      let docID = establishment.id;
      establishments.push({
        ...establishment.data(),
        docID,
        image_url: imageUrl,
      });
    }
    

    return {
      props: { 
        establishments,
      }
    }
}

export const getCollection = ({ ...establishments }) => {
  console.log(establishments)
}