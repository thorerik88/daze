import { initializeApp } from "firebase/app";
import { clientCredentials } from "../../firebaseConfig";
import { getDoc, doc, getDocs, collection ,getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

initializeApp(clientCredentials);
const db = getFirestore();  
const colRef = collection(db, 'establishments');
const storage = getStorage();

export const getStaticPaths = async () => {
  
  
  
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
    
    const paths = establishments.map(item => {
      return {
        params: { id: item.docID.toString() }
      }
    })

    return {
      paths,
      fallback: false
    }
  }
}


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const docRef = doc(db, 'establishments', id);
  const snapshot = await getDoc(docRef);
  

    return {
      props: { 
        data: snapshot.data(),
      }
    }
  
}

const myLoader = ({ src }) => {
  return src
}

const details = ({ data }) => {
  
  console.log(data)

  return ( 
  <>
    <h1>{data.name}</h1>
  </> );
}
 
export default details;