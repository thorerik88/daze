
import styles from '../../styles/components/reuse/AdminDash.module.scss';
import { useContext } from "react";
import Link from 'next/link';

import Login from '../login';
import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import AdminDash from '../../components/layout/AdminDash';
import TravelTips from '../../components/layout/TravelTips';
import { AuthContext } from '../../context/Context';

import { initializeApp } from "firebase/app";
import { clientCredentials } from "../../firebaseConfig";
import { getDocs, collection ,getFirestore } from "firebase/firestore";
import { getStorage, } from "firebase/storage";

export const getStaticProps = async () => {
  initializeApp(clientCredentials);
  const db = getFirestore();  
  const colRef = collection(db, 'enquiries');

  const storage = getStorage();
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

const Enquiries = ({ enquiries }) => {

  const { auth } = useContext( AuthContext );

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
                      <p>{item.name}</p>
                      <p>{item.rooms}</p>
                      <p>{item.checkin}</p>
                    </div>)
                  })}
              </div>
              <div className={styles.details}>
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