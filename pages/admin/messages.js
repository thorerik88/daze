import styles from '../../styles/components/reuse/AdminDash.module.scss';

import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import MessageItems from "../../components/layout/MessageItems";
import { load } from '../../storage/storage';
import AdminDash from '../../components/layout/AdminDash';
import TravelTips from '../../components/layout/TravelTips';

import { useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';

const Messages = () => {

  useEffect(() => {
    if (!load('token')) {
      Router.push('/')
    }
  })
  


  return ( 
    <>
      <Head title={'Messages'} />
      <Container>
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
            <MessageItems headings={['Name', 'Subject', 'Date']} />
            <TravelTips />
          </div>
        </div>
      </Container>
    </>
   );
}
 
export default Messages;