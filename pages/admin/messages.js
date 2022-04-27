import styles from '../../styles/components/reuse/AdminDash.module.scss';

import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import Login from '../login';
import AdminDash from '../../components/layout/AdminDash';
import TravelTips from '../../components/layout/TravelTips';

import { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from '../../context/Context';

const Messages = () => {

  const { auth } = useContext( AuthContext );  

  return ( 
    <>
      <Head title={'Messages'} />
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
              <div className={styles.item}>
                <p>Name</p>
                <p>Subject</p>
                <p>Date</p>
              </div>
            </div>
            <div className={styles.details}>
              <h2>Name</h2>
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
 
export default Messages;