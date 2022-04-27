
import styles from '../../styles/components/reuse/AdminDash.module.scss';
import { useContext, useEffect, useState } from "react";
import Link from 'next/link';

import Login from '../login';
import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import AdminDash from '../../components/layout/AdminDash';
import TravelTips from '../../components/layout/TravelTips';
import { AuthContext } from '../../context/Context';

import { initializeApp } from "firebase/app";
import { clientCredentials } from "../../firebaseConfig";
import { getDoc, doc, getDocs, collection ,getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

initializeApp(clientCredentials);
const db = getFirestore();  

export const getStaticProps = async () => {
  
  const colRef = collection(db, 'enquiries');
  const snapshot = await getDocs(colRef);
  const enquiries = [];
  
  for await (let enquiry of snapshot.docs) {
    let docID = enquiry.id;
    enquiries.push({
      ...enquiry.data(),
      docID,
    });
  }
  

  return {
    props: { 
      enquiries: enquiries,
    }
  }

}

export const getDocument = async (id) => {
  const docRef = doc(db, 'enquiries', id);
  const snapshot = await getDoc(docRef);
  const enquiries = [];
  
  enquiries.push({
    ...snapshot.data(),
  })

  return {
    props: {
      item: enquiries,
    }
  }
}


export const myLoader = async (id) => {
  return await getDocument(id);
}

const Enquiries = ({ enquiries }) => {
  const { auth } = useContext( AuthContext );

  const [enquiry, setEnquiry] = useState([]);

  const handleClick = e => {
    let id = e.target.dataset.id
    let list = myLoader(id)
    setEnquiry(list)
  }

  console.log(enquiry)

  return ( 
    <>
      <Head title={'Enquiries'} />
      {auth ? <Container>
        <ul className={styles.breadcrumbs}>
          <Link href='/admin'><li><a>admin</a></li></Link>
          <li>{'>'}</li>
          <li>enquiries</li>
        </ul>
        <div className={styles.adminSideMenu}>
          <div className={styles.sideMenu}>
            <AdminDash />
          </div>
          <div className={styles.mainContent}>
            <h1>Enquiries</h1>
              <div className={styles.wrapper}>
                <div className={styles.heading}>
                  <p>Name</p>
                  <p>Rooms</p>
                  <p>Date</p>
                </div>
                {enquiries.map(item => {
                  return (
                    <div key={item.docID} className={styles.item}>
                      <p data-id={`${item.docID}`} onClick={handleClick}>{item.name}</p>
                      <p>{item.rooms}</p>
                      <p>{item.checkin}</p>
                    </div>)
                  })}
              </div>
              <div className={styles.details}>
                <h1>Enquiry</h1>
                <h2>Name: Thor-Erik</h2>
                <p><strong>Date: 2022.04.27</strong></p>
                <p><strong>Hotel Name: Zander K</strong></p>
                <p>Phone: 47474747</p>
                <p>Email: thorerik88@hotmail.com</p>
                <p>Checkin: 2022.04.30</p>
                <p>Checkout: 2022.05.01</p>
                <p>Guests: 4</p>
                <p>Rooms: 2</p>
                <p>Wants newsletters</p>
            </div>
            <TravelTips />
          </div>
        </div>
      </Container> 
      : 
      <Login />}
    </>
   );
}
 
export default Enquiries;