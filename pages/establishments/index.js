import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/pages/establishments/Establishments.module.scss';

import Image from 'next/image';
import Container from '../../components/layout/Container';
import Button from '../../components/layout/Button';
import Head from '../../components/layout/Head';

// FIREBASE
import { initializeApp } from "firebase/app";
import { clientCredentials } from "../../firebaseConfig";
import { collection, getDocs, getFirestore, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import { GetImageUrl } from "../../api/GetFromDb";




  

const establishments = () => {
  
  initializeApp(clientCredentials);
  const db = getFirestore();  
  const colRef = collection(db, 'establishments');

  const [list, setEstablishments] = useState([]);
  let id = 0;

  const getData = async () => {
    const storage = getStorage();
    const snapshot = await getDocs(colRef);
    const establishments = [];
    id += 1;

    for await (let establishment of snapshot.docs) {
      const imageRef = ref(storage, establishment.data().image_url);
      const imageUrl = await getDownloadURL(imageRef);
      establishments.push({
        ...establishment.data(),
        image_url: imageUrl,
        id
      });
      setEstablishments(establishments);
    }
  }

    
  useEffect(() => {
    getData()
  }, [list.length])

  return ( 
    <>
      <Head title={'Establishments'} />
      <Container>
        
        <h1>Establishments</h1>
        <div className={styles.establishments}>
          {list.map(item => {
            console.log(item)
            return (
              <div className={styles.establishment} key={item.id}>
              <div className={styles.image}>
                {<Image
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
                  <ul className={styles.options}>
                    {item.breakfast ? <li>Breakfast Included</li> : ''}
                    {item.cancelation ? <li>Free cancelation</li> : ''}
                    {item.dogs ? <li>Dogs allowed</li> : ''}
                  </ul>
                </div>    
                <div className={styles.button}>
                  <Button value={'BOOK'} buttonType={'book'} icon={'fa-bell'} type='button'/>
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