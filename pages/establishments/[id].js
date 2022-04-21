import styles from '../../styles/pages/establishments/details.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import Head from '../../components/layout/Head';
import Container from '../../components/layout/Container';

import Image from 'next/image';

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
    let docID = establishment.id;
    establishments.push({
      docID,
    });
  }
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


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const docRef = doc(db, 'establishments', id);
  const snapshot = await getDoc(docRef);
  const imageRef = ref(storage, snapshot.data().image_url);
  const imageUrl = await getDownloadURL(imageRef);
  const establishments = [];

  establishments.push({
    ...snapshot.data(),
    image_url: imageUrl,
  
  });

    return {
      props: { 
        item: establishments,
      }
    }
  
}

const myLoader = ({ src }) => {
  return src
}

const details = ({ item }) => {
  item = item[0]
  console.log(item)
  
  return ( 
  <>
    <Head title={'Details'} />
    <Container>
      <div className={styles.establishments}>
        <div className={styles.establishment} key={item.docID}>
          <div className={styles.image}>
            {<Image
              loader={myLoader(item.image_url)}
              src={item.image_url}
              width={1000}
              height={685}
              responsive='true'
              objectFit='contain'
              alt={item.alt_text}
            />}
          </div>
          <div className={styles.textBox}>
            <div className={styles.heading}>
              <div className={styles.name}>
                <h2>{item.name}</h2>
              </div>
              <div className={styles.price}>
                <h2>{item.price} kr</h2>
              </div>
            </div>
            <div className={styles.text}>
              <div className={styles.address}>
                <div className={styles.addressIcon}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>{item.street}</p>
                </div>
                <p>{item.zip} {item.town}</p>
              </div>
              <ul className={styles.options}>
                {item.breakfast ? <li>Breakfast Included</li> : <li className={styles.hiddenListItem}>Dogs</li>}
                {item.cancelation ? <li>Free cancelation</li> : <li className={styles.hiddenListItem}>Dogs</li>}
                {item.dogs ? <li>Dogs allowed</li> : <li className={styles.hiddenListItem}>Dogs</li>}
              </ul>
            </div>    
            <div className={styles.button}>
              {/* <Button value={'BOOK'} buttonType={'book'} icon={'fa-bell'} type='button' linkData={item.docID} /> */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  </>);
}
 
export default details;