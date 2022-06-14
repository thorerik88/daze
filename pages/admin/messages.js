import styles from '../../styles/components/reuse/AdminDash.module.scss';

import { useContext, useState } from "react";
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
  
  const colRef = collection(db, 'contact');
  const snapshot = await getDocs(colRef);
  const messages = [];
  
  for await (let message of snapshot.docs) {
    let docID = message.id;
    messages.push({
      ...message.data(),
      docID,
    });
  }
  

  return {
    props: { 
      messages,
    },
    revalidate: 10,
  }
}

export const getDocument = async (id) => {
  const docRef = doc(db, 'contact', id);
  const snapshot = await getDoc(docRef);
  const messages = [];
  
  messages.push({
    ...snapshot.data(),
  })

  return {
    props: {
      item: messages,
    }
  }
}

export const myLoader = async (id) => {
  return await getDocument(id);
}


const Messages = ({ messages }) => {

  // sort and create date to display
  sortAndDate(messages)
  
  
  const { auth } = useContext( AuthContext );  

  const [message, setMessage] = useState([]);

  const handleClick = async e => {
    let id = e.target.dataset.id
    let list = await myLoader(id)
    setMessage(list.props.item)
  }

  if (message.length === 1) {
   sortAndDate(message)
  }
  
  

  return ( 
    <>
      <Head title={'Enquiries'} />
      {auth ? <Container>
        <ul className={styles.breadcrumbs}>
          <Link href='/admin'><li><a>admin</a></li></Link>
          <li>{'>'}</li>
          <li>messages</li>
        </ul>
        <div className={styles.adminSideMenu}>
          <div className={styles.sideMenu}>
            <AdminDash />
          </div>
          <div className={styles.mainContent}>
            <h1>Messages</h1>
              <div className={styles.wrapper}>
                <div className={styles.heading}>
                  <p>Name</p>
                  <p>Subject</p>
                  <p>Date</p>
                </div>
                {messages ? messages.map(item => {
                  return (
                    <div key={item.docID} className={styles.item}>
                      <p data-id={`${item.docID}`} onClick={handleClick}>{item.name}</p>
                      <p data-id={`${item.docID}`} onClick={handleClick}>{item.subject}</p>
                      <p data-id={`${item.docID}`} onClick={handleClick}>{item.newDate}</p>
                    </div>)
                  })
                : <div className={styles.item}>
                    <h2>No messages</h2>
                  </div>
                }
                </div>
                {message ? message.map(item => {
                  return (
                    <div key={'1'} className={styles.details}>
                      <h1>{item.name}</h1>
                      <div className={styles.detailsItem}>
                        <p>Name:</p>
                        <p>{item.name}</p>
                      </div>
                      <div className={styles.detailsItem}>
                        <p>Message Sent:</p>
                        <p>{item.newDate} {item.time}</p>
                      </div>
                      <div className={styles.detailsItem}>
                        <p>Email:</p>
                        <p>{item.email} </p>
                      </div>
                      <div className={styles.detailsItem}>
                        <p>Message:</p>
                        <p>{item.message}</p>
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
 
export default Messages;