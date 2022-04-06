
import styles from '../../styles/components/reuse/AdminDash.module.scss';
import { useEffect } from "react";
import Link from 'next/link';

import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import MessageItems from "../../components/layout/MessageItems";
import { load } from '../../storage/storage';
import AdminDash from '../../components/layout/AdminDash';
import TravelTips from '../../components/layout/TravelTips';

const Enquiries = () => {

  useEffect(() => {
    if (!load('token')) {
      Router.push('/')
    }
  })

  return ( 
    <>
      <Head title={'Enquiries'} />
      <Container>
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
      </Container>
    </>
   );
}
 
export default Enquiries;