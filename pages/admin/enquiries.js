
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
import { sortAndDate } from '../../constants/date';

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
      enquiries,
    },
    revalidate: 10,
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

  sortAndDate(enquiries)
  
  const [enquiry, setEnquiry] = useState([]);

  const handleClick = async e => {
    let id = e.target.dataset.id
    let list = await myLoader(id)
    setEnquiry(list.props.item)
  }

  if(enquiry.length === 1) {
    sortAndDate(enquiry)
  }

  // useEffect(() => {
  //   setMenuBorder('enquiry')
  // })

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
                      <p>{item.newDate}</p>
                    </div>)
                  })}
                </div>
                {enquiry ? enquiry.map(item => {
                  return (
                    <div key={'1'} className={styles.details}>
                      <h1>{item.name}</h1>
                      <div className={styles.detailsItem}>
                        <p>Name:</p>
                        <p>{item.name}</p>
                      </div>
                      <div className={styles.detailsItem}>
                        <p>Enquiry Sent:</p>
                        <p>{item.newDate} {item.time}</p>
                      </div>
                      <div className={styles.detailsItem}>
                        <p>Hotel Name:</p>
                        <p>{item.hotel_name}</p>
                      </div>
                      <div className={styles.detailsItem}>
                        <p>Phone:</p>
                        <p>{item.phone}</p>
                      </div>
                      <div className={styles.detailsItem}>
                        <p>Email:</p>
                        <p>{item.email}</p>
                      </div>
                      <div className={styles.detailsItem}>
                        <p>Checkin / Checkout:</p>
                        <p>{item.checkin} / {item.checkout}</p>
                      </div>
                      <div className={styles.detailsItem}>
                        <p>Guests:</p>
                        <p>{item.guests}</p>
                      </div>
                      <div className={styles.detailsItem}>
                        <p>Rooms:</p>
                        <p>{item.rooms}</p>
                      </div>
                      <div className={styles.detailsItem}>
                        <p>Newsletter</p>
                        {item.newsletter ? <p>Yes</p> : <p>No</p>}
                      </div>
                    </div>
                  )
                }) : ''}
                
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