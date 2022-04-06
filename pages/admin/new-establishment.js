import styles from '../../styles/components/reuse/AdminDash.module.scss';
import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import { load } from '../../storage/storage';
import NewForm from '../../components/new-establishment/NewForm';
import AdminDash from '../../components/layout/AdminDash';
import TravelTips from '../../components/layout/TravelTips';

import { useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';


const NewEstablishment = () => {

  useEffect(() => {
    if (!load('token')) {
      Router.push('/')
    }
  })

  return ( 
    <>
      <Head title={'New Establishment'} />
      <Container>
        <ul className={styles.breadcrumbs}>
          <Link href='/admin'><li><a>admin</a></li></Link>
          <li>{'>'}</li>
          <li>new-establishment</li>
        </ul>
        <div className={styles.adminSideMenu}>
          <div className={styles.sideMenu}>
            <AdminDash />
          </div>
          <div className={styles.mainContent}>
            <NewForm />
            <TravelTips />
          </div>
        </div>
      </Container>
    </>
   );
}
 
export default NewEstablishment;