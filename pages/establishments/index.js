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
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const establishments = () => {


  // hotel data
  const [list, setList] = useState([]);
  const [path, setPath] = useState('')

  useEffect(() => {
    initializeApp(clientCredentials);

    const db = getFirestore();
    const colRef = collection(db, 'establishments');

    getDocs(colRef)
      .then((snapshot) => {
        let establishments = [];
        snapshot.docs.map(item => {
          establishments.push({ ...item.data(), id: item.id })
        })
        setList(establishments);
      })
      .catch(err => {
        console.log(err.message)
      })
    }, [])

  console.log(list)

  list.map(item => {
    if (item.image_url) {
      const storage = getStorage();
      getDownloadURL(ref(storage, 'fancy1000.jpg'))
      .then ((url) => {
        setPath(url)
        console.log(path)
      })
    }
  })

  const myLoader = () => {
    return `https://firebasestorage.googleapis.com/v0/b/holidaze-db.appspot.com/o/fancy1000.jpg?alt=media&token=9e9435d4-00db-4f21-b5a7-5a4f02759ef9`
  }

  return ( 
    <>
      <Head title={'Establishments'} />
      <Container>
        <h1>Establishments</h1>
        <div className={styles.establishments}>
          
          {list.map(item => {
            return (
              <div className={styles.establishment} key={item.id}>
              <div className={styles.image}>
                <Image 
                  // loader={myLoader}
                  src={path}
                  // layout='fill'
                  width={1000}
                  height={685}
                  responsive='true'
                  objectFit='contain'
                  alt='A fancy hotel'
                />
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