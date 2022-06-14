// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/pages/establishments/Establishments.module.scss';

// COMPONENTS
import Image from 'next/image';
import Container from '../../components/layout/Container';
import Button from '../../components/layout/Button';
import Head from '../../components/layout/Head';

// FIREBASE
import { initializeApp } from "firebase/app";
import { clientCredentials } from "../../firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";
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
    },
    revalidate: 10, 
  }
}
  
const establishments = ({ establishments }) => {  
  const myLoader = ({ src }) => {
    return src
  }
  
  return ( 
    <>
      <Head title={'Establishments'} />
      <Container>
        <h1>Establishments</h1>
        <div className={styles.establishments}>
          {establishments.map(item => {
            return (
              <div className={styles.establishment} key={item.docID}>
              <div className={styles.image}>
                {<Image
                  loader={myLoader(item.image_url)}
                  src={item.image_url}
                  width={1000}
                  height={685}
                  responsive='true'
                  objectFit='contain'
                  alt='A fancy hotel'
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
                </div>    
                <div className={styles.button}>
                  <Button value={'Book'} buttonType={'book'} icon={'fa-bell'} type='button' linkData={item.docID} />
                </div>
              </div>
            </div>
            )
          })} 
        </div>
      </Container> 
    </>
  );
}
 
export default establishments;