
import styles from '../../styles/components/reuse/AdminDash.module.scss';
import { useContext, useEffect } from "react";
import Link from 'next/link';
import Router from 'next/router';

import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import MessageItems from "../../components/layout/MessageItems";
import AdminDash from '../../components/layout/AdminDash';
import TravelTips from '../../components/layout/TravelTips';
import { AuthContext } from '../../context/Context';

const Enquiries = () => {

    const redirect = () => {
      useEffect(() => {
        Router.push('/')
      })
    }
  
  

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
            <MessageItems headings={['Name', 'Rooms', 'Date']} />
            <TravelTips />
          </div>
        </div>
      </Container> : redirect()}
    </>
   );
}
 
export default Enquiries;