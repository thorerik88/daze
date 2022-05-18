import styles from '../../styles/components/reuse/AdminDash.module.scss';
import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import NewForm from '../../components/new-establishment/NewForm';
import AdminDash from '../../components/layout/AdminDash';
import TravelTips from '../../components/layout/TravelTips';

import { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from '../../context/Context';
import Login from '../login';


const NewEstablishment = () => {

  const { auth } = useContext( AuthContext );

  return ( 
    <>
      <Head title={'New Establishment'} />
      {auth ? 
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
      :
        <Login />
      }
    </>
   );
}
 
export default NewEstablishment;